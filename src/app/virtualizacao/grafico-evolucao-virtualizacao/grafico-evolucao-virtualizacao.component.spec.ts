import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoEvolucaoVirtualizacaoComponent } from './grafico-evolucao-virtualizacao.component';

describe('GraficoEvolucaoVirtualizacaoComponent', () => {
  let component: GraficoEvolucaoVirtualizacaoComponent;
  let fixture: ComponentFixture<GraficoEvolucaoVirtualizacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoEvolucaoVirtualizacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoEvolucaoVirtualizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
