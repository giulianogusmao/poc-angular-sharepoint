import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { CabecalhoSistemasService } from './services/index';
import { Cabecalho } from './models/index';

@Component({
  selector: 'app-cabecalho-sistemas',
  templateUrl: './cabecalho-sistemas.component.html',
  styleUrls: ['./cabecalho-sistemas.component.scss'],
  providers: [CabecalhoSistemasService]
})
export class CabecalhoSistemasComponent implements OnInit, OnDestroy {
  public cabecalhos: Cabecalho[] = [];
  private _inscricao: Subscription;

  constructor(
    private _cabecalhoService: CabecalhoSistemasService
  ) { }

  ngOnInit() {
    this._inscricao = this._cabecalhoService
      .loadLista()
      .subscribe(() => this.getCabecalhos());
  }

  getCabecalhos() {
    this.cabecalhos = this._cabecalhoService.lista;
  }

  ngOnDestroy() {
    this._inscricao.unsubscribe();
  }

}
