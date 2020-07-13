import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiURL = environment.apiURL;
  constructor(private _http: HttpClient) { }

  // peticiones
  // models  User
  register(user: User): Observable<any> {
    // `` -> backtics
    return this._http.post(`${this.apiURL}users`, user );
  }

  login(user: User): Observable<any> {
    return this._http.post(`${this.apiURL}login`, user );
  }
}
