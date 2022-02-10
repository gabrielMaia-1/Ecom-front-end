import { Endereco } from "./Endereco";
import { Produto } from "./Produto";

export interface VPedido {
    pedidoId: number;
    dataInclusao: Date;
    dataEntrega: Date;
    endereco: Endereco;
    produtos: Produto[];
}