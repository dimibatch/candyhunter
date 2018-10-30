import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeBonbonsComponent } from './liste-bonbons.component';

describe('ListeBonbonsComponent', () => {
  let component: ListeBonbonsComponent;
  let fixture: ComponentFixture<ListeBonbonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeBonbonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeBonbonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
