import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CantidadOrdenComponent } from './cantidad-orden.component';

describe('CantidadOrdenComponent', () => {
  let component: CantidadOrdenComponent;
  let fixture: ComponentFixture<CantidadOrdenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CantidadOrdenComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CantidadOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
