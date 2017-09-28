import { TestBed, inject } from '@angular/core/testing';

import { GraficoEvolucaoVirtualizacaoService } from './grafico-evolucao-virtualizacao.service';

describe('GraficoEvolucaoVirtualizacaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GraficoEvolucaoVirtualizacaoService]
    });
  });

  it('should be created', inject([GraficoEvolucaoVirtualizacaoService], (service: GraficoEvolucaoVirtualizacaoService) => {
    expect(service).toBeTruthy();
  }));
});
