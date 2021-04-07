import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartoesAndamentoComponent } from './cartoes-andamento.component';

describe('CartoesAndamentoComponent', () => {
  let component: CartoesAndamentoComponent;
  let fixture: ComponentFixture<CartoesAndamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartoesAndamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartoesAndamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
