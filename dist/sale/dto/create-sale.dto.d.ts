export declare class CreateSaleDto {
    readonly usuarioID: string;
    readonly vehiculo: {
        id: string;
        brand: string;
        modelo: string;
        precioBase: number;
        imagenSeleccionada: string;
    };
    readonly metodoPago: 'financiado' | 'contado';
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
    readonly totalContado?: number;
    readonly accesorios: {
        name: string;
        image: string;
        price: number;
    }[];
    readonly totalAccesorios: number;
    readonly formaPago: 'tarjeta' | 'efectivo';
    readonly datosTarjeta?: {
        numero: string;
        nombre: string;
        expiracion: string;
        cvv: string;
    };
    readonly datosEfectivo?: {
        lugarPago: 'agencia';
    };
    readonly fechaVenta: Date;
}
