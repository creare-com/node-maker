import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BusyboxComponent } from './busybox.component';

describe('BusyboxComponent', () => {
  let component: BusyboxComponent;
  let fixture: ComponentFixture<BusyboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusyboxComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusyboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
