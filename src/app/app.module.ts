import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { BotaoAdicionarCartaoComponent } from './botao-adicionar-cartao/botao-adicionar-cartao.component';
import { BotoesNavegacaoComponent } from './botoes-navegacao/botoes-navegacao.component';
import { CartaoTarefasComponent } from './cartao-tarefas/cartao-tarefas.component';
import { BotoesCartaoTarefasComponent } from './cartao-tarefas/botoes-cartao-tarefas/botoes-cartao-tarefas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartoesAtrasadosComponent } from './botoes-navegacao/cartoes-atrasados/cartoes-atrasados.component';
import { CartoesAndamentoComponent } from './botoes-navegacao/cartoes-andamento/cartoes-andamento.component';
import { CartoesConcluidosComponent } from './botoes-navegacao/cartoes-concluidos/cartoes-concluidos.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    BotaoAdicionarCartaoComponent,
    BotoesNavegacaoComponent,
    CartaoTarefasComponent,
    BotoesCartaoTarefasComponent,
    CartoesAtrasadosComponent,
    CartoesAndamentoComponent,
    CartoesConcluidosComponent,
    PaginaPrincipalComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    PoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
