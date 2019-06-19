import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasinfoPage } from './masinfo.page';

describe('MasinfoPage', () => {
  let component: MasinfoPage;
  let fixture: ComponentFixture<MasinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasinfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
