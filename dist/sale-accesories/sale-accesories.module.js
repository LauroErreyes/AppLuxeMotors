"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleAccesoriesModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const sale_accesories_service_1 = require("./sale-accesories.service");
const sale_accesories_schema_1 = require("./sale-accesories.schema");
const sale_accesories_schema_2 = require("./sale-accesories.schema");
const sale_accesories_controller_1 = require("./sale-accesories.controller");
let SaleAccesoriesModule = class SaleAccesoriesModule {
};
exports.SaleAccesoriesModule = SaleAccesoriesModule;
exports.SaleAccesoriesModule = SaleAccesoriesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: sale_accesories_schema_1.Sale_acc.name, schema: sale_accesories_schema_2.SaleSchemaAcc }]),
        ],
        providers: [sale_accesories_service_1.SaleAccesoriesService],
        controllers: [sale_accesories_controller_1.SaleAccesoriesController],
        exports: [sale_accesories_service_1.SaleAccesoriesService],
    })
], SaleAccesoriesModule);
//# sourceMappingURL=sale-accesories.module.js.map