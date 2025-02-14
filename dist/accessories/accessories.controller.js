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
exports.AccessoriesController = void 0;
const common_1 = require("@nestjs/common");
const accessories_service_1 = require("./accessories.service");
const create_accessory_dto_1 = require("./dto/create-accessory.dto");
let AccessoriesController = class AccessoriesController {
    constructor(accessoriesService) {
        this.accessoriesService = accessoriesService;
    }
    create(createAccessoryDto) {
        return this.accessoriesService.create(createAccessoryDto);
    }
    findAll() {
        return this.accessoriesService.findAll();
    }
    getCompatibleAccessories(carId) {
        return this.accessoriesService.findByCompatibleCar(carId);
    }
    findOne(id) {
        return this.accessoriesService.findOne(id);
    }
    update(id, createAccessoryDto) {
        return this.accessoriesService.update(id, createAccessoryDto);
    }
    remove(id) {
        return this.accessoriesService.remove(id);
    }
};
exports.AccessoriesController = AccessoriesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_accessory_dto_1.CreateAccessoryDto]),
    __metadata("design:returntype", Promise)
], AccessoriesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AccessoriesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('compatible/:carId'),
    __param(0, (0, common_1.Param)('carId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AccessoriesController.prototype, "getCompatibleAccessories", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AccessoriesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_accessory_dto_1.CreateAccessoryDto]),
    __metadata("design:returntype", Promise)
], AccessoriesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AccessoriesController.prototype, "remove", null);
exports.AccessoriesController = AccessoriesController = __decorate([
    (0, common_1.Controller)('accessories'),
    __metadata("design:paramtypes", [accessories_service_1.AccessoriesService])
], AccessoriesController);
//# sourceMappingURL=accessories.controller.js.map