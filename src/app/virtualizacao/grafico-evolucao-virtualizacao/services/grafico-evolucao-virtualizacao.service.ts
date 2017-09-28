import { Injectable } from '@angular/core';

import { LoadService } from '../../../shared/index';
import { EvolucaoVirtualizacao } from '../models/Index';


@Injectable()
export class GraficoEvolucaoVirtualizacaoService extends LoadService<EvolucaoVirtualizacao, EvolucaoVirtualizacao> {

  loadLista() {
    return super.loadLista('Virtualizacao/EvolucaoVirtualizacao', { DataReferencia: '2017-05-16T16:15:19.3' });
  }

  createInstance(item: EvolucaoVirtualizacao): EvolucaoVirtualizacao {
    return item;
  }
}
