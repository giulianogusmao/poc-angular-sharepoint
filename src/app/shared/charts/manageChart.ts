import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';
import { ChartConfig } from './chartConfig';

export class ManageChart {

  // tslint:disable-next-line:max-line-length
  readonly colors = ['#00c6da', '#ff6633', '#990099', '#B0DE09', '#0D8ECF', '#2A0CD0', '#CD0D74', '#CC0000', '#00CC00', '#0000CC', '#DDDDDD', '#999999', '#333333'];
  private _chart: AmChart;
  private eixoX = 'Periodo';

  constructor(
    private AmCharts: AmChartsService,
    readonly local: string,
    private _data: any[] = [],
    readonly config?: ChartConfig,
  ) {
    this.create();
  }

  /**
   * getters and setters
   */
  set data(data: any[]) {
    this._data = [].concat(data);
    // this._myChart.update(this.data);
  }

  get data(): any[] {
    return [].concat(this._data);
  }

  /**
   * metodos
   */
  create() {
    this._chart = this.AmCharts.makeChart(this.local, this._getObjectChart());
  }

  update(data: any[]) {
    this.AmCharts.updateChart(this._chart, () => this._chart.dataProvider = data);
  }

  destroy() {
    if (this._chart) {
      this.AmCharts.destroyChart(this._chart);
    }
  }

  private _getObjectChart() {
    const _getGraphs = function (valoresY: object[]) {
      const arr = [],
        graph = {
          type: 'column',
          fillAlphas: .8,
          lineAlpha: 0,
          showHandOnHover: true,
          fillColorsField: 'fill'
        };

      valoresY.forEach((line, key) => {
        const obj = Object.assign({}, graph);

        Object.keys(line).forEach(function (k) {
          obj[k] = line[k];
        });

        obj['id'] = 'AmGraph-' + (key + 1);
        arr.push(obj);
      });

      return arr;
    };

    const objChart = {
      type: 'serial',
      theme: 'light',
      categoryField: this.eixoX,
      autoMarginOffset: 0,
      autoMargins: false,
      marginBottom: 30,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 0,
      colors: this.colors,
      startDuration: 0.3,
      startEffect: 'easeOutSine',
      addClassNames: true,
      fontFamily: 'Tahoma',
      fontSize: 12,
      categoryAxis: {
        gridPosition: 'start',
        gridThickness: 0,
        axisColor: '#EDEFF3',
      },
      chartCursor: {
        enabled: true,
        cursorAlpha: 0,
        cursorColor: '#333333'
      },
      trendLines: [],
      graphs: _getGraphs(this.config.eixoY),
      guides: [],
      valueAxes: [],
      allLabels: [],
      balloon: {
        color: '#FFFFFF',
        fillAlpha: 0.9,
        fillColor: '#212121',
        borderThickness: 0,
        fontSize: 12,
        textAlign: 'left'
      },
      legend: {
        enabled: true,
        useGraphSettings: true,
        markerSize: 8,
        valueWidth: 0,
        spacing: 10,
        verticalGap: 5,
        equalWidths: false,
      },
      titles: [],
      dataProvider: this.data
    };

    return Object.assign(objChart, this.config.chart);
  }

}
