import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaoTarefasComponent } from './cartao-tarefas.component';

describe('CartaoTarefasComponent', () => {
  let component: CartaoTarefasComponent;
  let fixture: ComponentFixture<CartaoTarefasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartaoTarefasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaoTarefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
