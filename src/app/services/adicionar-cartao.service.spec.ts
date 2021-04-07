import { TestBed } from '@angular/core/testing';

import { AdicionarCartaoService } from './adicionar-cartao.service';

describe('AdicionarCartaoService', () => {
  let service: AdicionarCartaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdicionarCartaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
