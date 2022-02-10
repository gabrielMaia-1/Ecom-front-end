import { Component, OnInit } from '@angular/core';
import { ChartDataset } from 'chart.js';
import { map, mapTo } from 'rxjs';
import { ApiService } from 'src/app/core/api.service';
import { RankProdutoResponse } from 'src/app/shared/interfaces/Responses/RankProdutoResponse';
import { TicketMedioCidadeResponse } from 'src/app/shared/interfaces/TicketMedioCidadeResponse';
import { TicketMedioDataResponse } from 'src/app/shared/interfaces/TicketMedioDataResponse';
import { ChartDefinition } from './charts/line-chart/line-chart.component';
@Component({
  selector: 'ecom-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dataSet: ChartDataset[] = 
    [{
      label: '# Pedidos / Data',
  data: [65, 59, 80, 81, 56, 55, 40],
  fill: true,
  backgroundColor: 'rgb(75, 192, 192)',
  tension: 0.1
  },
  {
      label: '$ Pedidos / Data',
      data: [65, 59, 20, 90, 56, 12, 40],
      fill: true,
      backgroundColor: 'rgb(20, 192, 20)',
      tension: 0.1
  },
  {
      label: 'Ticket Médio / Data',
      data: [5, 102, 80, 57, 56, 55, 13],
      fill: true,
      backgroundColor: 'rgb(120, 160, 20)',
      tension: 0.1
  }]

  ticketMedData = this._api.get<TicketMedioDataResponse[]>('pedidos/ticketMedio/data')
  .pipe(map((v) => this.parseTicketMedioData(v)));

  ticketMedCidade = this._api.get<TicketMedioCidadeResponse[]>('pedidos/ticketMedio/cidade')
  .pipe(map((v) => this.parseTicketMedioCidae(v)))

  rankProdutos = this._api.get<RankProdutoResponse[]>('pedidos/rankProdutos')
  .pipe(map((v) => this.parseRankProduto(v)))

  constructor(private _api: ApiService) { }

  ngOnInit(): void { }

  parseRankProduto(data: RankProdutoResponse[]): ChartDefinition | null {

    const produtos: string[] = [];
    const quantidades: number[] = [];
    const ticketMedios: number[] = [];
    const valores: number[] = [];

    data.forEach(d => {
      produtos.push(d.produto);
      quantidades.push(d.quantidade);
      ticketMedios.push(d.ticketMedio);
      valores.push(d.valor);
    }); 
    const color = this.generateRandomColor(data.length);

    const datasetQnt = {
      label: '# Pedidos',
      data: quantidades,
      backgroundColor: color,
      borderWidth: 1
    };

    const datasetTicket = {
      label: '$ Ticket Méd.',
      data: ticketMedios,
      backgroundColor: color,
      borderWidth: 1
    };

    const datasetVal = {
      label: '$ Pedidos',
      data: valores,
      backgroundColor: color,
      borderWidth: 1
    };

    return  {
      chartType: 'pie',
      labels: produtos,
      datasets: [datasetQnt, datasetTicket, datasetVal]
    }
  }

  parseTicketMedioCidae(data: TicketMedioCidadeResponse[]): ChartDefinition {
    const cidades: string[] = [];
    const quantidades: number[] = [];
    const ticketMedios: number[] = [];
    const valores: number[] = [];
    
    const ordered = data.sort((a, b) => b.valor - a.valor);

    ordered.forEach(d => {
      cidades.push(d.cidade);
      quantidades.push(d.quantidade);
      ticketMedios.push(d.ticketMedio);
      valores.push(d.valor);
    }); 

    const color1 = this.generateRandomColor();
    const color2 = this.generateRandomColor();
    const color3 = this.generateRandomColor();

    const datasetQnt = {
      label: '# Pedidos',
      data: quantidades,
      fill: true,
      backgroundColor: color1,
      tension: 0.1
    };

    const datasetTicket = {
      label: '$ Ticket Méd.',
      data: ticketMedios,
      fill: true,
      backgroundColor: color2,
      tension: 0.1
    };

    const datasetVal = {
      label: '$ Pedidos',
      data: valores,
      fill: true,
      backgroundColor: color3,
      tension: 0.1
    };

    const options = { indexAxis: 'y' }
    return  {
      chartType: 'bar',
      labels: cidades,
      datasets: [datasetQnt, datasetTicket, datasetVal],
      options: options
    }
  }

  generateRandomColor(n: number = 1): string[] {
    const colorArr = [];
    for (const idx of [...Array(n).keys()]) {
      const hex = '0123456789ABCDEF'.split('');
      let color = '#';
      for (const i of [...Array(6).keys()]) {
          color += hex[Math.floor(Math.random() * 16)];
      }
      colorArr.push(color)
    }
    return colorArr;
  }

  parseTicketMedioData(data: TicketMedioDataResponse[]): ChartDefinition {
    const datas: string[] = [];
    const quantidades: number[] = [];
    const ticketMedios: number[] = [];
    const valores: number[] = [];
    
    data.forEach(d => {
      datas.push(new Date(d.data).toLocaleDateString());
      quantidades.push(d.quantidade);
      ticketMedios.push(d.ticketMedio);
      valores.push(d.valor);
    }); 

    const datasetQnt = {
      label: '# Pedidos',
      data: quantidades,
      fill: true,
      backgroundColor: '#037a35',
      tension: 0.1
    };

    const datasetTicket = {
      label: '$ Ticket Méd.',
      data: ticketMedios,
      fill: true,
      backgroundColor: '#b88a0d',
      tension: 0.1
    };

    const datasetVal = {
      label: '$ Pedidos',
      data: valores,
      fill: true,
      backgroundColor: '#0d5db8',
      tension: 0.1
    };

    return  {
      chartType: 'line',
      labels: datas,
      datasets: [datasetQnt, datasetTicket, datasetVal]
    }
  }
}
