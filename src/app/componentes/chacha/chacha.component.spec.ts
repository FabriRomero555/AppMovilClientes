import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChachaComponent } from './chacha.component';

describe('ChachaComponent', () => {
  let component: ChachaComponent;
  let fixture: ComponentFixture<ChachaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChachaComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChachaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
