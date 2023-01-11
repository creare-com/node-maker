import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouteComponent } from './route.component';
import { MessageboxComponent } from '../../messagebox/messagebox.component';

describe('RouteComponent', () => {
  let component: RouteComponent;
  let fixture: ComponentFixture<RouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [HttpClientTestingModule],
      providers: [MessageboxComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
