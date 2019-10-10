import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

// Interfaces
import { IResponseCity } from '../interfaces';

@Injectable()
export class StorageService {

  constructor() { }

  // Add the found city
  public city$ = new Subject<IResponseCity>();

}
