import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {WavesComponent} from './waves/waves.component';

import {HttpClientModule} from '@angular/common/http';
import {ApiService} from './api.service';
import {PlotlyModule} from 'angular-plotly.js';
import {TidesComponent} from './tides/tides.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatGridListModule, MatIconModule, MatToolbarModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    WavesComponent,
    TidesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PlotlyModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
