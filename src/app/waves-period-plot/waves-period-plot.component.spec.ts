import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WavesPeriodPlotComponent } from './waves-period-plot.component';

describe('WavesPeriodPlotComponent', () => {
  let component: WavesPeriodPlotComponent;
  let fixture: ComponentFixture<WavesPeriodPlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WavesPeriodPlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WavesPeriodPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
