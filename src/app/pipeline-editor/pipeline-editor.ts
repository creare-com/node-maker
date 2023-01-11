import { Pipeline } from '../node-inputs/pipeline';

export interface EditorParams {
    pipelines:Pipeline[];
    nodesList:any;
    attrsList:any;
    attrs:any;
    styleList:any;
    style:any;
    helpText:any;
    pipelineName:string;
    climLower:any;
    climUpper:any;
    outputsTracker:any;
    dropdownListDims:any[];
    dropdownListPipelines:any[];

    selectedItemsDims:any[];
    selectedItemsPipelines:any[];
    selectedCategory:any;
    selectedColormap:any;
    selectedNode:any;
    currentAttrValues:any;
    JSON_data:any;
}