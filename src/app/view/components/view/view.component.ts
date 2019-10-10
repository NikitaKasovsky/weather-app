import { Component, OnInit } from '@angular/core';

// Services
import { ApiService, StorageService } from '../../services';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  constructor(
    private readonly api: ApiService,
    private readonly storage: StorageService
  ) { }

  ngOnInit() {
    this.api.testRequest()
      .subscribe(data => this.storage.city$.next(data));
  }

}
