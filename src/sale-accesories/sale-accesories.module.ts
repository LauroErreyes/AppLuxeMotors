import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SaleAccesoriesService } from './sale-accesories.service'; 
import { CreateSaleAccDto } from './dto/create-sale-acc.dto'; 
import { Sale_acc } from './sale-accesories.schema'; 
import { SaleSchemaAcc } from './sale-accesories.schema';
import { SaleAccesoriesController } from './sale-accesories.controller';

@Module({
    imports: [
      MongooseModule.forFeature([{ name: Sale_acc.name, schema: SaleSchemaAcc }]),
    ],
    providers: [SaleAccesoriesService],
    controllers: [SaleAccesoriesController],
    exports: [SaleAccesoriesService],
  })
export class SaleAccesoriesModule {}
