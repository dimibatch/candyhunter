import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsBonbonsComponent } from './details-bonbons.component';

describe('DetailsBonbonsComponent', () => {
  let component: DetailsBonbonsComponent;
  let fixture: ComponentFixture<DetailsBonbonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsBonbonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsBonbonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
