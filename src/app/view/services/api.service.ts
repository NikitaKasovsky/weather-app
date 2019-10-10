import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Environment variables
import { environment } from '../../../environments/environment';

// Api service
@Injectable()
export class ApiService {

  constructor(
    private readonly http: HttpClient
  ) { }

  private readonly BASE_URL = environment.host;
  private readonly KEY = environment.appid;

  // test request api
  public testRequest(): Observable<any> {
    return this.http.get(`${this.BASE_URL}?q=London,uk&appid=${this.KEY}`);
  }

}
