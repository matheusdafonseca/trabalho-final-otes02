import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-botoes-navegacao',
  templateUrl: './botoes-navegacao.component.html',
  styleUrls: ['./botoes-navegacao.component.css']
})
export class BotoesNavegacaoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  botaoAtrasadosOnClick() {
    this.router.navigate(['/cartoes-atrasados']);
  }

  botaoAndamentoOnClick() {
    this.router.navigate(['/cartoes-andamento']);
  }

  botaoConcluidoOnClick() {
    this.router.navigate(['/cartoes-concluidos']);
  }
}
