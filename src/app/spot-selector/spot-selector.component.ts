import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ApiService, Spot} from '../api.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

interface CountrySpots {
  countryName: string;
  spots: Spot[];
}


@Component({
  selector: 'app-spot-selector',
  templateUrl: './spot-selector.component.html',
  styleUrls: ['./spot-selector.component.css'],
})
export class SpotSelectorComponent implements OnInit {
  @Output() spotSelection = new EventEmitter<Spot>();

  public myControl: FormControl = new FormControl();
  public spotsNamesMap: Map<string, Spot> = new Map<string, Spot>();
  public countrySpots: CountrySpots[] = [];
  public filteredOptions: Observable<CountrySpots[]>;

  constructor(private _apiService: ApiService) {
  }

  public ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(startWith(''), map(val => this.filter(val)));

    this._apiService.spots().subscribe(rows => {
      console.log(rows);
      const spotsMap = new Map<string, Spot[]>();
      for (const row of rows) {
        this.spotsNamesMap.set(row.name.toLocaleLowerCase(), row);
        if (!spotsMap.has(row.country)) {
          spotsMap.set(row.country, []);
        }
        spotsMap.get(row.country).push(row);
      }
      this.countrySpots = [];
      for (const [country, countrySpots] of [...spotsMap.entries()].sort()) {
        const sortedCountrySpots = countrySpots.sort((a, b) => {
          const nameA = a.name.toLowerCase();
          const nameB = b.name.toLowerCase();
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        });
        this.countrySpots.push({
          countryName: country,
          spots: sortedCountrySpots,
        });
      }
    });
  }


  public filter(val: string): CountrySpots[] {
    const filteredCountrySpots: CountrySpots[] = [];

    for (const countrySpots of this.countrySpots) {
      const matchingSpots: Spot[] = [];
      for (const spot of countrySpots.spots) {
        if (spot.name.toLowerCase().includes(val.toLowerCase())) {
          matchingSpots.push(spot);
        }
      }
      if (matchingSpots.length > 0) {
        filteredCountrySpots.push({
          countryName: countrySpots.countryName,
          spots: matchingSpots,
        });
      }
    }
    return filteredCountrySpots;
  }

  public done(event) {
    const spotName = event.target.value;
    if (this.spotsNamesMap.has(spotName.toLocaleLowerCase())) {
      const selectedSpot = this.spotsNamesMap.get(spotName.toLocaleLowerCase());
      this.spotSelection.emit(selectedSpot);
    }
  }
}
