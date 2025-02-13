import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Sale_acc } from './sale-accesories.schema';
import { Model } from 'mongoose';
import { CreateSaleAccDto } from './dto/create-sale-acc.dto';

@Injectable()
export class SaleAccesoriesService {

    constructor(
        @InjectModel(Sale_acc.name) private readonly saleModel: Model<Sale_acc>,
      ) {}
    
      // Crea una nueva venta
      async createSale(createSaleDto: CreateSaleAccDto): Promise<Sale_acc> {
        // Si no se envía orderDate, se asigna la fecha actual (aunque el esquema ya tiene default)
        if (!createSaleDto.orderDate) {
          createSaleDto.orderDate = new Date();
        }
        const sale = new this.saleModel(createSaleDto);
        return sale.save();
      }
    
      // Obtiene todas las ventas (opcional)
      async getAllSales(): Promise<Sale_acc[]> {
        return this.saleModel.find().exec();
      }
    
      // Obtiene las ventas realizadas por un usuario específico
      async getSalesByUser(userId: string): Promise<Sale_acc[]> {
        const sales = await this.saleModel.find({ user: userId }).exec();
        if (!sales || sales.length === 0) {
          throw new NotFoundException(`No se encontraron ventas para el usuario ${userId}`);
        }
        return sales;
      }
}
