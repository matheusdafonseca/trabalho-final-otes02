import { Component, OnInit } from '@angular/core';
import { Cartao } from 'src/app/models/cartao';
import { AdicionarCartaoService } from 'src/app/services/adicionar-cartao.service';

@Component({
  selector: 'app-cartoes-andamento',
  templateUrl: './cartoes-andamento.component.html',
  styleUrls: ['./cartoes-andamento.component.css']
})
export class CartoesAndamentoComponent implements OnInit {
  cartoesAndamento: Cartao[] = [];

  constructor(private cartaoService: AdicionarCartaoService) { }

  ngOnInit(): void {
    this.getCartoes();
  }

  getCartoes(){
    this.cartaoService.getCartoesAndamento().subscribe( (response) => {
      response.forEach(cartao => {
        const data = new Date(cartao.dataFinalizacao);
        const dia = data.getDate() < 10 ? `0${data.getDate()}`: `${data.getDate()}`;
        const mes = data.getMonth() < 10 ? `0${data.getMonth()}`: `${data.getMonth()}`;
        const dataFormatada = `${dia}/${mes}/${data.getFullYear()}`;
        cartao.dataFinalizacao = dataFormatada;
      })
      this.cartoesAndamento = response;
    });
  }
}
