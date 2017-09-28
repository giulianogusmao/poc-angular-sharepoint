import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AmChartsModule } from '@amcharts/amcharts3-angular';

import { SistemasModule } from './sistemas/sistemas.module';
import { VirtualizacaoModule } from './virtualizacao/virtualizacao.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AmChartsModule,
    SistemasModule,
    VirtualizacaoModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
