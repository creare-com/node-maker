// Angular
import { Component, OnInit, AfterViewInit } from '@angular/core';

// Local imports
import { RouteService } from './route.service';
import { PipelineEditor } from '../../pipeline-editor/pipeline-editor.component';
import { PipelineEditorService } from '../../pipeline-editor/pipeline-editor.service';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css'],
  providers: [PipelineEditor],
})

export class RouteComponent implements OnInit, AfterViewInit {

  constructor(public routeService:RouteService, private pipelineEditorService:PipelineEditorService) { }

  editorParams = this.pipelineEditorService.editorParams;
  routeParams = this.routeService.routeParams;

  ngOnInit(): void {
    this.routeService.queryRoutes();
    // This is abit of a hack, but seems to work.
    // Just passing a function to leaflet does not give us access to 'this'
    // the hack below creates a set of functions that will give us access to 'this'
    this.routeParams.leafletFuncs = [
      (e : any) => { this.routeService.leafletOnMouseDown(this, e) },
      (e : any) => { this.routeService.leafletOnMouseMove(this, e) },
      (e : any) => { this.routeService.leafletOnMouseUp(this, e) },
      (e : any) => { this.routeService.leafletOnMouseDblClick(this, e) }
    ];
  }

  ngAfterViewInit() { }
  
}
