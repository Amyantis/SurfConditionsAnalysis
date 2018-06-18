import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {WavesComponent} from './waves/waves.component';

import {HttpClientModule} from '@angular/common/http';
import {ApiService} from './api.service';
import {PlotlyModule} from 'angular-plotly.js';

@NgModule({
  declarations: [
    AppComponent,
    WavesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PlotlyModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
