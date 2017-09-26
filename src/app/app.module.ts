import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SistemasModule } from './sistemas/sistemas.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SistemasModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
