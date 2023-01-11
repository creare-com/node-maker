import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LeafletService } from './leaflet.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PipelineEditorService } from '../pipeline-editor/pipeline-editor.service';
import { BusyboxService } from '../busybox/busybox.service';
import { LegendService } from '../legend/legend/legend.service';

describe('LeafletService', () => {
  let service: LeafletService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [
      LeafletService,
      PipelineEditorService,
      BusyboxService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  }));

  beforeEach(() => {
    service = new LeafletService(new PipelineEditorService(), new BusyboxService(), new LegendService());
  });

  it('should be created', () => {
    expect(Object.keys(service.leafletParams).length).toEqual(7);
  });

});