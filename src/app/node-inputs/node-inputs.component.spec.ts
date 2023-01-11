import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NodeInputsComponent } from './node-inputs.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('NodeInputsComponent', () => {
  let component: NodeInputsComponent;
  let fixture: ComponentFixture<NodeInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeInputsComponent ],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
