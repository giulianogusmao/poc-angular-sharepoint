import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VirtualizacaoComponent } from './virtualizacao.component';
import { GraficoEvolucaoVirtualizacaoComponent } from './grafico-evolucao-virtualizacao/grafico-evolucao-virtualizacao.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    VirtualizacaoComponent,
    GraficoEvolucaoVirtualizacaoComponent
  ],
  exports: [
    VirtualizacaoComponent
  ],
  providers: [
  ]
})
export class VirtualizacaoModule { }
