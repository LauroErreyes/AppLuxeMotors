import { SaleAccesoriesService } from './sale-accesories.service';
import { CreateSaleAccDto } from './dto/create-sale-acc.dto';
import { Sale_acc } from './sale-accesories.schema';
export declare class SaleAccesoriesController {
    private readonly saleService;
    constructor(saleService: SaleAccesoriesService);
    createSale(createSaleDto: CreateSaleAccDto): Promise<Sale_acc>;
    getAllSales(): Promise<Sale_acc[]>;
    getSalesByUser(userId: string): Promise<Sale_acc[]>;
}
