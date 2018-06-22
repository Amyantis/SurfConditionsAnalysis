import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {WavesComponent} from './waves/waves.component';

import {HttpClientModule} from '@angular/common/http';
import {ApiService} from './api.service';
import {PlotlyModule} from 'angular-plotly.js';
import {TidesComponent} from './tides/tides.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule, MatPaginatorModule, MatTableModule, MatTabsModule, MatToolbarModule} from '@angular/material';
import {WavesTableComponent} from './waves-table/waves-table.component';

@NgModule({
  declarations: [
    AppComponent,
    WavesComponent,
    TidesComponent,
    WavesTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PlotlyModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatTabsModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {
}

