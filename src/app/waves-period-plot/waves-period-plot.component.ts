import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {Plotly} from 'angular-plotly.js/src/app/plotly/plotly.service';

@Component({
  selector: 'app-waves-period-plot',
  templateUrl: './waves-period-plot.component.html',
  styleUrls: ['./waves-period-plot.component.css']
})
export class WavesPeriodPlotComponent implements OnInit {
  public graph: Plotly.Config = {
    data: [],
    layout: {title: 'Period of the waves-height-plot'}
  };

  constructor(private _apiService: ApiService) {
  }

  public ngOnInit() {
    this._apiService.waves().subscribe(rows => {
      this.graph.data.push({
        name: 'period (s)',
        type: 'scatter',
        x: rows.map(r => new Date(r.timestamp)),
        y: rows.map(r => r.wave_period_0),
      });
    });
  }
}
