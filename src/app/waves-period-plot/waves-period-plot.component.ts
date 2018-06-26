import {Component, Input, OnChanges, OnInit, SimpleChange} from '@angular/core';
import {ApiService, Spot} from '../api.service';
import {Plotly} from 'angular-plotly.js/src/app/plotly/plotly.service';

@Component({
  selector: 'app-waves-period-plot',
  templateUrl: './waves-period-plot.component.html',
  styleUrls: ['./waves-period-plot.component.css']
})
export class WavesPeriodPlotComponent implements OnInit, OnChanges {
  @Input() selectedSpot: Spot;

  public graph: Plotly.Config = {
    data: [],
    layout: {title: 'Period of the waves-height-plot'}
  };

  constructor(private _apiService: ApiService) {
  }

  public ngOnInit() {
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    console.log(changes);
    const spotId = changes.selectedSpot.currentValue.api_id;
    this._apiService.waves(spotId).subscribe(rows => {
      this.graph.data = [];
      this.graph.data.push({
        name: 'period (s)',
        type: 'scatter',
        x: rows.map(r => new Date(r.timestamp)),
        y: rows.map(r => r.wave_period_0),
      });
    });
  }
}
