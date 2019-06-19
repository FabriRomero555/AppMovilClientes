import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionPage } from './confirmacion.page';

describe('ConfirmacionPage', () => {
  let component: ConfirmacionPage;
  let fixture: ComponentFixture<ConfirmacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmacionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
