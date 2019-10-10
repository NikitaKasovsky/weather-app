import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Services
import { ApiService } from './services';

// Components
import {
  AdditionalInformationComponent,
  BasicInformationComponent,
  InputCityComponent,
  ToggleUnitComponent,
  ViewComponent,
  SelectedCityComponent
} from './components';

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
  exports: [
    ViewComponent
  ],
  providers: [
    ApiService
  ]
})
export class ViewModule { }
