import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  constructor(
    private readonly api: ApiService
  ) { }

  ngOnInit() {
    this.api.testRequest()
      .subscribe(data => console.log(data));
  }

}
