import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import {
  AdditionalInformationComponent,
  BasicInformationComponent,
  InputCityComponent,
  ToggleUnitComponent,
  ViewComponent,
  SelectedCityComponent
} from './components';

// Services
import { ApiService } from './services';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AdditionalInformationComponent,
    BasicInformationComponent,
    InputCityComponent,
    ToggleUnitComponent,
    ViewComponent,
    SelectedCityComponent
  ],
  providers: [
    ApiService
  ],
  exports: [
    ViewComponent
  ]
})
export class ViewModule { }
