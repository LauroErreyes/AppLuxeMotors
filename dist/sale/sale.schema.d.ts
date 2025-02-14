import { Document } from 'mongoose';
declare class Vehiculo {
    id: string;
    brand: string;
    modelo: string;
    precioBase: number;
    imagenSeleccionada: string;
}
declare class SelectedColor {
    name: string;
    image: string;
}
declare class Accessory {
    name: string;
    price: number;
}
declare class PaymentDetails {
    method: string;
    cardNumber?: string;
    cardHolder?: string;
    expiry?: string;
    isAgencyPayment?: boolean;
}
declare class FinancingDetails {
    cuotas: number;
    entradaPorcentaje: number;
    entradaMonto: number;
    cuotaMensual: number;
    seguroMensual: number;
    totalMensual: number;
}
export declare class Sale extends Document {
    usuarioID: string;
    vehiculo: Vehiculo;
    selectedColor: SelectedColor;
    accessories: Accessory[];
    totalAccesorios: number;
    paymentDetails: PaymentDetails;
    financingDetails?: FinancingDetails;
    totalContado?: number;
    status: string;
    date: Date;
}
export declare const SaleSchema: import("mongoose").Schema<Sale, import("mongoose").Model<Sale, any, any, any, Document<unknown, any, Sale> & Sale & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Sale, Document<unknown, {}, import("mongoose").FlatRecord<Sale>> & import("mongoose").FlatRecord<Sale> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
export {};
