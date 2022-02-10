import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { DetalhePedidoComponent } from './pages/pedidos/detalhe-pedido/detalhe-pedido.component';
import { LineChartComponent } from './pages/dashboard/charts/line-chart/line-chart.component';
 
@NgModule({
  declarations: [
    PedidosComponent,
    DashboardComponent,
    DetalhePedidoComponent,
    LineChartComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    
  ]
})
export class HomeModule { }
