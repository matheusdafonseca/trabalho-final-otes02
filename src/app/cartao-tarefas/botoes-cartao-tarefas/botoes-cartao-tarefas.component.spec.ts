import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoesCartaoTarefasComponent } from './botoes-cartao-tarefas.component';

describe('BotoesCartaoTarefasComponent', () => {
  let component: BotoesCartaoTarefasComponent;
  let fixture: ComponentFixture<BotoesCartaoTarefasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotoesCartaoTarefasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotoesCartaoTarefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
