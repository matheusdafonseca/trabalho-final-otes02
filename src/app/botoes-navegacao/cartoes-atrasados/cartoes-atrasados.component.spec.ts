import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartoesAtrasadosComponent } from './cartoes-atrasados.component';

describe('CartoesAtrasadosComponent', () => {
  let component: CartoesAtrasadosComponent;
  let fixture: ComponentFixture<CartoesAtrasadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartoesAtrasadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartoesAtrasadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
