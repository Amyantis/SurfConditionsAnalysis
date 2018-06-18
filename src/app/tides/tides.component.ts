import {Component, OnInit} from '@angular/core';
import {Plotly} from 'angular-plotly.js/src/app/plotly/plotly.service';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-tides',
  templateUrl: './tides.component.html',
  styleUrls: ['./tides.component.css']
})
export class TidesComponent implements OnInit {
  public graph: Plotly.Config = {
    data: [],
    layout: {title: 'Height of the tides'}
  };

  constructor(private _apiService: ApiService) {
  }

  public ngOnInit() {
    this._apiService.tides().subscribe(rows => {
      console.log(rows);
      this.graph.data.push({
        name: 'height (m)',
        type: 'scatter',
        x: rows.map(r => new Date(r.timestamp)),
        y: rows.map(r => r.height),
        text: rows.map(r => r.type),
        hoverinfo: ['x', 'text']
      });
    });
  }

}
