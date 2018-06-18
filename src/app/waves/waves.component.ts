import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {Plotly as PlotlyService} from 'angular-plotly.js/src/app/plotly/plotly.service';

@Component({
  selector: 'app-waves',
  templateUrl: './waves.component.html',
  styleUrls: ['./waves.component.css'],
})
export class WavesComponent implements OnInit {
  public graph: PlotlyService.Config = {
    data: [],
    layout: {title: 'Height of the waves'}
  };

  constructor(private _apiService: ApiService) {
  }

  public ngOnInit() {
    this._apiService.waves().subscribe(rows => {
      this.graph.data.push({
        name: 'min (m)',
        type: 'scatter',
        x: rows.map(r => new Date(r.timestamp)),
        y: rows.map(r => r.surf_min),
      });
      this.graph.data.push({
        name: 'max (m)',
        type: 'scatter',
        x: rows.map(r => new Date(r.timestamp)),
        y: rows.map(r => r.surf_max),
      });
    });
  }
}
