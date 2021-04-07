import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartoesConcluidosComponent } from './cartoes-concluidos.component';

describe('CartoesConcluidosComponent', () => {
  let component: CartoesConcluidosComponent;
  let fixture: ComponentFixture<CartoesConcluidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartoesConcluidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartoesConcluidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
