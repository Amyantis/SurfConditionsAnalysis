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



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) {
  }

  public waves() {
    return this._http.get<Array<Wave>>(
      BASE_API_URL + '/waves.json', {responseType: 'json'});
  }

  public tides() {
    return this._http.get<Array<Tide>>(
      BASE_API_URL + '/tides.json', {responseType: 'json'});
  }

  public global() {
    return this._http.get<Array<Global>>(
      BASE_API_URL + '/global.json', {responseType: 'json'});
  }
}
