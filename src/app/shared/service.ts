import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Helper } from './helper';

@Injectable()
export abstract class LoadService<Model, ModelParcial> {

  private _lista: Model[];

  constructor(
    private _http: Http
  ) {
  }

  get lista(): Model[] {
    return ([] as Model[]).concat(this._lista);
  }

  loadLista(api: string, server?: string) {
    return this._http.get(Helper.apiUrl(api, server))
    .map((res: Response) =>
      this._lista = res
        .json()
        .map((dado: ModelParcial) => this.createInstance(dado))
    );
  }

  abstract createInstance(item: ModelParcial): Model;

}
