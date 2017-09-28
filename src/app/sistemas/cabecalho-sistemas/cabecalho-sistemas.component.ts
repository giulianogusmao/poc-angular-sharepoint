import { Component } from '@angular/core';
import { LoadComponent } from '../../shared/index';

import { CabecalhoSistemasService } from './services/index';
import { Cabecalho } from './models/index';

@Component({
  selector: 'app-cabecalho-sistemas',
  templateUrl: './cabecalho-sistemas.component.html',
  styleUrls: ['./cabecalho-sistemas.component.scss'],
  providers: [CabecalhoSistemasService]
})
export class CabecalhoSistemasComponent extends LoadComponent<Cabecalho> {
  public cabecalhos: Cabecalho[] = [];

  constructor(
    protected cabecalhoService: CabecalhoSistemasService
  ) {
    super(cabecalhoService);
  }

  completeLoad() {
    this.cabecalhos = this.dados;
  }

}
