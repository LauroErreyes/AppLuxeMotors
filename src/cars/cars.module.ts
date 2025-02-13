import { MongooseModule } from '@nestjs/mongoose';
import { CarsService } from './cars.service';
import { Module } from '@nestjs/common';
import { Car, CarSchema } from './car.schema';
import { CarsController } from './cars.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Car.name, schema: CarSchema }])],
  controllers: [CarsController],
  providers: [CarsService]
})
export class CarsModule {}
