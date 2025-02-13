// create-sale.dto.ts
import {
    IsArray,
    IsDate,
    IsEnum,
    IsMongoId,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    ValidateNested,
  } from 'class-validator';
  import { Type } from 'class-transformer';
  
  enum FormaPago {
    Tarjeta = 'tarjeta',
    Efectivo = 'efectivo',
  }
  
  class DatosTarjetaDto {
    @IsString()
    @IsNotEmpty()
    numero: string;
  
    @IsString()
    @IsNotEmpty()
    nombre: string;
  
    @IsString()
    @IsNotEmpty()
    expiracion: string;
  
    @IsString()
    @IsNotEmpty()
    cvv: string;
  }
  
  class DatosEfectivoDto {
    @IsString()
    @IsNotEmpty()
    lugarPago: string; // Se espera 'agencia'
  }
  
  class SaleItemDto {
    @IsMongoId()
    @IsNotEmpty()
    accessory: string;
  
    @IsString()
    @IsNotEmpty()
    name: string;
  
    @IsNumber()
    @IsNotEmpty()
    quantity: number;
  
    @IsNumber()
    @IsNotEmpty()
    unit_price: number;
  
    @IsNumber()
    @IsNotEmpty()
    total_item: number;
  }
  
  export class CreateSaleAccDto {
    @IsMongoId()
    @IsNotEmpty()
    user: string;
  
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => SaleItemDto)
    items: SaleItemDto[];
  
    @IsNumber()
    @IsNotEmpty()
    totalAccesorios: number;
  
    // La fecha de compra se establece en el servidor, pero se puede enviar opcionalmente
    @IsOptional()
    @IsDate()
    orderDate?: Date;
  
    @IsEnum(FormaPago)
    @IsNotEmpty()
    formaPago: FormaPago;
  
    @IsOptional()
    @ValidateNested()
    @Type(() => DatosTarjetaDto)
    datosTarjeta?: DatosTarjetaDto;
  
    @IsOptional()
    @ValidateNested()
    @Type(() => DatosEfectivoDto)
    datosEfectivo?: DatosEfectivoDto;
  }
  