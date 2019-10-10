import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

// Services
import { StorageService } from '../../services';

// Interfaces
import { IResponseCity } from '../../interfaces';

@Component({
  selector: 'app-selected-city',
  templateUrl: './selected-city.component.html',
  styleUrls: ['./selected-city.component.scss']
})
export class SelectedCityComponent implements OnInit, OnDestroy {

  constructor(
    private readonly storage: StorageService
  ) { }

  // Selected city
  public city: IResponseCity;

  // All subscriptions
  private subscriptions = new Subscription();

  // ------------------------------------------------------------
  /**
   * Initialization
   */
  public ngOnInit(): void {
    this.citySubscription();
  }

  /**
   * Destroy
   */
  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
  // ------------------------------------------------------------

  /**
   * Subscription to city data
   */
  private citySubscription(): void {
    this.storage.city$
      .subscribe((city: IResponseCity) => {
        this.city = city;
      });
  }

}
