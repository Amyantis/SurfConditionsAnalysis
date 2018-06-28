import {Component} from '@angular/core';
import {Spot} from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedSpot: Spot = null;

  onSpotSelection(spot: Spot) {
    console.log('Spot selection (AppComponent)', spot);
    this.selectedSpot = spot;
  }
}
