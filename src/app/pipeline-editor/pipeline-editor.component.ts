import { Component, ViewChild } from '@angular/core';
import { PipelinesService } from '../node-inputs/pipelines.service';
import { Pipeline } from '../node-inputs/pipeline';
import { faPencilAlt, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Marked, MarkedOptions } from '@ts-stack/markdown';
import 'moment-timezone';
import 'eonasdan-bootstrap-datetimepicker';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';
import { CustomModal } from '../modal/modal.component';
import { PipelineEditorService } from './pipeline-editor.service';
import { SetupService } from '../services/setup.service';
import { LeafletService } from '../services/leaflet.service';
import { text } from '@fortawesome/fontawesome-svg-core';

@Component({
    selector: 'app-pipeline-editor',
    providers: [PipelinesService,CustomModal],
    templateUrl: './pipeline-editor.component.html'
  })

export class PipelineEditor {

  constructor(private pipelinesService:PipelinesService, private customModal:CustomModal,
    private pipelineEditorService:PipelineEditorService, public setupService:SetupService, public leafletService:LeafletService)
  {
    this.editorOptions = new JsonEditorOptions();
    this.editor = new JsonEditorComponent;
  }

  // Font awesome define images
  faPencilAlt = faPencilAlt;
  faEye = faEye;
  faTrash = faTrash;

  //multiselect dropdown variables
  dropdownSettings:IDropdownSettings = {
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    enableCheckAll: false,
    // selectAllText: 'Select All',
    // unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };

  //json editor
  public editorOptions: JsonEditorOptions;

  @ViewChild(JsonEditorComponent, { static: false }) editor: JsonEditorComponent;

  editorParams = this.pipelineEditorService.editorParams;
  setupParams = this.setupService.setupParams;

  JSONOptions:any

  ngOnInit(): void { 
    this.JSONOptions = this.makeOptions();
  }

  showOptionalAttrs() {
    var coll: any = document.getElementById("collapser_attr");
    coll.classList.toggle("active");
    var content: any = document.getElementById("attr_collapse");
    if (content.style.display === "block") {
      content.style.display = "none";
      coll.innerHTML = "Show";
    } else {
      content.style.display = "block";
      coll.innerHTML = "Hide";
    }
  }

  showStyleAttrs() {
    var coll: any = document.getElementById("collapser_style");
    coll.classList.toggle("active");
    var content: any = document.getElementById("style_collapse");
    if (content.style.display === "block") {
      content.style.display = "none";
      coll.innerHTML = "Show";
    } else {
      content.style.display = "block";
      coll.innerHTML = "Hide";
    }
  }

  modalWrapper(msg:string) {
    this.customModal.genModal(msg);
  }

  //json editor functions
  makeOptions = () => {
    // var opt = new JsonEditorOptions(); (<any>this.editorOptions).templates = [{maxLines:5}]
    var opt = new JsonEditorOptions();
    opt.mode = 'code';
    return opt
  }

  getData(e:any,a:any) {
    // console.log(this.editor.get());
    this.editorParams.JSON_data[a]=this.editor.get();
    // console.log(this.JSON_data[a]);
  }

  //multiselect functions
  onItemSelectDims(item: any) {
    // var c=0
    // console.log("selected dims",this.selectedItemsDims);
    // Object.values(this.selectedItemsDims).forEach((val: any) => {
    //   if (val.item_text==item.item_text) {
    //     console.log("already inside...");
    //   }
    // });
  }
  onSelectAllDims(items: any) {
    // console.log(items);
  }
  onItemSelectPipelines(item: any) {
    // console.log("selected pipelines",this.selectedItemsPipelines);
  }
  onSelectAllPipelines(items: any) {
    // console.log(items);
  }

  createNewPipeline() {
    //clear the current pipeline
    this.editorParams.pipelineName="";
    this.editorParams.selectedCategory="Choose Category";
    this.editorParams.selectedColormap="Choose Colormap";
    this.editorParams.climLower="";
    this.editorParams.climUpper="";
    this.nodeSetter("Choose Node");
    this.editorParams.attrs={};
    this.editorParams.attrsList=[];
    this.editorParams.style={};
    this.editorParams.styleList=[];
    this.editorParams.helpText="";
    this.editorParams.nodesList=[];
    this.editorParams.JSON_data={};
    this.editorParams.currentAttrValues={};
    this.editorParams.dropdownListDims=['lat', 'lon', 'time', 'alt'];
    this.editorParams.selectedItemsDims=[];
    this.editorParams.dropdownListPipelines=[];
    this.editorParams.selectedItemsPipelines=[];
    //remove attrs that are unnecessary. Do this in podpac eventually
    delete this.editorParams.attrs['units'];
    delete this.editorParams.attrs["output"];
    delete this.editorParams.attrs["outputs"];
    //for WIRP only, start with CustomSpeedMap node selected
    if (this.setupParams.WIRP) {
      this.editorParams.selectedCategory="soilmap";
      this.editorParams.nodesList = Object.keys(this.setupParams.spec[this.editorParams.selectedCategory]);
      this.nodeSetter("CustomSpeedMap");
      this.editorParams.attrs = this.setupParams.spec[this.editorParams.selectedCategory][this.editorParams.selectedNode]['attrs'];
      this.editorParams.attrsList = Object.keys(this.editorParams.attrs);
      this.editorParams.style = this.setupParams.spec[this.editorParams.selectedCategory][this.editorParams.selectedNode]['style'];
      this.editorParams.styleList = Object.keys(this.editorParams.style);
      delete this.editorParams.styleList["clim"];
      this.renderAttrs();
      this.renderHelp();
    }
  }

  //generate textbox for custom interpolations
  showCustomInterpolation(e:any,loc:String) {
    var id:any;
    if (loc=='required') {
      id = "custom_interpolation_required";
    } else if (loc=='optional') {
      id = "custom_interpolation_optional";
    } else {}

    if (e.target.value == 'Custom') {
      console.log("Detected custom interpolationTrait");
      (<HTMLInputElement>document.getElementById(id)).style.display = 'block';
    }
    else {
      (<HTMLInputElement>document.getElementById(id)).style.display = 'none';
    }
  }

  cleanPrePost(pList:any) {
    var pListClean: any = [];
    for (let i = 0; i < pList.length; i++) {
      pListClean.push(pList[i].replaceAll("AAA_input_","").replaceAll("_input_AAA",""));
    }
    return pListClean;
  }

  generatePipelineInputs(inputPipelines:any, inputs: any, node:any) {
    var pList;
    if (Object.keys(inputs).length>0) {
      //we need to add parse and add the inputs
      if (node=="Arithmetic") {
        //keys for Arithmetic
        pList = Object.keys(inputs);
      }
      else {
        //values for all others
        pList = Object.values(inputs);
        pList = this.cleanPrePost(pList);
      }
      //iterate over pList
      pList.forEach((pName:any) => {
        Object.values(this.editorParams.pipelines).forEach(pipelineValue => {
          if (pipelineValue.name == pName) {
            //possible issue with lastPipeline if JSON is unordered
            //can I use my own metadata object like name?
            console.log("Adding "+pName);
            
            //filter out key 'podpac_version' if it is there
            let key = Object.keys(pipelineValue.data)[Object.keys(pipelineValue.data).length-1];
            let lastPipeline = Object.keys(pipelineValue.data).length-1;
            if (key=="podpac_version") {
              key = Object.keys(pipelineValue.data)[Object.keys(pipelineValue.data).length-2];
              lastPipeline = Object.keys(pipelineValue.data).length-2;
            }

            for (let i = 0; i < lastPipeline; i++) {
              console.log("Checking Inputs of: ",Object.keys(pipelineValue.data)[i]);
              //set up recursion
              var d:any = Object.values(pipelineValue.data)[i];
              let nodeString = d.node;
              let nodeStringSplit = nodeString.split(".");
              let nodeRecursive = nodeStringSplit[nodeStringSplit.length-1];
              let inputsRecursive = d.attrs["inputs"]?d.attrs["inputs"]:{}; //if no inputs key, set to {}
              inputPipelines = this.generatePipelineInputs(inputPipelines,inputsRecursive,nodeRecursive);
              //after recursion add the pipeline
              inputPipelines.push([Object.keys(pipelineValue.data)[i],Object.values(pipelineValue.data)[i]]);
            }
            inputPipelines.push(["AAA_input_"+pName+"_input_AAA",Object.values(pipelineValue.data)[lastPipeline]]);
          }
        });
      });
    }
    return inputPipelines;
  }

  //add a new pipeline
  add(name: string, styleValues:any, attrsValues:any, inputs:any): void {
    console.log("Adding Pipeline...")
    name = name.trim();
    var p:any = {};
    //get the module string and plugin string (if applicable)
    let moduleString: string = this.setupParams.spec[this.editorParams.selectedCategory][this.editorParams.selectedNode]['module'];
    let splitString = moduleString.split(".");
    let node = splitString[splitString.length-1];
    //handle plugin
    if (splitString[0]=="podpac") {
      moduleString = moduleString.replace("podpac.", '');
      var pluginString = "";
    }
    else {
      moduleString = moduleString.replace(splitString[0]+".", '');
      var pluginString = splitString[0];
    }
    console.log("attrsValues stringified",JSON.stringify(attrsValues));
    console.log("inputs stringified",JSON.stringify(inputs));

    //Build JSON object for current pipeline
    p["attrs"]=attrsValues;
    p["node"]=moduleString;
    p["style"]=styleValues;
    if (Object.keys(inputs).length>0) {
      p["inputs"]=inputs;
    }
    if (pluginString.length>0) {
      p["plugin"]=pluginString;
    }

    //Generate inputPipelines for compound nodes
    var inputPipelines: any = [];
    inputPipelines = this.generatePipelineInputs(inputPipelines,inputs,node);

    //Build the JSON string for the new pipeline
    var newPipeline:string = '{"';
    if (Object.keys(inputPipelines).length>0) {
      for (let i = 0; i < Object.keys(inputPipelines).length; i++) {
        newPipeline+=String(inputPipelines[i][0])+'":'+JSON.stringify(inputPipelines[i][1])+',"';
      }
    }
    newPipeline+=node+'":'+JSON.stringify(p)+'}';

    //Submit pipeline
    console.log("print new pipeline as string: ", newPipeline);
    console.log("print new pipeline: ", JSON.parse(newPipeline));
    this.pipelinesService.setAPIPath(this.setupParams.pipelineAPIPath);

    this.pipelinesService.addPipeline(name, newPipeline).subscribe(response => {
      this.setupService.getPipelines();
    });
    this.setupParams.showEditLocation = undefined;
  }

  //get values of all attrs during submission
  fetchAttrs(): any {
    var validAttrs:any = true;
    let attrValues: any = {};
    let inputs: any = {};
    this.editorParams.attrsList.forEach((attrKey: string) => {
      var type = this.setupParams.spec[this.editorParams.selectedCategory][this.editorParams.selectedNode]["attrs"][attrKey]["type"];
      var required = this.setupParams.spec[this.editorParams.selectedCategory][this.editorParams.selectedNode]["attrs"][attrKey]["required"];
      var schema = this.setupParams.spec[this.editorParams.selectedCategory][this.editorParams.selectedNode]["attrs"][attrKey]["schema"];
      if (type!="NodeTrait" && JSON.stringify(schema)!=JSON.stringify({"key":"Unicode","value":"NodeTrait"}) && attrKey!="sources") {
        //Handle attr types that do not have their own html input id
        //if Dict
        if (type=="Dict") {
          if (this.editorParams.JSON_data[attrKey]) {
            console.log("this.editorParams.JSON_data[attrKey]",this.editorParams.JSON_data[attrKey]);
            try {
              attrValues[attrKey] = JSON.parse(JSON.stringify(this.editorParams.JSON_data[attrKey]));
            }
            catch {
              validAttrs = "Invalid Dict structure for attribute "+attrKey;
            }
          }
        }
        //if DimsTrait
        else if (type=="DimsTrait") {
          attrValues["dims"] = [];
          for (let i = 0; i < this.editorParams.selectedItemsDims.length; i++) {
            //Check if selection is valid
            if (!this.editorParams.dropdownListDims.includes(this.editorParams.selectedItemsDims[i])) {
              validAttrs = "Invalid selection for attribute "+attrKey;
            }
            else {
              //Avoid adding duplicates in attrValues
              if (!(attrValues["dims"].includes(this.editorParams.selectedItemsDims[i]))) {
                attrValues["dims"].push(this.editorParams.selectedItemsDims[i]);
              }
            }
          }
        }
        //Handle attr types that have their own html input id
        else {
          var element = (<HTMLInputElement>document.getElementById(attrKey));
          if (element) {
            var value:any = element.value;
            //check if there is anything in the field
            if (value && value!="Choose One") {
              if (type=="InterpolationTrait") {
                if (value=="Custom") {
                  //Update attr value if custom is used
                  value = this.setupParams.spec[this.editorParams.selectedCategory][this.editorParams.selectedNode]["attrs"][attrKey]["required"]?(<HTMLInputElement>document.getElementById("custom_interpolation_required")).value:(<HTMLInputElement>document.getElementById("custom_interpolation_optional")).value;
                  //Check if custom selection is valid
                  try {
                    attrValues[attrKey] = JSON.parse(JSON.stringify(value));
                  }
                  catch {
                    validAttrs = "Invalid custom selection for attribute "+attrKey;
                  }
                }
                else {
                  //Check if selection is valid
                  if (!this.setupParams.interpolationMethods.includes(value)) {
                    validAttrs = "Invalid selection for attribute "+attrKey;
                  }
                  else {
                    attrValues[attrKey] = value;
                  }
                }
              }
              //if Int
              else if (type=="Int") {
                //Check if selection is valid
                if (!Number.isNaN(parseInt(value))) {
                  attrValues[attrKey] = parseInt(value);
                }
                else {
                  validAttrs = "Invalid selection for attribute "+attrKey;
                }
              }
              //if Float
              else if (type=="Float") {
                //Check if selection is valid
                if (!Number.isNaN(parseFloat(value))) {
                  attrValues[attrKey] = parseFloat(value);
                }
                else {
                  validAttrs = "Invalid selection for attribute "+attrKey;
                }
              }
              //if Bool
              else if (type=="Bool") {
                //Check if selection is valid
                if (value.toLowerCase()=="true") {
                  attrValues[attrKey] = true;
                }
                else if (value.toLowerCase()=="false") {
                  attrValues[attrKey] = false;
                }
                else {
                  validAttrs = "Invalid selection for attribute "+attrKey;
                }                
              }
              //if List
              else if (type=="List") {
                //Check if selection is valid
                try {
                  if (typeof value == 'string') {
                    attrValues[attrKey] = JSON.parse(value);
                  }
                  else {
                    attrValues[attrKey] = JSON.parse(JSON.stringify(value));
                  }
                }
                catch {
                  validAttrs = "Invalid selection for attribute "+attrKey;
                }
              }
              //if Enum
              else if (type=="Enum") {
                //No need to check Enum
                attrValues[attrKey] = value;
              }
              //if Unicode
              else if (type=="Unicode") {
                //No need to check Unicode
                attrValues[attrKey] = value;
              }
              //if other unspecified type?
              else {
                console.log("Attribute "+attrKey+" with type "+type+" treated as string");
                attrValues[attrKey] = value;
              }
            }
            //if no value, check default
            else if (!value || value=="Choose One") {
              if (this.setupParams.spec[this.editorParams.selectedCategory][this.editorParams.selectedNode]["attrs"][attrKey]["default"] && attrKey!="outputs") {
                attrValues[attrKey] = this.setupParams.spec[this.editorParams.selectedCategory][this.editorParams.selectedNode]["attrs"][attrKey]["default"];
              }
            }
            //log unexpected unhandled issues
            else {
              console.log("missing value for " + attrKey);
            }
          }
          //log unexpected unhandled issues
          else {
            console.log("unhandled issue with " + attrKey);
          }
        }
      }
      //if Dict of NodeTraits (only for 'inputs' attr)
      else if (JSON.stringify(schema)==JSON.stringify({"key":"Unicode","value":"NodeTrait"})) {
        if (this.editorParams.selectedItemsPipelines.length>0) {
          var cnt = 0;
          var usedPipelines:any = [];
          for (let i = 0; i < this.editorParams.selectedItemsPipelines.length; i++) {
            usedPipelines.push(this.editorParams.selectedItemsPipelines[i].item_text);
          }
          try {
            Object.values(this.editorParams.pipelines).forEach(pipelineValue => {
              if (usedPipelines.includes(String(pipelineValue.name))) {
                inputs[String(pipelineValue.name)]="AAA_input_" + this.editorParams.selectedItemsPipelines[cnt].item_text + "_input_AAA";
                cnt+=1
              }
            });
          }
          catch {
            console.log("error parsing pipelines when submitting");
            validAttrs = "Invalid selection for attribute "+attrKey;
          }
        }
        else {
          validAttrs = "Attribute "+attrKey+" expected at least one product to be selected";
        }
      }
      //if NodeTrait
      else if (type=="NodeTrait") {
        var element = (<HTMLInputElement>document.getElementById(attrKey));
        if (element) {
          var value:any = element.value;
          if (value && value!="Choose Product") {
            inputs[attrKey]="AAA_input_" + String(value) + "_input_AAA";
          }
          else {
            if (this.setupParams.spec[this.editorParams.selectedCategory][this.editorParams.selectedNode]["attrs"][attrKey]["required"]) {
              validAttrs = "Attribute "+attrKey+" expected a product to be selected";
            }
          }
        }
        else {
          validAttrs = "Issue with attribute "+attrKey;
        }
      }
      else if (this.setupParams.unsupportedAttrs.includes(attrKey)) {
        validAttrs = "The attribute "+attrKey+" is not yet supported";
      }
      else {
        if (this.setupParams.unsupportedTypes.includes(type)) {
          validAttrs = "The attribute "+attrKey+" is not yet supported";
        }
        else {
          console.log("Issue with attr: "+attrKey);
        }
      }
    });
    return [attrValues,inputs,validAttrs];
  }

  //get style values during submission
  fetchStyle(): any {
    var validStyle:any = true;
    var styleValues:any = {};
    var colormapParams: string = this.editorParams.selectedColormap;
    if (this.setupParams.colormapList.includes(colormapParams)) {
      styleValues["colormap"] = colormapParams;
    }
    if (!Number.isNaN(parseFloat(this.editorParams.climLower)) && !Number.isNaN(parseFloat(this.editorParams.climUpper))) {
      styleValues["clim"] = [parseFloat(this.editorParams.climLower),parseFloat(this.editorParams.climUpper)];
    }
    if (this.editorParams.climLower.length>0 && this.editorParams.climUpper.length>0) {
      if (Number.isNaN(parseFloat(this.editorParams.climLower)) || Number.isNaN(parseFloat(this.editorParams.climUpper))) {
        validStyle = "Invalid value for clim";
      }
    }
    Object.keys(this.editorParams.style).forEach((styleKey: string) => {
      if (styleKey!="colormap" && styleKey!="clim") {
        var element = (<HTMLInputElement>document.getElementById(styleKey));
        if (element) {
          var value:any = element.value;
          //check if there is anything in the field
          if (value) {
            //TODO: Eventually implement checking on these values
            styleValues[styleKey] = value;
          }
          //if no text in attr check if there is a default value
          if (!value) {
            if (this.setupParams.spec[this.editorParams.selectedCategory][this.editorParams.selectedNode]["style"][styleKey]["default"] && styleKey!="outputs") {
              styleValues[styleKey]=this.setupParams.spec[this.editorParams.selectedCategory][this.editorParams.selectedNode]["style"][styleKey]["default"];
            }
          }
        }
      }
    });
    return [styleValues,validStyle];
  }

  //generate the attr options after node is changed
  renderAttrs() {
    //create attr value object that is 'empty'
    this.editorParams.currentAttrValues={};
    this.editorParams.JSON_data={};
    Object.keys(this.editorParams.attrs).forEach(k => {
      if (!this.setupParams.allowedDefaults.includes(this.editorParams.attrs[k]["default"])) {
        this.editorParams.currentAttrValues[k]=this.editorParams.attrs[k]["default"];
        if (this.setupParams.spec[this.editorParams.selectedCategory][this.editorParams.selectedNode]['attrs'][k]['type']=='Dict') {
          this.editorParams.JSON_data[k]=this.editorParams.attrs[k]["default"];
        }
      }
      else {
        this.editorParams.currentAttrValues[k]="";
      }
    });
    var c=1;
    this.editorParams.dropdownListPipelines = [];
    Object.values(this.editorParams.pipelines).forEach(pipelineValue => {
      this.editorParams.dropdownListPipelines.push( { item_id: c, item_text: String(pipelineValue.name) } );
      c+=1;
    });
    this.editorParams.selectedItemsPipelines = [];
    this.editorParams.selectedItemsDims = [];
  }

  //generate help text after node is selected
  renderHelp() {
    if (this.editorParams.selectedCategory!="Choose Category" && this.editorParams.selectedNode!="Choose Node") {
      if (this.setupParams.spec[this.editorParams.selectedCategory][this.editorParams.selectedNode]["help"]) {
        // this.editorParams.helpText = Marked.parse(this.setupParams.spec[this.editorParams.selectedCategory][this.editorParams.selectedNode]["help"]);
        this.editorParams.helpText = this.setupParams.spec[this.editorParams.selectedCategory][this.editorParams.selectedNode]["help"];
      }
      else {
        this.editorParams.helpText = "";
      }
    }
  }

  //edit an existing pipeline
  editPipeline(pipeline:Pipeline) {
    this.editorParams.pipelineName = pipeline.name;
    if (pipeline.data) {
      //filter out key 'podpac_version' if it is there
      let key = Object.keys(pipeline.data)[Object.keys(pipeline.data).length-1];
      if (key=="podpac_version") {
        key = Object.keys(pipeline.data)[Object.keys(pipeline.data).length-2];
      }
      this.editorParams.selectedColormap="Choose Colormap";
      this.editorParams.climLower = "";
      this.editorParams.climUpper = "";
      if (Object.keys(pipeline.data[key]).includes("style")) {
        if (pipeline.data[key].style.colormap) {
          this.editorParams.selectedColormap = pipeline.data[key].style.colormap;
        }
        if (pipeline.data[key].style.clim) {
          this.editorParams.climLower = pipeline.data[key].style.clim[0];
          this.editorParams.climUpper = pipeline.data[key].style.clim[1];
        }
      }

      //If there is data (which there should be so it is likely redundant)
      if (pipeline.data[key].node) {
        const split_node = pipeline.data[key].node.split(".");
        let prepend = pipeline.data[key].plugin ? pipeline.data[key].plugin+"." :"podpac.";
        // MPU guarantees that last element will be the node name
        let last_element=split_node.length-1;
        this.editorParams.selectedCategory = this.setupParams.specReverse[prepend+pipeline.data[key].node];
        this.editorParams.nodesList = Object.keys(this.setupParams.spec[this.editorParams.selectedCategory]);
        this.nodeSetter(split_node[last_element]);
        this.editorParams.attrs = this.setupParams.spec[this.editorParams.selectedCategory][this.editorParams.selectedNode]['attrs'];
        //remove attrs that are unnecessary. Do this in podpac eventually
        delete this.editorParams.attrs['units'];
        delete this.editorParams.attrs["output"];
        delete this.editorParams.attrs["outputs"];
        this.editorParams.attrsList = Object.keys(this.editorParams.attrs);
        this.editorParams.style = this.setupParams.spec[this.editorParams.selectedCategory][this.editorParams.selectedNode]['style'];
        this.editorParams.styleList = Object.keys(this.editorParams.style);
        delete this.editorParams.styleList["clim"];
        this.renderAttrs();
        this.renderHelp();
      }

      //Create object containing all of the pipeline information
      this.editorParams.currentAttrValues = {};
      Object.keys(this.editorParams.attrs).forEach(attrKey => {
        // this should be updated to better handle editing and closer match getting the values from html
        var type = this.setupParams.spec[this.editorParams.selectedCategory][this.editorParams.selectedNode]["attrs"][attrKey]["type"];
        var schema = this.setupParams.spec[this.editorParams.selectedCategory][this.editorParams.selectedNode]["attrs"][attrKey]["schema"];
        if (pipeline.data[key]["attrs"] && (Object.keys(pipeline.data[key]["attrs"]).includes(attrKey) || type=="NodeTrait" || JSON.stringify(schema)==JSON.stringify({"key":"Unicode","value":"NodeTrait"}))) {
          if (type!="NodeTrait" && JSON.stringify(schema)!=JSON.stringify({"key":"Unicode","value":"NodeTrait"}) && attrKey!="dims") {
            //Check for List or Dict
            if (typeof pipeline.data[key]["attrs"][attrKey] == "object") {
              this.editorParams.currentAttrValues[attrKey] = JSON.stringify(pipeline.data[key]["attrs"][attrKey]);
            }
            else {
              //check to see if eqn is here and then parse it properly
              if (attrKey=="eqn") {
                this.editorParams.currentAttrValues[attrKey] = pipeline.data[key]["attrs"][attrKey].replaceAll("AAA_input_","").replaceAll("_input_AAA","");
              }
              //majority of attrs get handled here
              else {
                // Check to make sure the field is not null or 'null'
                let textToAdd = pipeline.data[key]["attrs"][attrKey];
                if (typeof textToAdd == "string") {
                  if (textToAdd.toLowerCase() != 'null' && textToAdd.toLowerCase() != 'undefined') {
                    this.editorParams.currentAttrValues[attrKey] = textToAdd;
                  }
                }
                else {
                  this.editorParams.currentAttrValues[attrKey] = textToAdd;
                }
              }
            }
          }
          else if (attrKey=="inputs") {
            //filter out key 'podpac_version' if it is there
            let key = Object.keys(pipeline.data)[Object.keys(pipeline.data).length-1];
            let lastPipeline = Object.keys(pipeline.data).length-1;
            if (key=="podpac_version") {
              key = Object.keys(pipeline.data)[Object.keys(pipeline.data).length-2];
              lastPipeline = Object.keys(pipeline.data).length-2;
            }
            var pList:any = [];
            var d:any = Object.values(pipeline.data)[lastPipeline];
            pList = Object.keys(d["inputs"]);
            if (pList.length>0) {
              pList.forEach( (pName:any) => {
                Object.values(this.editorParams.pipelines).forEach(pipelineValue => {
                  // let cleanName = pName.replaceAll("AAA_input_","").replaceAll("_input_AAA","");
                  if (pipelineValue.name==pName) {
                    this.editorParams.selectedItemsPipelines.push({item_id:pipelineValue.id, item_text:pName});
                  }
                });
              });
            }
          }
          else if (type=="NodeTrait") {
            if (pipeline.data[key]["inputs"]) {
              if (pipeline.data[key]["inputs"][attrKey]) {
                let rawName = pipeline.data[key]["inputs"][attrKey];
                let cleanName = rawName.replaceAll("AAA_input_","").replaceAll("_input_AAA","");
                this.editorParams.currentAttrValues[attrKey] = cleanName;
              }
            }
          }
          else if (attrKey=="dims") {
            const arr = pipeline.data[key]["attrs"][attrKey];
            for (let i = 0; i < arr.length; i++) {
              if (["lat","lon","time","alt"].includes(arr[i]) && !(this.editorParams.selectedItemsDims.includes(arr[i]))) {
                this.editorParams.selectedItemsDims.push(arr[i]);
              }
            }
          }
          else {
            console.log("The attr "+attrKey+" is not supported yet.");
          }
        }
        else {
          console.log("Saved pipeline missing attr "+attrKey);
        }
      });
    }
  }

  nodeSetter(val:any) {
    this.editorParams.selectedNode=val;
    // if (val=="Choose Node") {
    //   this.leafletService.addPickerOld(true);
    // } else {
    //   //TODO check certain node types before adding the picker
    //   // this.leafletService.addPickerOld();
    // }
  }

  //submit pipeline
  submit() {
    var validForm = this.formValidator();
    if (validForm!=true) {
      console.log("Issue with pipeline: ", validForm);
      this.modalWrapper(validForm);
      return;
    }
    var [styleValues, validStyle] = this.fetchStyle();
    if (validStyle!=true) {
      console.log("Issue with pipeline: ", validStyle);
      this.modalWrapper(validStyle);
      return;
    }
    var [attrsValues, inputs, validAttrs] = this.fetchAttrs();
    if (validAttrs!=true) {
      console.log("Issue with pipeline: ", validAttrs);
      this.modalWrapper(validAttrs);
      return;
    }
    //no obvious issues detected with the pipeline
    console.log("Submitting Pipeline");
    this.add(this.editorParams.pipelineName, styleValues, attrsValues, inputs);
  }

  formValidator() {
    var validForm: any = true;
    if (!(this.editorParams.pipelineName.length>0)) {
      validForm = "No name for Product";
    }
    else if (this.editorParams.selectedCategory=="Choose Category") {
      validForm = "No Product aategory selected";
    }
    else if (this.editorParams.selectedNode=="Choose Node") {
      validForm = "No Product node selected";
    }
    return validForm;
  }

  //reload page
  clear() {
    console.log("Reloading window");
    window.location.reload();
  }

  //change colormap value
  changeColormap(e:any) {
    this.editorParams.selectedColormap = e.target.value;
  }

  //change category values
  changeCategory(e:any) {
    this.editorParams.attrs = {};
    this.editorParams.attrsList = [];
    this.editorParams.styleList = [];
    this.editorParams.style = {};
    this.nodeSetter("Choose Node");

    // Track the selected category.
    this.editorParams.selectedCategory = e.target.value;

    if (this.editorParams.selectedCategory!=="Choose Category") {
      this.editorParams.nodesList = Object.keys(this.setupParams.spec[this.editorParams.selectedCategory]);
    }
    else {
      this.editorParams.nodesList=[];
    }
    this.renderAttrs();
    this.editorParams.helpText = "";
  }

  //change node value
  changeNode(e: any) {
    this.nodeSetter(e.target.value);
    if (this.editorParams.selectedNode!=="Choose Node") {
      this.editorParams.attrs = this.setupParams.spec[this.editorParams.selectedCategory][this.editorParams.selectedNode]['attrs'];
      //remove attrs that are unnecessary. Do this in podpac eventually
      delete this.editorParams.attrs['units'];
      delete this.editorParams.attrs["output"];
      delete this.editorParams.attrs["outputs"];
      this.editorParams.attrsList = Object.keys(this.editorParams.attrs);
      this.editorParams.style = this.setupParams.spec[this.editorParams.selectedCategory][this.editorParams.selectedNode]['style'];
      if (this.editorParams.style) {
        this.editorParams.styleList = Object.keys(this.editorParams.style);
        if (this.editorParams.styleList["clim"]) {
          delete this.editorParams.styleList["clim"];
        }
      }
    }
    else {
      this.editorParams.attrs = {};
      this.editorParams.attrsList = [];
      this.editorParams.style = {};
      this.editorParams.styleList=[];
    }
    this.renderAttrs();
    this.renderHelp();
  }

}