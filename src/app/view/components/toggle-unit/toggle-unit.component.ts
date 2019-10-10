import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-toggle-unit',
  templateUrl: './toggle-unit.component.html',
  styleUrls: ['./toggle-unit.component.scss']
})
export class ToggleUnitComponent implements OnInit {

  constructor() { }

  // Toggle form control
  public toggle = new FormControl();

  ngOnInit() {
    this.toggle.valueChanges
      .subscribe(data => console.log(data));
  }

}
