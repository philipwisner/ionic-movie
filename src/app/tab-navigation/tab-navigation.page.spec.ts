import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabNavigationPage } from './tab-navigation.page';

describe('TabNavigationPage', () => {
  let component: TabNavigationPage;
  let fixture: ComponentFixture<TabNavigationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabNavigationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabNavigationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
