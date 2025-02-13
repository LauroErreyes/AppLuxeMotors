// src/ventas/dto/create-venta.dto.ts
export class CreateSaleDto {
  readonly usuarioID: string;
  readonly vehiculo: {
    id: string;
    brand: string;
    modelo: string;
    precioBase: number;
    imagenSeleccionada: string;
  };

  readonly metodoPago: 'financiado' | 'contado';

  // Sólo se envía si el método de pago es financiado
  readonly detallesFinanciamiento?: {
    cuotas: number;
    entrada: {
      porcentaje: number;
      monto: number;
    };
    cuotaMensual: number;
    seguroMensual: number;
    totalMensual: number;
  };

  // Sólo se envía si el método de pago es contado
  readonly totalContado?: number;

  readonly accesorios: {
    name: string;
    image: string;
    price: number;
  }[];

  readonly totalAccesorios: number;

  readonly formaPago: 'tarjeta' | 'efectivo';

  // Sólo se envía si formaPago es 'tarjeta'
  readonly datosTarjeta?: {
    numero: string;
    nombre: string;
    expiracion: string;
    cvv: string;
  };

  // Para pagos en efectivo, solo se utilizará 'agencia'
  readonly datosEfectivo?: {
    lugarPago: 'agencia';
  };

  readonly fechaVenta: Date;
}
