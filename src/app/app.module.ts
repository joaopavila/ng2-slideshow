import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SliderModule } from './slider/slider.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
