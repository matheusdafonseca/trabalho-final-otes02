import { Component, Input, OnInit } from '@angular/core';
import { Cartao } from '../models/cartao';
import { AdicionarCartaoService } from '../services/adicionar-cartao.service';

@Component({
  selector: 'app-cartao-tarefas',
  templateUrl: './cartao-tarefas.component.html',
  styleUrls: ['./cartao-tarefas.component.css']
})
export class CartaoTarefasComponent implements OnInit {

  @Input() cartao: Cartao;

  constructor(private cartaoService: AdicionarCartaoService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  deleteCartao(id: number) {
    console.log(id);
    this.cartaoService.deletarCartao(id).subscribe();
  }
}
