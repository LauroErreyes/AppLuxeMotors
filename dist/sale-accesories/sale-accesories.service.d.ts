import { Sale_acc } from './sale-accesories.schema';
import { Model } from 'mongoose';
import { CreateSaleAccDto } from './dto/create-sale-acc.dto';
export declare class SaleAccesoriesService {
    private readonly saleModel;
    constructor(saleModel: Model<Sale_acc>);
    createSale(createSaleDto: CreateSaleAccDto): Promise<Sale_acc>;
    getAllSales(): Promise<Sale_acc[]>;
    getSalesByUser(userId: string): Promise<Sale_acc[]>;
}
