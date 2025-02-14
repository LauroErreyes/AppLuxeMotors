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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleSchemaAcc = exports.Sale_acc = exports.SaleItem = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
class SaleItem {
}
exports.SaleItem = SaleItem;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], SaleItem.prototype, "accessory", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], SaleItem.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], SaleItem.prototype, "quantity", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], SaleItem.prototype, "unit_price", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], SaleItem.prototype, "total_item", void 0);
let Sale_acc = class Sale_acc extends mongoose_2.Document {
};
exports.Sale_acc = Sale_acc;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Sale_acc.prototype, "user", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [SaleItem], required: true }),
    __metadata("design:type", Array)
], Sale_acc.prototype, "items", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Sale_acc.prototype, "totalAccesorios", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: Date.now }),
    __metadata("design:type", Date)
], Sale_acc.prototype, "orderDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: ['tarjeta', 'efectivo'] }),
    __metadata("design:type", String)
], Sale_acc.prototype, "formaPago", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: { numero: String, nombre: String, expiracion: String, cvv: String } }),
    __metadata("design:type", Object)
], Sale_acc.prototype, "datosTarjeta", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: { lugarPago: String } }),
    __metadata("design:type", Object)
], Sale_acc.prototype, "datosEfectivo", void 0);
exports.Sale_acc = Sale_acc = __decorate([
    (0, mongoose_1.Schema)()
], Sale_acc);
exports.SaleSchemaAcc = mongoose_1.SchemaFactory.createForClass(Sale_acc);
//# sourceMappingURL=sale-accesories.schema.js.map