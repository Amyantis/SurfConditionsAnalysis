import {Component, Input, OnChanges, OnInit, SimpleChange} from '@angular/core';
import {Plotly} from 'angular-plotly.js/src/app/plotly/plotly.service';
import {ApiService, Spot} from '../api.service';

@Component({
  selector: 'app-tides',
  templateUrl: './tides.component.html',
  styleUrls: ['./tides.component.css']
})
export class TidesComponent implements OnInit, OnChanges {
  @Input() selectedSpot: Spot;

  public graph: Plotly.Config = {
    data: [],
    layout: {title: 'Height of the tides'}
  };

  constructor(private _apiService: ApiService) {
  }

  public ngOnInit() {
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    if (changes.selectedSpot.firstChange) {
      return;
    }
    const spotId = changes.selectedSpot.currentValue.api_id;
    this._apiService.tides(spotId).subscribe(rows => {
      this.graph.data = [];
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
