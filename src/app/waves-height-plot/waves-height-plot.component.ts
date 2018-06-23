import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {Plotly} from 'angular-plotly.js/src/app/plotly/plotly.service';

@Component({
  selector: 'app-waves-height-plot',
  templateUrl: './waves-height-plot.component.html',
  styleUrls: ['./waves-height-plot.component.css'],
})
export class WavesHeightPlotComponent implements OnInit {
  public graph: Plotly.Config = {
    data: [],
    layout: {title: 'Height of the waves'}
  };

  constructor(private _apiService: ApiService) {
  }

  public ngOnInit() {
    this._apiService.waves().subscribe(rows => {
      console.log(rows);
      this.graph.data.push({
        name: 'height min (m)',
        type: 'scatter',
        x: rows.map(r => new Date(r.timestamp)),
        y: rows.map(r => r.surf_min),
      });
      this.graph.data.push({
        name: 'height max (m)',
        type: 'scatter',
        x: rows.map(r => new Date(r.timestamp)),
        y: rows.map(r => r.surf_max),
      });
      this.graph.data.push({
        name: 'height (m)',
        type: 'scatter',
        x: rows.map(r => new Date(r.timestamp)),
        y: rows.map(r => r.wave_height_0),
      });
    });
  }
}
