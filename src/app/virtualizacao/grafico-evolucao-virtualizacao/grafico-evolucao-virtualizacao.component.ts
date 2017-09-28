import { Component } from '@angular/core';
import { LoadComponent } from '../../shared/loadComponent';

import { GraficoEvolucaoVirtualizacaoService } from './services/index';
import { EvolucaoVirtualizacao } from './models/index';

@Component({
  selector: 'app-grafico-evolucao-virtualizacao',
  templateUrl: './grafico-evolucao-virtualizacao.component.html',
  styleUrls: ['./grafico-evolucao-virtualizacao.component.scss'],
  providers: [GraficoEvolucaoVirtualizacaoService]
})
export class GraficoEvolucaoVirtualizacaoComponent extends LoadComponent<EvolucaoVirtualizacao> {

  constructor(
    protected service: GraficoEvolucaoVirtualizacaoService
  ) {
    super(service);
  }

  completeLoad(): void {
    console.log(this.dados);
  }

}
