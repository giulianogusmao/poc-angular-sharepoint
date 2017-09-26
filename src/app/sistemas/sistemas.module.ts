import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { SistemasComponent } from './sistemas.component';
import { ListaSistemasComponent } from './lista-sistemas/lista-sistemas.component';
import { CabecalhoSistemasComponent } from './cabecalho-sistemas/cabecalho-sistemas.component';
import { BuscarSistemasComponent } from './buscar-sistemas/buscar-sistemas.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
  ],
  declarations: [
    SistemasComponent,
    ListaSistemasComponent,
    CabecalhoSistemasComponent,
    BuscarSistemasComponent,
  ],
  providers: [],
  exports: [
    SistemasComponent,
  ]
})
export class SistemasModule { }
