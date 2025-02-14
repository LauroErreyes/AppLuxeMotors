import { Document } from 'mongoose';
export declare class SaleItem {
    accessory: string;
    name: string;
    quantity: number;
    unit_price: number;
    total_item: number;
}
export declare class Sale_acc extends Document {
    user: string;
    items: SaleItem[];
    totalAccesorios: number;
    orderDate: Date;
    formaPago: string;
    datosTarjeta?: {
        numero: string;
        nombre: string;
        expiracion: string;
        cvv: string;
    };
    datosEfectivo?: {
        lugarPago: 'agencia';
    };
}
export declare const SaleSchemaAcc: import("mongoose").Schema<Sale_acc, import("mongoose").Model<Sale_acc, any, any, any, Document<unknown, any, Sale_acc> & Sale_acc & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Sale_acc, Document<unknown, {}, import("mongoose").FlatRecord<Sale_acc>> & import("mongoose").FlatRecord<Sale_acc> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
