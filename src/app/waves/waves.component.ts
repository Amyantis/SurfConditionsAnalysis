import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ApiService} from '../api.service';


@Component({
  selector: 'app-waves',
  templateUrl: './waves.component.html',
  styleUrls: ['./waves.component.css'],
})
export class WavesComponent implements OnInit {
  @ViewChild('chart') el: ElementRef;
  public data: string;

  constructor(private _apiService: ApiService) {
    this.data = 'to';
  }

  public ngOnInit() {
    this._apiService.waves().subscribe(res => {
      console.log(res);
      //
    });
  }
}
