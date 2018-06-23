import {Component, OnInit, ViewChild} from '@angular/core';
import {ApiService, Global} from '../api.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-waves-table',
  templateUrl: './waves-table.component.html',
  styleUrls: ['./waves-table.component.css']
})
export class WavesTableComponent implements OnInit {
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

    this._apiService.global().subscribe(rows => {
      this.dataSource.data = rows;
    });
  }

}
