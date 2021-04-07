import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartoesAndamentoComponent } from './botoes-navegacao/cartoes-andamento/cartoes-andamento.component';
import { CartoesAtrasadosComponent } from './botoes-navegacao/cartoes-atrasados/cartoes-atrasados.component';
import { CartoesConcluidosComponent } from './botoes-navegacao/cartoes-concluidos/cartoes-concluidos.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';

const routes: Routes = [
  { path: 'cartoes-atrasados', component: CartoesAtrasadosComponent },
  { path: 'cartoes-andamento', component: CartoesAndamentoComponent },
  { path: 'cartoes-concluidos', component: CartoesConcluidosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
