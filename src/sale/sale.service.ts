import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Sale } from './sale.schema';
import { CreateSaleDto } from './dto/create-sale.dto'; 

@Injectable()
export class SaleService {
  constructor(@InjectModel(Sale.name) private saleModel: Model<Sale>) {}

  async create(createSaleDto: CreateSaleDto): Promise<Sale> {
    const createdSale = new this.saleModel(createSaleDto);
    return createdSale.save();
  }

  async findAll(): Promise<Sale[]> {
    return this.saleModel.find().exec();
  }

  async findOne(id: string): Promise<Sale> {
    return this.saleModel.findById(id).exec();
  }

  async update(id: string, updateSaleDto: CreateSaleDto): Promise<Sale> {
    return this.saleModel.findByIdAndUpdate(id, updateSaleDto, { new: true }).exec();
  }

  async remove(id: string): Promise<void> {
    await this.saleModel.findByIdAndDelete(id);
  }

  async findByStatus(status: string): Promise<Sale[]> {
    return this.saleModel.find({ estado: status }).exec();
  }
}