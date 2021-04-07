import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoAdicionarCartaoComponent } from './botao-adicionar-cartao.component';

describe('BotaoAdicionarCartaoComponent', () => {
  let component: BotaoAdicionarCartaoComponent;
  let fixture: ComponentFixture<BotaoAdicionarCartaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoAdicionarCartaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoAdicionarCartaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
