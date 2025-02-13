// sale.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

/**
 * Datos del vehículo que se está vendiendo.
 */
class Vehiculo {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  brand: string;

  @Prop({ required: true })
  modelo: string;

  @Prop({ required: true })
  precioBase: number;

  @Prop({ required: true })
  imagenSeleccionada: string;
}

/**
 * Información del color seleccionado para el vehículo.
 */
class SelectedColor {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  image: string;
}

/**
 * Esquema para cada accesorio seleccionado.
 */
class Accessory {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: number;
}

/**
 * Detalles del método de pago.
 * Se utiliza para ambas formas: 'tarjeta' y 'efectivo'.
 */
class PaymentDetails {
  @Prop({ required: true, enum: ['tarjeta', 'efectivo'] })
  method: string;

  // Datos para pagos con tarjeta
  @Prop()
  cardNumber?: string;

  @Prop()
  cardHolder?: string;

  @Prop()
  expiry?: string;

  // Para efectivo, siempre se asume pago en agencia.
  @Prop()
  isAgencyPayment?: boolean;
}

/**
 * Datos específicos para ventas con financiamiento.
 * Solo se utilizan si el método de pago es 'financiado' (pago a cuotas).
 */
class FinancingDetails {
  @Prop({ required: true })
  cuotas: number;

  @Prop({ required: true })
  entradaPorcentaje: number;

  @Prop({ required: true })
  entradaMonto: number;

  @Prop({ required: true })
  cuotaMensual: number;

  @Prop({ required: true })
  seguroMensual: number;

  @Prop({ required: true })
  totalMensual: number;
}

@Schema()
export class Sale extends Document {

  @Prop({ required: true })
  usuarioID: string;
  // Datos del vehículo (se puede complementar con más información, si es necesario)
  @Prop({ type: Vehiculo, required: true })
  vehiculo: Vehiculo;

  // Color seleccionado (por ejemplo, para mostrar la imagen del vehículo)
  @Prop({ type: SelectedColor, required: true })
  selectedColor: SelectedColor;

  // Arreglo de accesorios seleccionados
  @Prop({ type: [Accessory], required: true })
  accessories: Accessory[];

  // Suma total de los accesorios seleccionados
  @Prop({ required: true })
  totalAccesorios: number;

  // Detalles del pago (ya sea con tarjeta o en efectivo)
  @Prop({ type: PaymentDetails, required: true })
  paymentDetails: PaymentDetails;

  // Datos para financiamiento (opcional, se utiliza cuando el pago es financiado)
  @Prop({ type: FinancingDetails })
  financingDetails?: FinancingDetails;

  // Monto total a pagar en caso de pago de contado (opcional)
  @Prop()
  totalContado?: number;

  // Estado de la venta (por defecto 'pendiente')
  @Prop({ default: 'pendiente' })
  status: string;

  // Fecha en la que se realizó la venta (por defecto se asigna la fecha actual)
  @Prop({ required: true, default: Date.now })
  date: Date;
}

export const SaleSchema = SchemaFactory.createForClass(Sale);
