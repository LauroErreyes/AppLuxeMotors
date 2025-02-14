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
exports.AccessoriesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const accessory_schema_1 = require("./accessory.schema");
let AccessoriesService = class AccessoriesService {
    constructor(accessoryModel) {
        this.accessoryModel = accessoryModel;
    }
    async create(createAccessoryDto) {
        const createdAccessory = new this.accessoryModel(createAccessoryDto);
        return createdAccessory.save();
    }
    async findAll() {
        return this.accessoryModel.find().exec();
    }
    async findOne(id) {
        return this.accessoryModel.findById(id).exec();
    }
    async findByCompatibleCar(carId) {
        return this.accessoryModel.find({ compatible_cars: carId }).exec();
    }
    async update(id, createAccessoryDto) {
        return this.accessoryModel.findByIdAndUpdate(id, createAccessoryDto, {
            new: true,
        });
    }
    async remove(id) {
        await this.accessoryModel.findByIdAndDelete(id);
    }
};
exports.AccessoriesService = AccessoriesService;
exports.AccessoriesService = AccessoriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(accessory_schema_1.Accessory.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AccessoriesService);
//# sourceMappingURL=accessories.service.js.map