import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interfaces
import { IResponseCity } from '../interfaces';

// Api service
@Injectable()
export class ApiService {

  constructor(
    private readonly http: HttpClient
  ) { }

  // test request api
  public testRequest(): Observable<IResponseCity> {
    return this.http.get<IResponseCity>('?q=London,uk');
  }

  /**
   * Search city by title
   * @param city - title city
   */
  public serachCity(city: string): Observable<IResponseCity> {
    return this.http.get<IResponseCity>(`?q=${city}`);
  }

}
