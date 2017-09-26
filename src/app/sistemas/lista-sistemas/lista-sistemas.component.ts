import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { ListaSistemasService } from './services/index';
import { Sistema } from './models/index';

@Component({
  selector: 'app-lista-sistemas',
  templateUrl: './lista-sistemas.component.html',
  styleUrls: ['./lista-sistemas.component.scss'],
  providers: [ListaSistemasService]
})
export class ListaSistemasComponent implements OnInit, OnDestroy {
  public sistemas: Sistema[] = [];
  public total = 0;
  private _inscricao: Subscription;

  constructor(
    private _sistemasService: ListaSistemasService
  ) { }

  ngOnInit() {
    this._inscricao = this._sistemasService
      .loadLista()
      .subscribe(() => {
        this.total = this._sistemasService.lista.length;
        this.getSistemas();
      });
  }

  getSistemas() {
    this.sistemas = this._sistemasService.lista.slice(0, 2);
  }

  ngOnDestroy() {
    this._inscricao.unsubscribe();
  }

}
