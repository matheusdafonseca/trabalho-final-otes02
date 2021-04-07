import { Component, OnInit } from '@angular/core';
import { Cartao } from 'src/app/models/cartao';
import { AdicionarCartaoService } from 'src/app/services/adicionar-cartao.service';

@Component({
  selector: 'app-cartoes-atrasados',
  templateUrl: './cartoes-atrasados.component.html',
  styleUrls: ['./cartoes-atrasados.component.css']
})
export class CartoesAtrasadosComponent implements OnInit {
  cartoesAtrasados: Cartao[] = [];

  constructor(private cartaoService: AdicionarCartaoService) { }

  ngOnInit(): void {
    this.cartaoService.getCartoesAtraso().subscribe( (response) => {
      this.cartoesAtrasados = response;
    });
  }

  getCartoes(){
    this.cartaoService.getCartoesAtraso().subscribe( (response) => {
      response.forEach(cartao => {
        const data = new Date(cartao.dataFinalizacao);
        const dia = data.getDate() < 10 ? `0${data.getDate()}`: `${data.getDate()}`;
        const mes = data.getMonth() < 10 ? `0${data.getMonth()}`: `${data.getMonth()}`;
        const dataFormatada = `${dia}/${mes}/${data.getFullYear()}`;
        cartao.dataFinalizacao = dataFormatada;
      })
      this.cartoesAtrasados = response;
    });
  }

}
