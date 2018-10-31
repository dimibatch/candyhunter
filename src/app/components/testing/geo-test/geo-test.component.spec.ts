import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoTestComponent } from './geo-test.component';

describe('GeoTestComponent', () => {
  let component: GeoTestComponent;
  let fixture: ComponentFixture<GeoTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
