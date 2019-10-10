import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Api service
@Injectable()
export class ApiService {

  constructor(
    private readonly http: HttpClient
  ) { }

  // test request api
  public testRequest(): Observable<any> {
    return this.http.get('?q=London,uk');
  }

}
