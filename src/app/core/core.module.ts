import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Services and providers
import {
  httpInterceptorProvider
} from './services';

// Core module
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    httpInterceptorProvider
  ]
})
export class CoreModule { }
