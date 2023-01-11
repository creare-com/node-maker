import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PipelineEditorService } from './pipeline-editor.service';

describe('PipelineEditorService', () => {
    let service: PipelineEditorService;
    let httpTestingController: HttpTestingController;

    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [
            PipelineEditorService
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }));

    beforeEach(() => {
        httpTestingController = TestBed.inject(HttpTestingController);
        service = TestBed.inject(PipelineEditorService);
    });

    it('func', () => {
        expect(Object.keys(service.editorParams).length).toEqual(20);
    })

});