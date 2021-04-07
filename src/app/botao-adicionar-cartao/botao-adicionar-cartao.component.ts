import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { PoDatepickerIsoFormat, PoModalAction, PoModalComponent, PoNotificationService } from '@po-ui/ng-components';
import { Cartao } from '../models/cartao';
import { AdicionarCartaoService } from '../services/adicionar-cartao.service';

@Component({
  selector: 'app-botao-adicionar-cartao',
  templateUrl: './botao-adicionar-cartao.component.html',
  styleUrls: ['./botao-adicionar-cartao.component.css']
})
export class BotaoAdicionarCartaoComponent implements OnInit {

  @ViewChild(PoModalComponent, { static: true }) modalAdicionarCartao: PoModalComponent;

  // Atributos Botão Adicionar Cartão
  label: string;
  type: string;
  icon: string;

  // Atributos Modal Adicionar Cartão
  tituloModalAdicionarCartao: string;
  tamanhoModalAdicionarCartao: string;

  // FORM
  adicionarCartaoForm = new FormGroup({
    disciplina: new FormControl(),
    professor: new FormControl(),
    dataFinalizacao: new FormControl(),
    tarefa: new FormControl()
  });

  constructor(private addCartaoService: AdicionarCartaoService, private fb: FormBuilder, public poNotification: PoNotificationService) {}

  // Modal Adicionar Cartão
  //////////////////////////////////////////////////
  openModalAdicionarCartao() {
    this.modalAdicionarCartao.open();
  }

  primaryActionAdicionarCartao: PoModalAction = {
    action: () => {
      this.adicionaCartao();
      this.modalAdicionarCartao.close();
    },
    label: 'Adicionar Cartão'
  };

  secondaryActionAdicionarCartao: PoModalAction = {
    action: () => {
      this.modalAdicionarCartao.close();
    },
    label: 'Cancelar Cartão'
  };
  ///////////////////////////////////////////////////

  ngOnInit() {
    this.formBuilder();
  }

  formBuilder() {
    this.adicionarCartaoForm = this.fb.group({
      disciplina: [null, Validators.required],
      professor: [null, Validators.required],
      dataFinalizacao: [null, Validators.required],
      tarefa: [null, Validators.required]
    });
  }

  adicionaCartao() {
    const cartao: Cartao = {
      disciplina: this.adicionarCartaoForm.get('disciplina').value,
      professor: this.adicionarCartaoForm.get('professor').value,
      dataFinalizacao: this.adicionarCartaoForm.get('dataFinalizacao').value,
      tarefa: this.adicionarCartaoForm.get('tarefa').value,
    }
    console.log(new Date(this.adicionarCartaoForm.get('dataFinalizacao').value));
    this.addCartaoService.adicionaCartao(cartao).subscribe(() => {
      this.poNotification.success("Cartão inserido com sucesso!");
    });
  }
}
