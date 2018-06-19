import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

const BASE_API_URL = 'http://localhost:5000';

interface Wave {
  timestamp: number;
  surf_min: number;
  surf_max: number;
}

interface Tide {
  type: string;
  timestamp: number;
  height: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) {
  }

  public waves() {
    return this._http.get<Array<Wave>>(BASE_API_URL + '/waves.json', {responseType: 'json'});
  }

  public tides() {
    return this._http.get<Array<Tide>>(BASE_API_URL + '/tides.json', {responseType: 'json'});
  }
}
