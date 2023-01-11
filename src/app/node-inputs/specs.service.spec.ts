import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SpecsService } from '../node-inputs/specs.service';

describe('SpecsService', () => {
    let service: SpecsService;
    let httpTestingController: HttpTestingController;

    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [
            SpecsService
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }));

    beforeEach(() => {
        httpTestingController = TestBed.inject(HttpTestingController);
        service = TestBed.inject(SpecsService);
    });

    it('setAPIPath', () => {
        var testingPath = "thisIsATestPath";
        service.setAPIPath(testingPath);
        expect(service.specsURL).toEqual(testingPath);
    })

    /*
        Following is the procedure for mocking http
            1) Mock the response
            2) Setup the function call
            3) Setup the request
            4) FLush the mock http request
    */
    it('getSpecs', () => {
        //mock the response
        var testResponse = {
            message: "",
            categories: "",
            categories_reverse: "",
            interpolators: "",
            color_maps: "",
            version_info: ""
        };
        //call function
        service.getSpecs().subscribe(
            resp => {
                expect(resp).toEqual(testResponse);
            }
        );
        //setup request
        const req = httpTestingController.expectOne({
            method: 'GET',
            url: '../api/publish/UI_spec',
        });
        //flush is required for http to be mocked
        req.flush(testResponse);
    });

    it('getDatetimes', () => {
        //mock the response
        var testResponse = {};
        //call function
        service.getDatetimes().subscribe(
            resp => {
                expect(resp).toEqual(testResponse);
            }
        );
        //setup request
        const req = httpTestingController.expectOne({
            method: 'GET',
            url: '../api/publish/leaflet_datetimes',
        });
        //flush is required for http to be mocked
        req.flush(testResponse);
    });
        
});