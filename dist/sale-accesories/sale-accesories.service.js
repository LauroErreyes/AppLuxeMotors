"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleAccesoriesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const sale_accesories_schema_1 = require("./sale-accesories.schema");
const mongoose_2 = require("mongoose");
let SaleAccesoriesService = class SaleAccesoriesService {
    constructor(saleModel) {
        this.saleModel = saleModel;
    }
    async createSale(createSaleDto) {
        if (!createSaleDto.orderDate) {
            createSaleDto.orderDate = new Date();
        }
        const sale = new this.saleModel(createSaleDto);
        return sale.save();
    }
    async getAllSales() {
        return this.saleModel.find().exec();
    }
    async getSalesByUser(userId) {
        const sales = await this.saleModel.find({ user: userId }).exec();
        if (!sales || sales.length === 0) {
            throw new common_1.NotFoundException(`No se encontraron ventas para el usuario ${userId}`);
        }
        return sales;
    }
};
exports.SaleAccesoriesService = SaleAccesoriesService;
exports.SaleAccesoriesService = SaleAccesoriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(sale_accesories_schema_1.Sale_acc.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SaleAccesoriesService);
//# sourceMappingURL=sale-accesories.service.js.map