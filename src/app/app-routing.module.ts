import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SistemasComponent } from './sistemas/sistemas.component';
import { VirtualizacaoComponent } from './virtualizacao/virtualizacao.component';

const routes: Routes = [
  {
    path: 'ListaDeSistemas',
    component: SistemasComponent
  },
  {
    path: 'Virtualizacao',
    component: VirtualizacaoComponent
  },
  {
    path: '',
    redirectTo: '/ListaDeSistemas',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
