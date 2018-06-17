import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {WavesComponent} from './waves/waves.component';

import {HttpClientModule} from '@angular/common/http';
import {ApiService} from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    WavesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
