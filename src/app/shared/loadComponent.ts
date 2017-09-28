import { OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { LoadService } from './service';

export abstract class LoadComponent<Model> implements OnInit, OnDestroy {

  private _dados: Model[] = [];
  private _inscricao: Subscription;

  constructor(
    private _service
  ) { }

  ngOnInit(): void {
    this._inscricao = this._service
      .loadLista()
      .subscribe(lista => {
        this._dados = lista;
        this.completeLoad();
      });
  }

  ngOnDestroy(): void {
    this._inscricao.unsubscribe();
  }

  abstract completeLoad(): void;

  get dados(): Model[] {
    return ([] as Model[]).concat(this._dados);
  }

}
