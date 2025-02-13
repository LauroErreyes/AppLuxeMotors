import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SaleAccesoriesService } from './sale-accesories.service';
import { CreateSaleAccDto } from './dto/create-sale-acc.dto';
import { Sale_acc } from './sale-accesories.schema';

@Controller('sale-accesories')
export class SaleAccesoriesController {

    constructor(private readonly saleService: SaleAccesoriesService) {}
    // POST /sales : Crea una nueva venta
    @Post()
    async createSale(@Body() createSaleDto: CreateSaleAccDto): Promise<Sale_acc> {
        return this.saleService.createSale(createSaleDto);
    }

    // GET /sales : Obtiene todas las ventas (opcional)
    @Get()
    async getAllSales(): Promise<Sale_acc[]> {
        return this.saleService.getAllSales();
    }

    // GET /sales/user/:userId : Obtiene las ventas de un usuario en particular
    @Get('user/:userId')
    async getSalesByUser(@Param('userId') userId: string): Promise<Sale_acc[]> {
        return this.saleService.getSalesByUser(userId);
    }

}


