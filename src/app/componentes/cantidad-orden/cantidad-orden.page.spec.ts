import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CantidadOrdenPage } from './cantidad-orden.page';

describe('CantidadOrdenPage', () => {
  let component: CantidadOrdenPage;
  let fixture: ComponentFixture<CantidadOrdenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CantidadOrdenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CantidadOrdenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
