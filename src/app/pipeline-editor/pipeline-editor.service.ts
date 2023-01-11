import { Injectable } from '@angular/core';
import { EditorParams } from './pipeline-editor';

@Injectable({
  providedIn: 'root',
})
export class PipelineEditorService {

  editorParams:EditorParams= {
    pipelines:[],
    nodesList:[],
    attrsList:[],
    attrs:{},
    styleList:[],
    style:{},
    helpText:"",
    pipelineName:"",
    climLower:undefined,
    climUpper:undefined,
    outputsTracker:{},
    dropdownListDims:['lat', 'lon', 'time', 'alt'],
    dropdownListPipelines:[],

    selectedItemsDims:[],
    selectedItemsPipelines:[],
    selectedCategory:undefined,
    selectedColormap:undefined,
    selectedNode:undefined,
    currentAttrValues:{},
    JSON_data:undefined
  };

  constructor() { }

}