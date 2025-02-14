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
exports.SaleService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const sale_schema_1 = require("./sale.schema");
let SaleService = class SaleService {
    constructor(saleModel) {
        this.saleModel = saleModel;
    }
    async create(createSaleDto) {
        const createdSale = new this.saleModel(createSaleDto);
        return createdSale.save();
    }
    async findAll() {
        return this.saleModel.find().exec();
    }
    async findOne(id) {
        return this.saleModel.findById(id).exec();
    }
    async update(id, updateSaleDto) {
        return this.saleModel.findByIdAndUpdate(id, updateSaleDto, { new: true }).exec();
    }
    async remove(id) {
        await this.saleModel.findByIdAndDelete(id);
    }
    async findByStatus(status) {
        return this.saleModel.find({ estado: status }).exec();
    }
};
exports.SaleService = SaleService;
exports.SaleService = SaleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(sale_schema_1.Sale.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SaleService);
//# sourceMappingURL=sale.service.js.map