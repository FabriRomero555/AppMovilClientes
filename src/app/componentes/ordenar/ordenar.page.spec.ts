import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenarPage } from './ordenar.page';

describe('OrdenarPage', () => {
  let component: OrdenarPage;
  let fixture: ComponentFixture<OrdenarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdenarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
