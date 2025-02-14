import { SaleService } from './sale.service';
export declare class SaleController {
    private readonly salesService;
    constructor(salesService: SaleService);
    create(createSaleDto: any): Promise<import("./sale.schema").Sale>;
    findAll(): Promise<import("./sale.schema").Sale[]>;
    findOne(id: string): Promise<import("./sale.schema").Sale>;
    update(id: string, updateSaleDto: any): Promise<import("./sale.schema").Sale>;
    remove(id: string): Promise<void>;
    findByStatus(status: string): Promise<import("./sale.schema").Sale[]>;
}
