import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SetupService } from './setup.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('SetupService', () => {
    let service: SetupService;
    let httpTestingController: HttpTestingController;

    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [
            SetupService
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }));

    beforeEach(() => {
        httpTestingController = TestBed.inject(HttpTestingController);
        service = TestBed.inject(SetupService);
    });

    it('should be created', () => {
        expect(Object.keys(service.setupParams).length).toEqual(15);
        expect(service.setupParams.customTraits).toEqual(["InterpolationTrait","NodeTrait","DimsTrait","Enum","Dict","Bool","Unicode","Any","Coordinates"]);
        expect(service.setupParams.customList).toEqual(["dims","source","sources","inputs"]);
        expect(service.setupParams.allowedDefaults).toEqual(["null",null,undefined,"{}","[]"]);
        expect(service.setupParams.unsupportedTypes).toEqual(["ArrayTrait"]);
        expect(service.setupParams.unsupportedAttrs).toEqual(["sources"]);
    });

    it('setAPIPath with "default"', () => {
        service.setAPIPath("default");
        expect(service.setupParams.baseURL).toEqual('../');
        expect(service.setupParams.pipelineAPIPath).toEqual('../api/publish?KEY=onlySomeUsersKnowThis');
    });

    it('setAPIPath with "localhost"', () => {
        service.setAPIPath("localhost");
        expect(service.setupParams.baseURL).toEqual('http://127.0.0.1:5000/');
        expect(service.setupParams.pipelineAPIPath).toEqual('http://127.0.0.1:5000/api/publish?KEY=onlySomeUsersKnowThis');
    });

    it('getSpecs', () => {
        var testResponse = {
            message: "test0",
            categories: {"test1.1":0,"test1.2":1},
            categories_reverse: "test2",
            interpolators: "test3",
            color_maps: "test4"
        };
        service.getSpecs();
        const req = httpTestingController.expectOne({
            method: 'GET',
            url: '../api/publish/UI_spec',
        });
        req.flush(testResponse);
        //after flush then we can expect
        expect(service.setupParams.spec).toEqual(testResponse.categories);
        expect(service.setupParams.specReverse).toEqual(testResponse.categories_reverse);
        expect(service.setupParams.interpolationMethods).toEqual(testResponse.interpolators);
        expect(service.setupParams.colormapList).toEqual(testResponse.color_maps);
        expect(service.setupParams.customList).toEqual(["dims","source","sources","inputs"]);
    });

    it('getDatetimes', () => {
        var testResponse = {
            message: "test"
        };
        service.getDatetimes();
        const req = httpTestingController.expectOne({
            method: 'GET',
            url: '../api/publish/leaflet_datetimes',
        });
        req.flush(testResponse);
        //after flush then we can expect
        expect(service.leafletParams.leafletTimes).toEqual(testResponse);
    });

    it('getPipelines with empty response', () => {
        var testResponse = {
            message: "",
            status: "",
            pipelines: undefined,
            coordinates: {},
            outputs: undefined
        };
        service.getPipelines();
        const req = httpTestingController.expectOne({
            method: 'GET',
            url: '../api/publish?KEY=onlySomeUsersKnowThis&VERBOSE&SERVICE=QUERY',
        });
        req.flush(testResponse);
        //after flush then we can expect
        expect(service.editorParams.pipelines).toEqual([]);
        expect(service.editorParams.outputsTracker).toEqual({});
    });

    it('getPipelines with a pipeline response', () => {
        var testResponse = {
            message: "",
            status: "",
            pipelines: {test:"data"},
            coordinates: {},
            outputs: undefined
        };
        var expectedPipelines = [{
            id: 1,
            name: "test",
            data: "data"
        }];
        service.getPipelines();
        const req = httpTestingController.expectOne({
            method: 'GET',
            url: '../api/publish?KEY=onlySomeUsersKnowThis&VERBOSE&SERVICE=QUERY',
        });
        req.flush(testResponse);
        //after flush then we can expect
        expect(service.editorParams.pipelines).toEqual(expectedPipelines);
        expect(service.editorParams.outputsTracker).toEqual({});
    });
        
});