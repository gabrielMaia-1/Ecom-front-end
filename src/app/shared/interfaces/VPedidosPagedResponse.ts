import { VPedido } from "./Data/VPedidos";

export interface VPedidoResponse {
    count: number;
    pedidos: VPedido[];
}