import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
import { AccessoriesModule } from './accessories/accessories.module';
import { AuthModule } from './auth/auth.module';
import { CarsModule } from './cars/cars.module'; // Asegúrate de tener el módulo de cars
import { UsersModule } from './users/users.module';
import { SaleModule } from './sale/sale.module';
import { CartModule } from './cart/cart.module';
import { SaleAccesoriesModule } from './sale-accesories/sale-accesories.module';

dotenv.config(); // Asegúrate de que dotenv está configurado correctamente

@Module({
  imports: [
    AuthModule,
    AccessoriesModule,
    MongooseModule.forRoot(process.env.MONGODB_URI),
    UsersModule,
    CarsModule,
    AccessoriesModule,
    CarsModule,
    SaleModule,
    CartModule,
    SaleAccesoriesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
