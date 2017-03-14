import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterializeUiComponent } from './materialize-ui.component';

describe('MaterializeUiComponent', () => {
  let component: MaterializeUiComponent;
  let fixture: ComponentFixture<MaterializeUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterializeUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterializeUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
