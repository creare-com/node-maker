import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PipelineEditor } from './pipeline-editor.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as mockSpec from '../mock/mockSpec.json';
import * as mockSpecReverse from '../mock/mockSpecReverse.json';
import { Pipeline } from '../node-inputs/pipeline';
import { mockPipelines } from '../mock/addInputsRecursively/mockPipelines';

describe('PipelineEditorComponent', () => {
  let component: PipelineEditor;
  let fixture: ComponentFixture<PipelineEditor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipelineEditor ],
      imports: [FormsModule, HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipelineEditor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('showOptionalAttrs (show)', () => {
    var elem1 = document.createElement('button');
    elem1.className = "collapsible";
    elem1.classList.remove("active");
    elem1.innerHTML = "Show";
    var elem2 = document.createElement('div');
    elem2.className = "collapseContent";
    elem2.style.display = "none";

    spyOn(document, "getElementById").and.callFake(function(id) {
      var dummyElement:any;
      if (id=='collapser_attr') {
        dummyElement = elem1;
      } 
      else if (id=='attr_collapse') {
        dummyElement = elem2;
      } 
      return dummyElement
    });
    component.showOptionalAttrs();
    var e0 = document.getElementById("collapser_attr");
    var e1 = document.getElementById("attr_collapse");
    expect(e0?.classList).toContain("active");
    expect(e0?.innerHTML).toEqual("Hide");
    expect(e1?.style.display).toEqual("block");
  });

  it('showOptionalAttrs (hide)', () => {
    var elem1 = document.createElement('button');
    elem1.className = "collapsible";
    elem1.classList.add("active");
    elem1.innerHTML = "Hide";
    var elem2 = document.createElement('div');
    elem2.className = "collapseContent";
    elem2.style.display = "block";

    spyOn(document, "getElementById").and.callFake(function(id) {
      var dummyElement:any;
      if (id=='collapser_attr') {
        dummyElement = elem1;
      } 
      else if (id=='attr_collapse') {
        dummyElement = elem2;
      } 
      return dummyElement;
    });
    component.showOptionalAttrs();
    var e0 = document.getElementById("collapser_attr");
    var e1 = document.getElementById("attr_collapse");
    expect(e0?.classList).not.toContain("active");
    expect(e0?.innerHTML).toEqual("Show");
    expect(e1?.style.display).toEqual("none");
  });

  it('showStyleAttrs (show)', () => {
    var elem1 = document.createElement('button');
    elem1.className = "collapsible";
    elem1.classList.remove("active");
    elem1.innerHTML = "Show";
    var elem2 = document.createElement('div');
    elem2.className = "collapseContent";
    elem2.style.display = "none";

    spyOn(document, "getElementById").and.callFake(function(id) {
      var dummyElement:any;
      if (id=='collapser_style') {
        dummyElement = elem1;
      } 
      else if (id=='style_collapse') {
        dummyElement = elem2;
      } 
      return dummyElement
    });
    component.showStyleAttrs();
    var e0 = document.getElementById("collapser_style");
    var e1 = document.getElementById("style_collapse");
    expect(e0?.classList).toContain("active");
    expect(e0?.innerHTML).toEqual("Hide");
    expect(e1?.style.display).toEqual("block");
  });

  it('showStyleAttrs (hide)', () => {
    var elem1 = document.createElement('button');
    elem1.className = "collapsible";
    elem1.classList.add("active");
    elem1.innerHTML = "Hide";
    var elem2 = document.createElement('div');
    elem2.className = "collapseContent";
    elem2.style.display = "block";

    spyOn(document, "getElementById").and.callFake(function(id) {
      var dummyElement:any;
      if (id=='collapser_style') {
        dummyElement = elem1;
      } 
      else if (id=='style_collapse') {
        dummyElement = elem2;
      } 
      return dummyElement;
    });
    component.showStyleAttrs();
    var e0 = document.getElementById("collapser_style");
    var e1 = document.getElementById("style_collapse");
    expect(e0?.classList).not.toContain("active");
    expect(e0?.innerHTML).toEqual("Show");
    expect(e1?.style.display).toEqual("none");
  });

  it('showCustomInterpolation (not Custom)', () => {
    var elem = document.createElement('button');
    elem.style.display = "none";

    spyOn(document, "getElementById").and.callFake(function() {
      return elem;
    });

    component.showCustomInterpolation({target:{value:"notCustom"}},"required");
    var e = document.getElementById("collapser_style");
    expect(e?.style.display).toEqual("none");
  });

  it('showCustomInterpolation (show - Custom)', () => {
    var elem = document.createElement('button');
    elem.style.display = "none";

    spyOn(document, "getElementById").and.callFake(function() {
      return elem;
    });
    component.showCustomInterpolation({target:{value:"Custom"}},"required");
    var e = document.getElementById("collapser_style");
    expect(e?.style.display).toEqual("block");
  });

  it('showCustomInterpolation (hide - notCustom)', () => {
    var elem = document.createElement('button');
    elem.style.display = "block";

    spyOn(document, "getElementById").and.callFake(function() {
      return elem;
    });
    component.showCustomInterpolation({target:{value:"notCustom"}},"required");
    var e = document.getElementById("custom_interpolation_required");
    expect(e?.style.display).toEqual("none");
  });

  it('generatePipelineInputs - TerrainTiles', () => {
    //set params
    let node = "TestLayer";
    let inputs = {};
    component.editorParams.pipelines = Object.values(mockPipelines);

    var inputPipelines:any = [];
    inputPipelines = component.generatePipelineInputs(inputPipelines,inputs,node);
    var mockInputPipelines:any = [];
    expect(inputPipelines).toEqual(mockInputPipelines);
  })

  it('generatePipelineInputs - SelectCoordinates', () => {
    //set params
    let node = "SelectCoordinates";
    let inputs = {"source":"AAA_input_TestLayer_input_AAA"};
    component.editorParams.pipelines = Object.values(mockPipelines);

    var inputPipelines:any = [];
    inputPipelines = component.generatePipelineInputs(inputPipelines,inputs,node);
    var mockInputPipelines:any = [["AAA_input_TestLayer_input_AAA",{"node":"datalib.terraintiles.TerrainTiles","style":{"units":"m"},"attrs":{"bucket":"elevation-tiles-prod","interpolation":"nearest","tile_format":"geotiff","urls":[],"zoom":1}}]];
    expect(inputPipelines).toEqual(mockInputPipelines);
  })

  it('generatePipelineInputs - Arithmetic (recursive)', () => {
    //set params
    let node = "Arithmetic";
    let inputs = {"Arithmetic1":"AAA_input_Arithmetic1_input_AAA"};
    component.editorParams.pipelines = Object.values(mockPipelines);

    var inputPipelines:any = [];
    inputPipelines = component.generatePipelineInputs(inputPipelines,inputs,node);
    var mockInputPipelines:any = [["AAA_input_TestLayer_input_AAA",{"node":"datalib.terraintiles.TerrainTiles","style":{"units":"m"},"attrs":{"bucket":"elevation-tiles-prod","interpolation":"nearest","tile_format":"geotiff","urls":[],"zoom":1}}],["AAA_input_Arithmetic_input_AAA",{"node":"core.algorithm.generic.Arithmetic","style":{},"attrs":{"eqn":"TestLayer + TestLayer","params":{}},"inputs":{"TestLayer":"AAA_input_TestLayer_input_AAA"}}],["AAA_input_Arithmetic1_input_AAA",{"node":"core.algorithm.generic.Arithmetic","style":{},"attrs":{"eqn":"Arithmetic + Arithmetic","params":{}},"inputs":{"Arithmetic":"AAA_input_Arithmetic_input_AAA"}}]];
    expect(inputPipelines).toEqual(mockInputPipelines);
  })

  it('fetchStyle', () => {
    //set params
    component.setupParams.spec = mockSpec;
    component.editorParams.selectedCategory = "datalib";
    component.editorParams.selectedNode = "TerrainTiles";
    component.editorParams.style = component.setupParams.spec[component.editorParams.selectedCategory][component.editorParams.selectedNode]['style'];
    component.editorParams.selectedColormap = "Accent";
    component.editorParams.climLower = 0;
    component.editorParams.climUpper = 1;
    //mock html elements
    var elem1 = document.createElement('input');
    elem1.value = "m";

    spyOn(document, "getElementById").and.callFake(function(id) {
      var dummyElement:any;
      if (id=='units') {
        dummyElement = elem1;
      }
      return dummyElement;
    });
    //expected result
    var mockStyleValues = {
      "colormap": "Accent",
      "clim": [ 0.0 , 1.0 ]
    };
    var [styleValues, validStyle] = component.fetchStyle();
    expect(styleValues).toEqual(mockStyleValues);
  });

  it('renderAttrs', () => {
    //set params
    component.setupParams.spec = mockSpec;
    component.editorParams.selectedCategory = "datalib";
    component.editorParams.selectedNode = "TerrainTiles";
    component.editorParams.attrs = {
      "bucket": {
          "type": "Unicode",
          "type_str": "<traitlets.traitlets.Unicode object at 0x7f36701a5bb0>",
          "values": null,
          "default": "elevation-tiles-prod",
          "help": "",
          "required": false,
          "hidden": false,
          "schema": null
      },
      "interpolation": {
          "type": "InterpolationTrait",
          "type_str": "<podpac.core.interpolation.interpolation_manager.InterpolationTrait object at 0x7f36709e7280>",
          "values": null,
          "default": "nearest",
          "help": "",
          "required": false,
          "hidden": false,
          "schema": null
      },
      "source_coordinates": {
          "type": "Coordinates",
          "type_str": "<class 'podpac.core.coordinates.coordinates.Coordinates'>",
          "values": null,
          "default": null,
          "help": "",
          "required": false,
          "hidden": false,
          "schema": null
      },
      "tile_format": {
          "type": "Enum",
          "type_str": "<traitlets.traitlets.Enum object at 0x7f36701a5b20>",
          "values": [
              "geotiff",
              "terrarium",
              "normal"
          ],
          "default": "geotiff",
          "help": "",
          "required": false,
          "hidden": false,
          "schema": null
      },
      "urls": {
          "type": "List",
          "type_str": "<traitlets.traitlets.List object at 0x7f36701a5c10>",
          "values": null,
          "default": [],
          "help": "",
          "required": false,
          "hidden": false,
          "schema": null
      },
      "zoom": {
          "type": "Int",
          "type_str": "<traitlets.traitlets.Int object at 0x7f36701a5ac0>",
          "values": null,
          "default": -1,
          "help": "",
          "required": false,
          "hidden": false,
          "schema": null
      }
    };
    //mock outputs
    var mockCurrentAttrs = {
      "bucket": "elevation-tiles-prod",
      "interpolation": "nearest",
      "source_coordinates": "",
      "tile_format": "geotiff",
      "urls": [],
      "zoom": -1
    };
    //run function
    component.editorParams.currentAttrValues = {};
    component.renderAttrs();
    expect(component.editorParams.currentAttrValues).toEqual(mockCurrentAttrs);
  });

  it('renderHelp', () => {
    //set params
    component.setupParams.spec = mockSpec;
    component.editorParams.selectedCategory = "datalib";
    component.editorParams.selectedNode = "TerrainTiles";
    //run function
    component.renderHelp();
    expect(component.editorParams.helpText).toEqual(component.setupParams.spec.datalib.TerrainTiles.help);
  });



  /*
  What is the best way to prove that a node is supported? Add a test of course!
  
  Process for adding a new pipeline:
    1) formValidator()
      - Not necessary, only does basic checking such as name of pipeline.
    2) fetchStyle()
      - Not necessary, only controls the style of pipelines.
    3) fetchAttrs()
      - Loops through all attrs that the pipeline has and grabs the values from the 
        html or other variables depending on the attr. There should be a test for
        each node that we claim to support.
    4) generatePipelineInputs()
      - Only necessary for creating pipelines with recursive inputs such as arithmetic nodes.

  Reminder that not all of the attrs are grabbed directly from the html. There are some attrs
  such as 'dims' that are grabbed from editorParams.selectedItemsDims (an array). If tests fail
  because an attr is not found it may because of this (only a couple of attrs are non-html based).

  How to confirm that a node is supported?
    1) Confirm fetchAttrs() works perfectly with a mocked pipeline.
      - This could have some holes, but will catch majority of issues.


  Confirming every node is overkill - we really need to only test the attr types.

  Note the following attrs are removed for GUI purposes:
    1) units
    2) output
    3) outputs

  */

  // Helper function for mocking html
  function genMockHTML(l1:any,l2:any,p:any) {
    var spec = Object.setPrototypeOf(mockSpec, Object.prototype);
    var mockHTML = [];
    for (var i = 0; i < l1.length; i++) {
      let ele = document.createElement('input');
      let currentAttr = l1[i];
      if (l2[i]!==undefined) {
        ele.value = l2[i];
      }
      else {
        if (typeof spec[p[0]][p[1]]["attrs"][currentAttr]["default"] == 'string') {
          ele.value = spec[p[0]][p[1]]["attrs"][currentAttr]["default"];
        }
        else if (typeof spec[p[0]][p[1]]["attrs"][currentAttr]["default"] == 'object') {
          ele.value = JSON.stringify(spec[p[0]][p[1]]["attrs"][currentAttr]["default"]);
        }
      }
      mockHTML.push(ele);
    }
    return mockHTML;
  }

  it('fetchAttrs - TerrainTiles', () => {
    //set params
    component.editorParams.attrsList = ['bucket', 'interpolation', 'tile_format', 'urls', 'zoom'];
    component.editorParams.selectedCategory = "datalib";
    component.editorParams.selectedNode = "TerrainTiles";
    component.setupParams.spec = mockSpec;
    //mock html
    var valuesArray = ["elevation-tiles-prod","nearest","geotiff",undefined,"1"]; // expected values for attrsList, undefined if none present
    var mockHTML = genMockHTML(component.editorParams.attrsList, valuesArray,["datalib","TerrainTiles"]);
    
    spyOn(document, "getElementById").and.callFake(function(id) {
      var dummyElement:any;
      dummyElement = mockHTML[component.editorParams.attrsList.indexOf(id)];
      return dummyElement;
    });

    var mockAttrValues = mockPipelines["TerrainTiles"].data.TerrainTiles?.attrs; // Grab data from mockPipelines
    var mockInputs = {};
    var [attrValues,inputs,validAttrs] = component.fetchAttrs();

    expect(attrValues).toEqual(mockAttrValues);
    expect(inputs).toEqual(mockInputs);
  });

  it('fetchAttrs - SelectCoordinates', () => {
    //set params
    let attrs = ['alt', 'lat', 'lon', 'source', 'substitute_eval_coords','time'];
    component.editorParams.attrsList = attrs;
    component.editorParams.selectedCategory = "algorithm";
    component.editorParams.selectedNode = "SelectCoordinates";
    component.setupParams.spec = mockSpec;
    //mock html
    var valuesArray = [undefined,undefined,undefined,"TestLayer","false",undefined]; // expected values for attrsList, undefined if none present
    var mockHTML = genMockHTML(component.editorParams.attrsList, valuesArray,["algorithm","SelectCoordinates"]);
    
    spyOn(document, "getElementById").and.callFake(function(id) {
      var dummyElement:any;
      dummyElement = mockHTML[component.editorParams.attrsList.indexOf(id)];
      return dummyElement;
    });

    var mockAttrValues = mockPipelines["SelectCoordinates"].data.SelectCoordinates?.attrs; // Grab data from mockPipelines
    var mockInputs = {"source":"AAA_input_TestLayer_input_AAA"};
    var [attrValues,inputs,validAttrs] = component.fetchAttrs();
    expect(attrValues).toEqual(mockAttrValues);
    expect(inputs).toEqual(mockInputs);
  });

  it('fetchAttrs - ExpandCoordinates', () => {
    //set params
    let attrs = ['alt', 'lat', 'lon', 'source', 'bounds_only','time'];
    component.editorParams.attrsList = attrs;
    component.editorParams.selectedCategory = "algorithm";
    component.editorParams.selectedNode = "ExpandCoordinates";
    component.setupParams.spec = mockSpec;
    //mock html
    var valuesArray = [undefined,undefined,undefined,"TestLayer","false",undefined]; // expected values for attrsList, undefined if none present
    var mockHTML = genMockHTML(component.editorParams.attrsList, valuesArray,["algorithm","ExpandCoordinates"]);
    
    spyOn(document, "getElementById").and.callFake(function(id) {
      var dummyElement:any;
      dummyElement = mockHTML[component.editorParams.attrsList.indexOf(id)];
      return dummyElement;
    });

    var mockAttrValues = mockPipelines["ExpandCoordinates"].data.ExpandCoordinates?.attrs; // Grab data from mockPipelines
    var mockInputs = {"source":"AAA_input_TestLayer_input_AAA"};
    var [attrValues,inputs,validAttrs] = component.fetchAttrs();
    expect(attrValues).toEqual(mockAttrValues);
    expect(inputs).toEqual(mockInputs);
  });

  it('fetchAttrs - Median', () => {
    //set params
    let attrs = ['dims', 'source'];
    component.editorParams.attrsList = attrs;
    component.editorParams.selectedCategory = "algorithm";
    component.editorParams.selectedNode = "Median";
    component.setupParams.spec = mockSpec;
    component.editorParams.selectedItemsDims = ["lat"]; // non-html element
    //mock html
    var valuesArray = [undefined,"TestLayer"]; // expected values for attrsList, undefined if none present
    var mockHTML = genMockHTML(component.editorParams.attrsList, valuesArray,["algorithm","Median"]);
    
    spyOn(document, "getElementById").and.callFake(function(id) {
      var dummyElement:any;
      dummyElement = mockHTML[component.editorParams.attrsList.indexOf(id)];
      return dummyElement;
    });

    var mockAttrValues = mockPipelines["Median"].data.Median?.attrs; // Grab data from mockPipelines
    var mockInputs = {"source":"AAA_input_TestLayer_input_AAA"};
    var [attrValues,inputs,validAttrs] = component.fetchAttrs();
    expect(attrValues).toEqual(mockAttrValues);
    expect(inputs).toEqual(mockInputs);
  });

  it('fetchAttrs - Mean', () => {
    //set params
    let attrs = ['dims', 'source'];
    component.editorParams.attrsList = attrs;
    component.editorParams.selectedCategory = "algorithm";
    component.editorParams.selectedNode = "Mean";
    component.setupParams.spec = mockSpec;
    component.editorParams.selectedItemsDims = ["lat"]; // non-html element
    //mock html
    var valuesArray = [undefined,"TestLayer"]; // expected values for attrsList, undefined if none present
    var mockHTML = genMockHTML(component.editorParams.attrsList, valuesArray,["algorithm","Mean"]);
    
    spyOn(document, "getElementById").and.callFake(function(id) {
      var dummyElement:any;
      dummyElement = mockHTML[component.editorParams.attrsList.indexOf(id)];
      return dummyElement;
    });

    var mockAttrValues = mockPipelines["Mean"].data.Mean?.attrs; // Grab data from mockPipelines
    var mockInputs = {"source":"AAA_input_TestLayer_input_AAA"};
    var [attrValues,inputs,validAttrs] = component.fetchAttrs();
    expect(attrValues).toEqual(mockAttrValues);
    expect(inputs).toEqual(mockInputs);
  });

  it('fetchAttrs - Arithmetic', () => {
    //set params
    let attrs = ['eqn','params','inputs'];
    component.editorParams.attrsList = attrs;
    component.editorParams.selectedCategory = "algorithm";
    component.editorParams.selectedNode = "Arithmetic";
    component.setupParams.spec = mockSpec;
    component.editorParams.JSON_data = {};
    component.editorParams.JSON_data["params"] = {};
    component.editorParams.selectedItemsPipelines = [{item_id:0, item_text:"TestLayer"}];
    component.editorParams.pipelines = Object.values(mockPipelines);
    //mock html
    var valuesArray = ["TestLayer + TestLayer",undefined,"TestLayer"]; // expected values for attrsList, undefined if none present
    var mockHTML = genMockHTML(component.editorParams.attrsList, valuesArray,["algorithm","Arithmetic"]);
    
    spyOn(document, "getElementById").and.callFake(function(id) {
      var dummyElement:any;
      dummyElement = mockHTML[component.editorParams.attrsList.indexOf(id)];
      return dummyElement;
    });

    var mockAttrValues = mockPipelines["Arithmetic"].data.Arithmetic?.attrs; // Grab data from mockPipelines
    var mockInputs = {"TestLayer":"AAA_input_TestLayer_input_AAA"}; //Arithmetic input gets special handling
    var [attrValues,inputs,validAttrs] = component.fetchAttrs();
    expect(attrValues).toEqual(mockAttrValues);
    expect(inputs).toEqual(mockInputs);
  });

  it('fetchAttrs - Arithmetic (no saved pipelines)', () => {
    //set params
    let attrs = ['eqn','params','inputs'];
    component.editorParams.attrsList = attrs;
    component.editorParams.selectedCategory = "algorithm";
    component.editorParams.selectedNode = "Arithmetic";
    component.setupParams.spec = mockSpec;
    component.editorParams.JSON_data = {};
    component.editorParams.JSON_data["params"] = {};
    component.editorParams.selectedItemsPipelines = [{item_id:0, item_text:"TestLayer"}];
    //mock html
    var valuesArray = ["TestLayer + TestLayer",undefined,"TestLayer"]; // expected values for attrsList, undefined if none present
    var mockHTML = genMockHTML(component.editorParams.attrsList, valuesArray,["algorithm","Arithmetic"]);
    
    spyOn(document, "getElementById").and.callFake(function(id) {
      var dummyElement:any;
      dummyElement = mockHTML[component.editorParams.attrsList.indexOf(id)];
      return dummyElement;
    });

    var mockAttrValues = mockPipelines["Arithmetic"].data.Arithmetic?.attrs; // Grab data from mockPipelines
    var mockInputs = {}; //Expecting nothing since no pipelines are defined
    var [attrValues,inputs,validAttrs] = component.fetchAttrs();
    expect(attrValues).toEqual(mockAttrValues);
    expect(inputs).toEqual(mockInputs);
  });

  it('fetchAttrs - Arithmetic2 (recursive inputs)', () => {
    //set params
    let attrs = ['eqn','params','inputs'];
    component.editorParams.attrsList = attrs;
    component.editorParams.selectedCategory = "algorithm";
    component.editorParams.selectedNode = "Arithmetic";
    component.setupParams.spec = mockSpec;
    component.editorParams.JSON_data = {};
    component.editorParams.JSON_data["params"] = {};
    component.editorParams.selectedItemsPipelines = [{item_id:0, item_text:"Arithmetic1"}];
    component.editorParams.pipelines = Object.values(mockPipelines);
    //mock html
    var valuesArray = ["Arithmetic1 + Arithmetic1",undefined,"TestLayer"]; // expected values for attrsList, undefined if none present
    var mockHTML = genMockHTML(component.editorParams.attrsList, valuesArray,["algorithm","Arithmetic"]);
    
    spyOn(document, "getElementById").and.callFake(function(id) {
      var dummyElement:any;
      dummyElement = mockHTML[component.editorParams.attrsList.indexOf(id)];
      return dummyElement;
    });

    var mockAttrValues = mockPipelines["Arithmetic2"].data.Arithmetic?.attrs; // Grab data from mockPipelines
    var mockInputs = {"Arithmetic1":"AAA_input_Arithmetic1_input_AAA"}; //Arithmetic input gets special handling
    var [attrValues,inputs,validAttrs] = component.fetchAttrs();
    expect(attrValues).toEqual(mockAttrValues);
    expect(inputs).toEqual(mockInputs);
  });



});
