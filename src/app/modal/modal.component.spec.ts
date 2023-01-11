import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CustomModal } from './modal.component';

describe('CustomModal', () => {
    let component: CustomModal;
    let fixture: ComponentFixture<CustomModal>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        declarations: [ CustomModal ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CustomModal);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create modal', () => {
        expect(component).toBeTruthy();
        component.genModal("SomeText");
    });

});
