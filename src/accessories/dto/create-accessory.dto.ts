import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateAccessoryDto {
  @IsString()
  readonly name: string;

  @IsString()
  @IsOptional()
  readonly description: string;

  @IsNumber()
  readonly price: number;

  @IsNumber()
  readonly stock: number;

  @IsArray()
  readonly compatible_cars: string[]; // Una lista de IDs de vehículos compatibles

  @IsString()
  readonly image: string[]; //una lista de imagenes de accesorios
}
