import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {WavesHeightPlotComponent} from './waves-height-plot/waves-height-plot.component';

import {HttpClientModule} from '@angular/common/http';
import {ApiService} from './api.service';
import {PlotlyModule} from 'angular-plotly.js';
import {TidesComponent} from './tides/tides.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatOptionModule,
  MatPaginatorModule,
  MatSelectModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {DataTableComponent} from './data-table/data-table.component';
import {WavesPeriodPlotComponent} from './waves-period-plot/waves-period-plot.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SpotSelectorComponent} from './spot-selector/spot-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    WavesHeightPlotComponent,
    TidesComponent,
    DataTableComponent,
    WavesPeriodPlotComponent,
    SpotSelectorComponent
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
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatListModule,
    MatAutocompleteModule,
    MatInputModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {
}

