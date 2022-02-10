import { AfterViewChecked, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from "node_modules/chart.js";


export interface ChartDefinition {
  chartType: 'bar' |'line' |'scatter' |'bubble' |'pie' |'doughnut' |'polarArea' |'radar';
  labels: string[];
  datasets: {
      label: string;
      data: number[];
      fill?: boolean;
      backgroundColor: string | string[];
      tension?: number;
      borderWidth?: number;
  }[],
  options?: any;
}


@Component({
  selector: 'ecom-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit, AfterViewChecked {

    @ViewChild('chart', { read: ElementRef, static: true }) chart: ElementRef | undefined;
    @Input('dataset') dataset: ChartDefinition | undefined | null;
    @Input('titulo') titulo: string | undefined;
    chartInstance: Chart | undefined;

    constructor() { }

  
    ngOnInit(): void {
      Chart.register(...registerables);
    }
  
    ngAfterViewChecked() {
      if(this.chart && this.dataset && !this.chartInstance) this.createChart()
    }

    createChart() {
      if(!this.dataset) return;

      const chartDataset = {
        datasets: this.dataset.datasets,
        labels: this.dataset.labels 
      };

      const options = { ...this.dataset.options}

        if(!this.chartInstance) this.chartInstance = new Chart(this.chart?.nativeElement!, {
            type: this.dataset.chartType,
            data: chartDataset,
            options: options
        });
    }

}

