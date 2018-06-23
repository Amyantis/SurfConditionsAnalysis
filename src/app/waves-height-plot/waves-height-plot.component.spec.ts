import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WavesHeightPlotComponent} from './waves-height-plot.component';

describe('WavesHeightPlotComponent', () => {
  let component: WavesHeightPlotComponent;
  let fixture: ComponentFixture<WavesHeightPlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WavesHeightPlotComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WavesHeightPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
