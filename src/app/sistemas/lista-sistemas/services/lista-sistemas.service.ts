import { Injectable } from '@angular/core';

import { LoadService } from '../../../shared/index';
import { Sistema, SistemaParcial } from '../models/Index';

@Injectable()
export class ListaSistemasService extends LoadService<Sistema, SistemaParcial> {

  loadLista() {
    // return super.loadLista('listaSistemas.json', 'assets');
    return super.loadLista('ListaSistemas/ListaCompleta');
  }

  createInstance(item: SistemaParcial): Sistema {
    return new Sistema(
      item.Codigo,
      item.HasModulo,
      item.IdSistema,
      item.IdStatus,
      item.StSistema,
      item.NmSistema,
      item.SgSistema,
      item.DescSistema,
      item.GerenteProducao,
      item.GerenteDesenvolvimento,
      item.GerenteSustentacao,
      item.GerenteSimplificacao,
      item.NomeIC,
      item.Apelido,
      item.NmFornecedor,
      item.Modulos
    );
  }

}
