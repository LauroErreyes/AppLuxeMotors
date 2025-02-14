declare enum FormaPago {
    Tarjeta = "tarjeta",
    Efectivo = "efectivo"
}
declare class DatosTarjetaDto {
    numero: string;
    nombre: string;
    expiracion: string;
    cvv: string;
}
declare class DatosEfectivoDto {
    lugarPago: string;
}
declare class SaleItemDto {
    accessory: string;
    name: string;
    quantity: number;
    unit_price: number;
    total_item: number;
}
export declare class CreateSaleAccDto {
    user: string;
    items: SaleItemDto[];
    totalAccesorios: number;
    orderDate?: Date;
    formaPago: FormaPago;
    datosTarjeta?: DatosTarjetaDto;
    datosEfectivo?: DatosEfectivoDto;
}
export {};
