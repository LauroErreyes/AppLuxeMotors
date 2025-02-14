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
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const cart_schema_1 = require("./cart.schema");
const mongoose_2 = require("mongoose");
let CartService = class CartService {
    constructor(cartModel) {
        this.cartModel = cartModel;
    }
    async addItem(createCartDto) {
        const itemTotal = createCartDto.quantity * createCartDto.unit_price;
        let cart = await this.cartModel.findOne({ user: createCartDto.user });
        if (cart) {
            const index = cart.items.findIndex(item => item.accessory === createCartDto.accessory);
            if (index > -1) {
                cart.items[index].quantity += createCartDto.quantity;
                cart.items[index].total = cart.items[index].quantity * cart.items[index].unit_price;
            }
            else {
                cart.items.push({
                    accessory: createCartDto.accessory,
                    name_acc: createCartDto.name_acc,
                    quantity: createCartDto.quantity,
                    unit_price: createCartDto.unit_price,
                    image: createCartDto.image,
                    total: itemTotal
                });
            }
            cart.total = cart.items.reduce((sum, item) => sum + item.total, 0);
            return cart.save();
        }
        else {
            const newCart = new this.cartModel({
                user: createCartDto.user,
                items: [{
                        accessory: createCartDto.accessory,
                        name_acc: createCartDto.name_acc,
                        quantity: createCartDto.quantity,
                        unit_price: createCartDto.unit_price,
                        image: createCartDto.image,
                        total: itemTotal
                    }],
                total: itemTotal
            });
            return newCart.save();
        }
    }
    async findAll() {
        return this.cartModel.find().exec();
    }
    async findByUser(userId) {
        return this.cartModel.findOne({ user: userId }).exec();
    }
    async updateItem(user, accessory, updateCartDto) {
        const cart = await this.cartModel.findOne({ user });
        if (!cart) {
            throw new common_1.NotFoundException(`No se encontró carrito para el usuario ${user}`);
        }
        const index = cart.items.findIndex(item => item.accessory === accessory);
        if (index === -1) {
            throw new common_1.NotFoundException(`El item con accesorio ${accessory} no se encuentra en el carrito`);
        }
        cart.items[index].quantity = updateCartDto.quantity;
        cart.items[index].total = updateCartDto.quantity * cart.items[index].unit_price;
        cart.total = cart.items.reduce((sum, item) => sum + item.total, 0);
        return cart.save();
    }
    async removeItem(user, accessory) {
        const cart = await this.cartModel.findOne({ user });
        if (!cart) {
            throw new common_1.NotFoundException(`No se encontró carrito para el usuario ${user}`);
        }
        cart.items = cart.items.filter(item => item.accessory !== accessory);
        cart.total = cart.items.reduce((sum, item) => sum + item.total, 0);
        return cart.save();
    }
    async removeCart(user) {
        const result = await this.cartModel.deleteOne({ user }).exec();
        if (result.deletedCount === 0) {
            throw new common_1.NotFoundException(`No se encontró carrito para el usuario ${user}`);
        }
        return result;
    }
};
exports.CartService = CartService;
exports.CartService = CartService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(cart_schema_1.Cart.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CartService);
//# sourceMappingURL=cart.service.js.map