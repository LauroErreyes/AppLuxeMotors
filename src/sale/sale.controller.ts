// sales.controller.ts (NestJS)
import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { SaleService } from './sale.service'; 

@Controller('sales')
export class SaleController {
  constructor(private readonly salesService: SaleService) {}

  @Post()
  create(@Body() createSaleDto: any) {
    return this.salesService.create(createSaleDto);
  }

  @Get()
  findAll() {
    return this.salesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateSaleDto: any) {
    return this.salesService.update(id, updateSaleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.salesService.remove(id);
  }

  @Get('status/:status')
  findByStatus(@Param('status') status: string) {
    return this.salesService.findByStatus(status);
  }
}