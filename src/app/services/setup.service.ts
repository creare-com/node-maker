import { Injectable } from '@angular/core';
import { SpecsService } from '../node-inputs/specs.service';
import { PipelinesService } from '../node-inputs/pipelines.service';
import { PipelineEditorService } from '../pipeline-editor/pipeline-editor.service';
import { Pipeline } from '../node-inputs/pipeline';
import { LeafletService } from './leaflet.service';
import { initialSpec } from '../initial-spec/spec';
import { initialSpecReverse } from '../initial-spec/specReverse';
import { initialInterpolationMethods } from '../initial-spec/interpolationMethods';
import { initialColormapList } from '../initial-spec/colormapList';

@Injectable({
  providedIn: 'root',
})

export class SetupService {

    constructor(
        private specsService:SpecsService,
        private pipelinesService:PipelinesService,
        private pipelineEditorService:PipelineEditorService,
        private leafletService:LeafletService
        )
    { }

    editorParams = this.pipelineEditorService.editorParams;
    leafletParams = this.leafletService.leafletParams;

    setupParams:any= {
        baseURL:'../',
        categoriesList:undefined,
        spec:initialSpec,
        specReverse:initialSpecReverse,
        interpolationMethods:initialInterpolationMethods,
        colormapList:initialColormapList,
        customTraits:["InterpolationTrait","NodeTrait","DimsTrait","Enum","Dict","Bool","Unicode","Any","Coordinates"],
        customList:["dims","source","sources","inputs"],
        allowedDefaults:["null",null,undefined,"{}","[]"],
        pipelineAPIPath:undefined,
        showEditLocation:undefined,
        WIRP: window.location.href.includes("NodeMaker")?false:true,
        unsupportedTypes:["ArrayTrait"],
        unsupportedAttrs:["sources"],
        versionInfo:undefined
    };

    setAPIPath(path:any) {
        var p1:any;
        var p2:any;
        var b1 = (<HTMLInputElement>document.getElementById('serverButton'))
        var b2 = (<HTMLInputElement>document.getElementById('localhostButton'))
        try {
            var k:string = (<HTMLInputElement>document.getElementById('apiKey')).value;
        }
        catch {
            var k = "onlySomeUsersKnowThis";
        }
        if (path=="default") {
            p1 = '../api/publish?KEY='+k;
            p2 = '../api/publish/UI_spec?KEY='+k;
            if (b1!=null) {
                b1.classList.toggle('active',true);
            }
            if (b2!=null) {
                b2.classList.toggle('active',false);
            }
            this.setupParams.baseURL = '../';
        }
        if (path=="localhost")  {
            p1 = 'http://127.0.0.1:5000/api/publish?KEY='+k;
            p2 = 'http://127.0.0.1:5000/api/publish/UI_spec?KEY='+k;
            if (b1!=null) {
                b1.classList.toggle('active',false);
            }
            if (b2!=null) {
                b2.classList.toggle('active',true);
            }
            this.setupParams.baseURL = 'http://127.0.0.1:5000/';
        }
        this.setupParams.pipelineAPIPath=p1;
        this.pipelinesService.baseApiUrl = p1;
        // this.pipelinesService.setAPIPath(p1);
        this.specsService.setAPIPath(p2);
        this.getPipelines();
        this.getSpecs();
        this.getDatetimes();
    }

    getSpecs(): void {
        this.specsService.getSpecs().subscribe(specsResponse => {
            if (specsResponse.categories && specsResponse.categories_reverse) {
                console.log('specsResponse["categories"]',JSON.parse(JSON.stringify(specsResponse["categories"])));
                // console.log('specsResponse["categories_reverse"]',specsResponse["categories_reverse"]);
                // console.log('specsResponse["interpolators"]',specsResponse["interpolators"]);
                // console.log('specsResponse["color_maps"]',specsResponse["color_maps"]);
                console.log('specsResponse["version_info"]',specsResponse["version_info"]);
                this.setupParams.spec=specsResponse["categories"];
                this.setupParams.specReverse=specsResponse["categories_reverse"];
                this.setupParams.interpolationMethods=specsResponse["interpolators"];
                this.setupParams.colormapList=specsResponse["color_maps"];
                this.setupParams.versionInfo=specsResponse["version_info"];
            }
            else {
                this.setupParams.spec=initialSpec;
                this.setupParams.specReverse=initialSpecReverse;
                this.setupParams.interpolationMethods=initialInterpolationMethods;
                this.setupParams.colormapList=initialColormapList;
            }
            //delete extra unecessary things if WIRP is selected
            if (this.setupParams.WIRP) {
                for (const [key0, value0] of Object.entries(this.setupParams.spec)) {
                    if (key0!="soilmap") {
                        delete this.setupParams.spec[key0];
                    }
                    else if (key0=="soilmap") {
                        for (const [key1, value1] of Object.entries(this.setupParams.spec[key0])) {
                            if (key1!="CustomSpeedMap") {
                                delete this.setupParams.spec[key0][key1];
                            }
                        }
                    }
                }
            }
            console.log("spec: ",this.setupParams.spec);
            console.log("specReverse: ",this.setupParams.specReverse);
            if (this.setupParams.spec && this.setupParams.specReverse) {
                for (const [key0, value0] of Object.entries(this.setupParams.spec)) {
                    for (const [key1, value1] of Object.entries(this.setupParams.spec[key0])) {
                        for (const [key2, value2] of Object.entries(this.setupParams.spec[key0][key1]["attrs"])) {
                            if (this.setupParams.spec[key0] && this.setupParams.spec[key0][key1] && this.setupParams.spec[key0][key1]["attrs"][key2]) {
                                var type = this.setupParams.spec[key0][key1]["attrs"][key2]["type"];
                                if (this.setupParams.unsupportedTypes.includes(type) || this.setupParams.unsupportedAttrs.includes(key2)) {
                                    delete this.setupParams.spec[key0][key1];
                                    if (Object.entries(this.setupParams.spec[key0]).length==0) {
                                        delete this.setupParams.spec[key0];
                                    }
                                }
                            }
                        }
                    }
                }
            }
            //proceed as normal
            this.setupParams.categoriesList = Object.keys(this.setupParams.spec);

            //populate the customList for html rendering
            Object.keys(this.setupParams.spec).forEach((k0: string) => {
                Object.keys(this.setupParams.spec[k0]).forEach((k1: string) => {
                    Object.keys(this.setupParams.spec[k0][k1]["attrs"]).forEach((attrKey: string) => {
                        var sourceType = this.setupParams.spec[k0][k1]["attrs"][attrKey]["type"];
                        if (this.setupParams.customTraits.includes(sourceType)) {
                            this.setupParams.customList.push(attrKey);
                        }
                    });
                });
            });
        });
    }

    getDatetimes(): void {
        this.specsService.getDatetimes().subscribe(resp => {
            // console.log("resp: ",resp);
            if (resp && (resp.message != "nothing")) {
                this.leafletParams.leafletTimes=resp;
            }
            else {
                this.leafletParams.leafletTimes = undefined;
            }
            this.leafletService.removePicker();
            this.leafletService.addPicker();
        });
    }

    //getting pipelines from endpoint
    getPipelines(): void {
        this.pipelinesService.getPipelines().subscribe(pipelineResponse => {
            if (pipelineResponse.pipelines) {
                console.log("pipelineResponse.pipelines",pipelineResponse.pipelines);
                let keys:string[] = Object.keys(pipelineResponse.pipelines);
                this.editorParams.pipelines = [];
                keys.forEach((name, index) => {
                    let id = index + 1; // No ids from RPP, so just using the index starting at 1.
                    const aPipeline: Pipeline = { name, id } as Pipeline;
                    aPipeline.data = pipelineResponse.pipelines[name];
                    //reload the map if submitting the pipeline that is currently being viewed
                    if (aPipeline.name==this.leafletParams.displayedPipeline) {
                        //update map and keep selected
                        //add default style
                        //filter out key 'podpac_version' if it is there
                        let key = Object.keys(aPipeline.data)[Object.keys(aPipeline.data).length-1];
                        if (key=="podpac_version") {
                            key = Object.keys(aPipeline.data)[Object.keys(aPipeline.data).length-2];
                        }
                        const split_node = aPipeline.data[key].node.split(".");
                        let prepend = aPipeline.data[key].plugin ? aPipeline.data[key].plugin+"." :"podpac.";
                        let last_element=split_node.length-1;
                        let category = this.setupParams.specReverse[prepend+aPipeline.data[key].node];
                        let node = split_node[last_element];
                        let defStyle = this.setupParams.spec[category][node]['style'];
                        console.log("defStyle",defStyle);
                        this.leafletService.viewPipeline(aPipeline,defStyle,true);
                        // var curName = this.editorParams.pipelineName;
                        // var ele:any = document.getElementById(curName);
                        // ele.style.backgroundColor = "lightblue";
                    }

                    //for WIRP, only add speedmaps
                    if (this.setupParams.WIRP) {
                        //filter out key 'podpac_version' if it is there
                        let key = Object.keys(aPipeline.data)[Object.keys(aPipeline.data).length-1];
                        let last = Object.keys(aPipeline.data).length-1;
                        if (key=="podpac_version") {
                            key = Object.keys(aPipeline.data)[Object.keys(aPipeline.data).length-2];
                            last = Object.keys(aPipeline.data).length-2;
                        }
                        var split = aPipeline.data[Object.keys(aPipeline.data)[last]].node.split(".");
                        var nodeType = split[split.length-1];
                        if (nodeType=="CustomSpeedMap") {
                            this.editorParams.pipelines.push(aPipeline);
                        }
                    }
                    else if (!this.setupParams.WIRP) {
                        this.editorParams.pipelines.push(aPipeline);
                    }
                });
            }
            else {
                this.editorParams.pipelines=[];
                console.log("did not get any pipelines from the server.");
            }
            if (pipelineResponse.outputs) {
                let keys:string[] = Object.keys(pipelineResponse.outputs);
                this.editorParams.outputsTracker = {};
                keys.forEach(k => {
                    this.editorParams.outputsTracker[k]={};

                    if (pipelineResponse.outputs[k]!=null) {
                        this.editorParams.outputsTracker[k]["options"]=pipelineResponse.outputs[k];
                        this.editorParams.outputsTracker[k]["current"]=this.editorParams.outputsTracker[k]["options"][0];
                    } else {
                        this.editorParams.outputsTracker[k]["options"]=[];
                        this.editorParams.outputsTracker[k]["current"]=undefined;
                    }
                });
            }
            else {
                this.editorParams.outputsTracker = {};
            }
        });
    }

}