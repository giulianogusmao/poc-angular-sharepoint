import { Component } from '@angular/core';
import { LoadComponent } from '../../shared/loadComponent';

import { ListaSistemasService } from './services/index';
import { Sistema } from './models/index';

@Component({
  selector: 'app-lista-sistemas',
  templateUrl: './lista-sistemas.component.html',
  styleUrls: ['./lista-sistemas.component.scss'],
  providers: [ListaSistemasService]
})
export class ListaSistemasComponent extends LoadComponent<Sistema> {
  public sistemas: Sistema[] = [];
  public total = 0;

  constructor(
    protected sistemasService: ListaSistemasService
  ) {
    super(sistemasService);
  }

  completeLoad() {
    this.sistemas = this.dados.slice(0, 2);
    this.total = this.dados.length;
  }

}
