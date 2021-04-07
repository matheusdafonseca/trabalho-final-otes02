import { Component, Input, OnInit } from '@angular/core';
import { Cartao } from 'src/app/models/cartao';
import { AdicionarCartaoService } from 'src/app/services/adicionar-cartao.service';

@Component({
  selector: 'app-botoes-cartao-tarefas',
  templateUrl: './botoes-cartao-tarefas.component.html',
  styleUrls: ['./botoes-cartao-tarefas.component.css']
})
export class BotoesCartaoTarefasComponent implements OnInit {
  
  @Input() cartao: Cartao;

  constructor(private cartaoService: AdicionarCartaoService) { }

  ngOnInit(): void {
  }

  delete(id: number) {
    console.log(id);
    this.cartaoService.deletarCartao(id).subscribe();
  }
}
