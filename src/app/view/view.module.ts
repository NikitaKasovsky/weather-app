import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import {
  AdditionalInformationComponent,
  BasicInformationComponent,
  InputCityComponent,
  ToggleUnitComponent,
  ViewComponent
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
    ViewComponent
  ],
  providers: [
    ApiService
  ],
  exports: [
    ViewComponent
  ]
})
export class ViewModule { }
