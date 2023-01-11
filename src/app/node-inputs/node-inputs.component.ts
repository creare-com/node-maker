import { Component, OnDestroy, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { PipelinesService } from './pipelines.service';
import { Pipeline } from './pipeline';
import { SpecsService } from './specs.service';
import { faPencilAlt, faEye, faTrash, faDragon, faDog, faRoute, faTruck, faLocationDot, faLock, faRoad, faBan } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { CustomModal } from '../modal/modal.component';
import { PipelineEditor } from '../pipeline-editor/pipeline-editor.component';
import { LegendService } from '../legend/legend/legend.service';
import { BusyboxService } from '../busybox/busybox.service';
import { PipelineEditorService } from '../pipeline-editor/pipeline-editor.service';
import { SetupService } from '../services/setup.service';
import { LeafletService } from '../services/leaflet.service';
import { LegendComponent } from '../legend/legend/legend.component';
import { RouteService } from '../route/route/route.service';
import Cookies from 'js-cookie';
import { MessageboxComponent } from '../messagebox/messagebox.component';

@Component({
  selector: 'app-node-inputs',
  templateUrl: './node-inputs.component.html',
  providers: [PipelinesService,SpecsService,CustomModal,PipelineEditor,LegendService,LegendComponent,RouteService,MessageboxComponent],
  styleUrls: ['./node-inputs.component.css']
})
export class NodeInputsComponent implements OnInit, AfterViewInit, OnDestroy {

  // Font awesome define images
  faPencilAlt = faPencilAlt;
  faEye = faEye;
  faTrash = faTrash;
  faDragon = faDragon;
  faDog = faDog;
  faRoute = faRoute;
  faTruck = faTruck;
  faLocationDot = faLocationDot;
  faLock = faLock;
  faRoad = faRoad;
  faBan = faBan;
  faSquare = faSquare;

  // variables for pipelines, categories, nodes, styling, etc.
  displaySettings:any = undefined;

  constructor(private pipelinesService: PipelinesService, private specsService: SpecsService, private customModal:CustomModal,
    private pipelineEditor:PipelineEditor, private pipelineEditorService:PipelineEditorService, public setupService:SetupService, 
    public leafletService:LeafletService, public busyboxService:BusyboxService, private legendService:LegendService, 
    private routeService:RouteService) {  }

  editorParams = this.pipelineEditorService.editorParams;
  setupParams = this.setupService.setupParams;
  leafletParams = this.leafletService.leafletParams;
  legendParams = this.legendService.legendParams;
  routeParams = this.routeService.routeParams;

  ngOnDestroy(): void {
    if (this.leafletParams.map) {
      this.leafletParams.map.remove();
    } 
  }

  ngOnInit(): void {  }

  ngAfterViewInit(): void {
    var bounds:any = [];
    var zoom:any = undefined;
    try {
      bounds = [JSON.parse(String(Cookies.get("lastLeafletMapBounds")))["lat"],JSON.parse(String(Cookies.get("lastLeafletMapBounds")))["lng"]];
      zoom = Cookies.get("lastLeafletMapZoom");
      console.log(bounds,zoom);
    }
    catch {
      console.log("No leaflet map params saved as cookie(s)");
    }
    this.leafletService.init([bounds,zoom]);
    this.leafletParams.leafletURL='../api/';
    this.setupService.setAPIPath("default");

    (<any>window).this = this;
    (<any>window).onbeforeunload = function() {
      Cookies.set('lastLeafletMapBounds', JSON.stringify((<any>window).this.leafletParams.map.getBounds().getCenter()));
      Cookies.set('lastLeafletMapZoom', (<any>window).this.leafletParams.map.getZoom());
    }
    // console.log("lastLeafletMapBounds Cookie:",Cookies.get("lastLeafletMapBounds"));
    // console.log("lastLeafletMapZoom Cookie:",Cookies.get("lastLeafletMapZoom"));
    // Cookies.remove('lastLeafletMapBounds');
    // Cookies.remove('lastLeafletMapZoom');
  }

  modalWrapper(msg:string) {
    this.customModal.genModal(msg);
  }

  changeOutput(e:any) {
    console.log("changeOutput event: ",e)
    console.log("@MPU: ",e.target.value);
    console.log("@MPU: ",this.editorParams.outputsTracker);
  }

  createNewPipeline() {
    if (this.setupParams.showEditLocation=='new_pipeline') {
      this.setupParams.showEditLocation = undefined;
      // this.leafletService.addPickerOld(true);
    } 
    else {
      this.setupParams.showEditLocation = 'new_pipeline';
      this.pipelineEditor.createNewPipeline();
    }
  }

  //delete a pipeline
  delete(pipeline: Pipeline): void {
    this.pipelinesService.setAPIPath(this.setupParams.pipelineAPIPath);
    this.editorParams.pipelines = this.editorParams.pipelines.filter(n => n !== pipeline);
    this.pipelinesService.removePipeline(pipeline).subscribe(response => {
      this.setupService.getPipelines();
    });
  }

  //display settings
  showSettings() {
    var coll: any = document.getElementById("collapser_settings");
    coll.classList.toggle("active");
    if (this.displaySettings != true) {
      this.displaySettings = true;
      coll.innerHTML = "Show Settings";
    } else {
      this.displaySettings = false;
      coll.innerHTML = "Hide Settings";
    }
  }

  editClicked(pipeline:Pipeline) {
    console.log("Editing pipeline: ",pipeline);
    if (this.setupParams.showEditLocation == pipeline.name) {
      this.setupParams.showEditLocation = undefined;
      // this.leafletService.addPickerOld(true);
    }
    else {
      this.setupParams.showEditLocation = pipeline.name;
      this.pipelineEditor.editPipeline(pipeline);
    }
  }

  //view an existing pipeline
  viewClicked(pipeline: Pipeline) {
    // turn off viewing buttons for cost or speed map
    this.routeParams.viewing = {'cost':false,'speed':false};
    // proceed as normal
    if (this.leafletParams.displayedPipeline == pipeline.name) {
      this.leafletParams.displayedPipeline = undefined;
    } 
    else {
      this.leafletParams.displayedPipeline = pipeline.name;
    }

    for (let i = 0; i < this.editorParams.pipelines.length; i++) {
      var curName = this.editorParams.pipelines[i].name;
      var ele:any = document.getElementById(curName);
      if (curName == this.leafletParams.displayedPipeline) {
        ele.style.backgroundColor = "lightblue";
      } 
      else {
        ele.style.backgroundColor = "#eee";
      }
    }
    //add default style
    //filter out key 'podpac_version' if it is there
    let key = Object.keys(pipeline.data)[Object.keys(pipeline.data).length-1];
    if (key=="podpac_version") {
      key = Object.keys(pipeline.data)[Object.keys(pipeline.data).length-2];
    }
    const split_node = pipeline.data[key].node.split(".");
    let prepend = pipeline.data[key].plugin ? pipeline.data[key].plugin+"." :"podpac.";
    let last_element=split_node.length-1;
    let category = this.setupParams.specReverse[prepend+pipeline.data[key].node];
    let node = split_node[last_element];
    let defStyle = this.setupParams.spec[category][node]['style'];
    console.log("defStyle",defStyle);
    this.leafletService.viewPipeline(pipeline,defStyle);
  }

  //change between local and server for development
  setAPIPath(path:any) {
    this.modalWrapper("API Base path changed to: "+path);
    this.setupService.setAPIPath(path);
    if (path=="default") {
      this.leafletParams.leafletURL='../api/';
    }
    if (path=="localhost") {
      this.leafletParams.leafletURL='http://127.0.0.1:5000/api';
    }
  }

}