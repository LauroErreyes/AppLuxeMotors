import { Model } from 'mongoose';
import { Sale } from './sale.schema';
import { CreateSaleDto } from './dto/create-sale.dto';
export declare class SaleService {
    private saleModel;
    constructor(saleModel: Model<Sale>);
    create(createSaleDto: CreateSaleDto): Promise<Sale>;
    findAll(): Promise<Sale[]>;
    findOne(id: string): Promise<Sale>;
    update(id: string, updateSaleDto: CreateSaleDto): Promise<Sale>;
    remove(id: string): Promise<void>;
    findByStatus(status: string): Promise<Sale[]>;
}
