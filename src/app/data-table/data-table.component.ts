import {Component, Input, OnChanges, OnInit, SimpleChange, ViewChild} from '@angular/core';
import {ApiService, Global, Spot} from '../api.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-waves-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent implements OnInit, OnChanges {
  @Input() selectedSpot: Spot;

  displayedColumns = [
    'timestamp',
    'wave_surf_min',
    'wave_surf_max',
    'wave_wave_direction_0',
    'wave_wave_height_0',
    'wave_wave_period_0',
    'tides_height',
    'wind_direction',
    'wind_speed',
    'weather_condition',
    'weather_temperature',
  ];
  dataSource = new MatTableDataSource<Global>();

  constructor(private _apiService: ApiService) {
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    if (changes.selectedSpot.firstChange) {
      return;
    }
    console.log(changes);
    this._apiService.global(changes.selectedSpot.currentValue.api_id).subscribe(rows => {
      console.log(rows);
      this.dataSource.data = rows;
    });
  }

}
