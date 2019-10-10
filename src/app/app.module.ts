import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Root component
import { AppComponent } from './app.component';

// Modules
import { ViewModule } from './view/view.module';
import { CoreModule } from './core/core.module';

// Root module
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ViewModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
