import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ApiService } from 'src/app/core/api.service';
import { Produto } from 'src/app/shared/interfaces/Data/Produto';
import { VPedido } from "src/app/shared/interfaces/Data/VPedidos";
import { VPedidoResponse } from 'src/app/shared/interfaces/VPedidosPagedResponse';
import { VPedidoPagedParams } from "src/app/shared/interfaces/VPedidosParams";

@Component({
  selector: 'ecom-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss'],

})
export class PedidosComponent implements OnInit {

  source: VPedido[] | undefined;
  columns =['pedidoId', 'dataInclusao', 'dataEntrega']
  expandedElement: VPedido | null = null;
  pages: number | undefined; 

  constructor( private _api : ApiService) { }

  ngOnInit(): void {
    const params: VPedidoPagedParams = { page: 1, pageSize: 20 };
    this._api.get<VPedidoResponse>('pedidos', params).subscribe(data => {
      this.source = data.pedidos;
      this.pages = data.count;
    })
  }

  pageEvent(event: PageEvent)
  {
    const params: VPedidoPagedParams = { page: event.pageIndex+1, pageSize: event.pageSize };
    this._api.get<VPedidoResponse>('pedidos', params).subscribe(data => {
      this.source = data.pedidos;
      this.pages = data.count;
    })
  }
}
