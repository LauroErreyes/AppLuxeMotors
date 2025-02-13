// sale.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export class SaleItem {
    @Prop({ required: true })
    accessory: string;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    quantity: number;

    @Prop({ required: true })
    unit_price: number;

    @Prop({ required: true })
    total_item: number;
}



@Schema()
export class Sale_acc extends Document {
    // Identificador del usuario que realizó la compra
    @Prop({ required: true })
    user: string;

    // Lista de artículos vendidos
    @Prop({ type: [SaleItem], required: true })
    items: SaleItem[];

    // Suma total de los accesorios (por ejemplo, la suma de total_item de cada elemento)
    @Prop({ required: true })
    totalAccesorios: number;

    // Fecha de la compra
    @Prop({ required: true, default: Date.now })
    orderDate: Date;

    // Forma de pago: 'tarjeta' o 'efectivo'
    @Prop({ required: true, enum: ['tarjeta', 'efectivo'] })
    formaPago: string;

    // Sólo se envía si formaPago es 'tarjeta'
    @Prop({ type: { numero: String, nombre: String, expiracion: String, cvv: String } })
    datosTarjeta?: {
        numero: string;
        nombre: string;
        expiracion: string;
        cvv: string;
    };

    // Para pagos en efectivo, solo se utilizará 'agencia'
    @Prop({ type: { lugarPago: String } })
    datosEfectivo?: {
        lugarPago: 'agencia';
    };
}

export const SaleSchemaAcc = SchemaFactory.createForClass(Sale_acc);
