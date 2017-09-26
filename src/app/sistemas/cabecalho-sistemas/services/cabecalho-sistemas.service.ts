import { Injectable } from '@angular/core';

import { LoadService } from '../../../shared/index';
import { Cabecalho, CabecalhoParcial } from '../models/index';

@Injectable()
export class CabecalhoSistemasService extends LoadService<Cabecalho, CabecalhoParcial> {

  loadLista() {
    // return super.loadLista('listaCabecalho.json', 'assets');
    return super.loadLista('ListaSistemas/Cabecalho', 'sopher');
  }

  createInstance(item: CabecalhoParcial): Cabecalho {
    return new Cabecalho(
      item.Codigo,
      item.Tipo,
      item.TipoReal,
      item.Quantidade,
      item.idStatus,
      item.idTipo,
      item.Descricao
    );
  }

}
