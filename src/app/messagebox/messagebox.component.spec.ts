import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MessageboxComponent } from './messagebox.component';

describe('MessageboxComponent', () => {
  let component: MessageboxComponent;
  let fixture: ComponentFixture<MessageboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageboxComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
