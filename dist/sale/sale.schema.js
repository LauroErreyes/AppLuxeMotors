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
exports.SaleSchema = exports.Sale = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
class Vehiculo {
}
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Vehiculo.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Vehiculo.prototype, "brand", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Vehiculo.prototype, "modelo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Vehiculo.prototype, "precioBase", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Vehiculo.prototype, "imagenSeleccionada", void 0);
class SelectedColor {
}
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], SelectedColor.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], SelectedColor.prototype, "image", void 0);
class Accessory {
}
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Accessory.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Accessory.prototype, "price", void 0);
class PaymentDetails {
}
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: ['tarjeta', 'efectivo'] }),
    __metadata("design:type", String)
], PaymentDetails.prototype, "method", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PaymentDetails.prototype, "cardNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PaymentDetails.prototype, "cardHolder", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PaymentDetails.prototype, "expiry", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], PaymentDetails.prototype, "isAgencyPayment", void 0);
class FinancingDetails {
}
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], FinancingDetails.prototype, "cuotas", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], FinancingDetails.prototype, "entradaPorcentaje", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], FinancingDetails.prototype, "entradaMonto", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], FinancingDetails.prototype, "cuotaMensual", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], FinancingDetails.prototype, "seguroMensual", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], FinancingDetails.prototype, "totalMensual", void 0);
let Sale = class Sale extends mongoose_2.Document {
};
exports.Sale = Sale;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Sale.prototype, "usuarioID", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Vehiculo, required: true }),
    __metadata("design:type", Vehiculo)
], Sale.prototype, "vehiculo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: SelectedColor, required: true }),
    __metadata("design:type", SelectedColor)
], Sale.prototype, "selectedColor", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [Accessory], required: true }),
    __metadata("design:type", Array)
], Sale.prototype, "accessories", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Sale.prototype, "totalAccesorios", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: PaymentDetails, required: true }),
    __metadata("design:type", PaymentDetails)
], Sale.prototype, "paymentDetails", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: FinancingDetails }),
    __metadata("design:type", FinancingDetails)
], Sale.prototype, "financingDetails", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Sale.prototype, "totalContado", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 'pendiente' }),
    __metadata("design:type", String)
], Sale.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: Date.now }),
    __metadata("design:type", Date)
], Sale.prototype, "date", void 0);
exports.Sale = Sale = __decorate([
    (0, mongoose_1.Schema)()
], Sale);
exports.SaleSchema = mongoose_1.SchemaFactory.createForClass(Sale);
//# sourceMappingURL=sale.schema.js.map