import { IsMongoId, IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateCartDto {
  @IsString()
  @IsNotEmpty()
  user: string;

  @IsString()
  @IsNotEmpty()
  accessory: string; 

  @IsString()
  @IsNotEmpty()
  name_acc: string; 

  @IsNumber()
  @Min(1)
  quantity: number;

  @IsNumber()
  @Min(0)
  unit_price: number;

  @IsString()
  @IsNotEmpty()
  image: string;
}
