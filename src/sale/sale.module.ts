import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { SaleController } from './sale.controller';
import { SaleService } from './sale.service';
import { Sale, SaleSchema } from './sale.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Sale.name, schema: SaleSchema }])],
  controllers: [SaleController],
  providers: [SaleService]
})
export class SaleModule {}