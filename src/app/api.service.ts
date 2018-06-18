import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) {
  }

  public waves() {
    return this._http.get('http://localhost:5000/waves.json', {responseType: 'json'});
  }
}
