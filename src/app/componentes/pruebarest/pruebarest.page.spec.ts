import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebarestPage } from './pruebarest.page';

describe('PruebarestPage', () => {
  let component: PruebarestPage;
  let fixture: ComponentFixture<PruebarestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebarestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebarestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
