import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

// Services
import { ApiService, StorageService } from '../../services';

// Interfaces
import { IResponseCity } from '../../interfaces';

@Component({
  selector: 'app-input-city',
  templateUrl: './input-city.component.html',
  styleUrls: ['./input-city.component.scss']
})
export class InputCityComponent implements OnInit {

  constructor(
    private readonly api: ApiService,
    private readonly storage: StorageService
  ) { }

  search = new FormControl();

  ngOnInit() {
  }

  public submit(): void {
    this.api.serachCity(this.search.value)
      .subscribe((city: IResponseCity) => {
        this.storage.city$.next(city);
      });
  }

}
