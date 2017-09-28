import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { LoadComponent } from '../../shared/loadComponent';

import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';

import { Helper, ManageChart, ChartConfig } from '../../shared/index';
import { GraficoEvolucaoVirtualizacaoService } from './services/index';
import { EvolucaoVirtualizacao } from './models/index';

@Component({
  selector: 'app-grafico-evolucao-virtualizacao',
  templateUrl: './grafico-evolucao-virtualizacao.component.html',
  styleUrls: ['./grafico-evolucao-virtualizacao.component.scss'],
  providers: [GraficoEvolucaoVirtualizacaoService]
})
export class GraficoEvolucaoVirtualizacaoComponent extends LoadComponent<EvolucaoVirtualizacao> implements AfterViewInit, OnDestroy {
  private chart;

  constructor(
    protected service: GraficoEvolucaoVirtualizacaoService,
    private AmCharts: AmChartsService,
  ) {
    super(service);
  }

  completeLoad(): void {
    // formata data e atualiza chart
    this.chart.update(
      this.dados.map(dados => {
        dados.MetaFormatado = Helper.numberToStr(dados.Meta) + '%';
        dados.RealFormatado = Helper.numberToStr(dados.Real) + '%';
        return dados;
      })
    );
  }

  initChart() {
    const configChart: ChartConfig = {
      eixoY: [
        {
          title: 'Real',
          valueField: 'Real',
          labelText: '[[RealFormatado]]',
          labelPosition: 'top',
          balloonText: 'Real: [[RealFormatado]]',
        },
        {
          title: 'Target',
          valueField: 'Meta',
          labelText: '[[MetaFormatado]]',
          labelPosition: 'top',
          balloonText: 'Target: [[MetaFormatado]]',
        },
      ],
      chart: {
        valueAxes: [{
          stackType: 'regular',
        }],
        colors: ['#00c6da', '#D0D0D0'],
      },
      typeChart: 'collum',
    };

    this.chart = new ManageChart(this.AmCharts, 'chartdiv', [], configChart);
  }

  ngAfterViewInit() {
    this.initChart();
  }

  ngOnDestroy() {
    this.chart.destroy();
    super.ngOnDestroy();
  }

}
