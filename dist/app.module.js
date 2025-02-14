"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const dotenv = require("dotenv");
const accessories_module_1 = require("./accessories/accessories.module");
const auth_module_1 = require("./auth/auth.module");
const cars_module_1 = require("./cars/cars.module");
const users_module_1 = require("./users/users.module");
const sale_module_1 = require("./sale/sale.module");
const cart_module_1 = require("./cart/cart.module");
const sale_accesories_module_1 = require("./sale-accesories/sale-accesories.module");
dotenv.config();
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_module_1.AuthModule,
            accessories_module_1.AccessoriesModule,
            mongoose_1.MongooseModule.forRoot(process.env.MONGODB_URI),
            users_module_1.UsersModule,
            cars_module_1.CarsModule,
            accessories_module_1.AccessoriesModule,
            cars_module_1.CarsModule,
            sale_module_1.SaleModule,
            cart_module_1.CartModule,
            sale_accesories_module_1.SaleAccesoriesModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map