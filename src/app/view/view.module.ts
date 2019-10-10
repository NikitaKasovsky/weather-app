import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Services
import { ApiService, StorageService } from './services';

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
    CommonModule,
    FormsModule,
    ReactiveFormsModule
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
    ApiService,
    StorageService
  ]
})
export class ViewModule { }
