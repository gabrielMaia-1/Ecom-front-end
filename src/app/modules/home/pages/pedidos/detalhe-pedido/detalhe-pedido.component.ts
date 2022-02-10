import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Produto } from 'src/app/shared/interfaces/Data/Produto';
import { VPedido } from 'src/app/shared/interfaces/Data/VPedidos';

@Component({
  selector: 'ecom-detalhe-pedido',
  templateUrl: './detalhe-pedido.component.html',
  styleUrls: ['./detalhe-pedido.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]
})
export class DetalhePedidoComponent implements OnInit {

  @Input('element') element: VPedido | undefined;
  @Input('expanded') expanded: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  sum(produtos: Produto[]) {
    return produtos.reduce((acc, val) => { return acc + val.valor; }, 0)
  }

}
