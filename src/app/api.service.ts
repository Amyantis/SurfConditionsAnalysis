import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

const BASE_API_URL = 'http://localhost:5000';

export interface Wave {
  timestamp: number;
  surf_min: number;
  surf_max: number;
  surf_optimalScore: number;
  wave_direction_0: number;
  wave_direction_1: number;
  wave_direction_2: number;
  wave_direction_3: number;
  wave_direction_4: number;
  wave_direction_5: number;
  wave_height_0: number;
  wave_height_1: number;
  wave_height_2: number;
  wave_height_3: number;
  wave_height_4: number;
  wave_height_5: number;
  wave_optimalScore_0: number;
  wave_optimalScore_1: number;
  wave_optimalScore_2: number;
  wave_optimalScore_3: number;
  wave_optimalScore_4: number;
  wave_optimalScore_5: number;
  wave_period_0: number;
  wave_period_1: number;
  wave_period_2: number;
  wave_period_3: number;
  wave_period_4: number;
  wave_period_5: number;
}

export interface Tide {
  type: string;
  timestamp: number;
  height: string;
}

export interface Global {
  timestamp: number;
  wave_surf_max: number;
  wave_surf_min: number;
  wave_surf_optimalScore: number;
  wave_wave_direction_0: number;
  wave_wave_height_0: number;
  wave_wave_optimalScore_0: number;
  wave_wave_period_0: number;
  wave_wave_direction_1: number;
  wave_wave_height_1: number;
  wave_wave_optimalScore_1: number;
  wave_wave_period_1: number;
  wave_wave_direction_2: number;
  wave_wave_height_2: number;
  wave_wave_optimalScore_2: number;
  wave_wave_period_2: number;
  wave_wave_direction_3: number;
  wave_wave_height_3: number;
  wave_wave_optimalScore_3: number;
  wave_wave_period_3: number;
  wave_wave_direction_4: number;
  wave_wave_height_4: number;
  wave_wave_optimalScore_4: number;
  wave_wave_period_4: number;
  wave_wave_direction_5: number;
  wave_wave_height_5: number;
  wave_wave_optimalScore_5: number;
  wave_wave_period_5: number;
  wind_direction: number;
  wind_optimalScore: number;
  wind_speed: number;
  weather_condition: string;
  weather_temperature: number;
  tides_height: number;
  tides_type: string;
}

export interface Spot {
  spot_id: string;
  name: string;
  latitude: number;
  longitude: number;
  city: string;
  state: string;
  country: string;
}


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) {
  }

  public waves(spotId: number = null) {
    let url = BASE_API_URL + '/waves.json';
    if (spotId != null) {
      url += '?spot_id=' + spotId;
    }
    return this._http.get<Array<Wave>>(url, {responseType: 'json'});
  }

  public tides(spotId: number = null) {
    let url = BASE_API_URL + '/tides.json';
    if (spotId != null) {
      url += '?spot_id=' + spotId;
    }
    return this._http.get<Array<Tide>>(url, {responseType: 'json'});
  }

  public global(spotId: number = null) {
    let url = BASE_API_URL + '/global.json';
    if (spotId != null) {
      url += '?spot_id=' + spotId;
    }
    console.log('Getting', url);
    return this._http.get<Array<Global>>(url, {responseType: 'json'});
  }

  public spots() {
    return this._http.get<Array<Spot>>(
      BASE_API_URL + '/spots.json', {responseType: 'json'});
  }
}
