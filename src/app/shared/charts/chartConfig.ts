export interface ChartConfig {
  eixoY: object[];
  chart?: PropertiesChart;
  typeChart: string;
}

interface PropertiesChart {
  valueAxes?: any[];
  chartCursor?: object;
  type?: string;
  categoryField?: string;
  autoMarginOffset?: number;
  autoMargins?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  colors?: string[];
  startDuration?: number;
  startEffect?: number;
  addClassNames?: boolean;
  fontFamily?: string;
  fontSize?: number;
  categoryAxis?: object;
  legend?: object;
}
