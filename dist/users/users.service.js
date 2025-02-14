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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const bcrypt = require("bcrypt");
const crypto_1 = require("crypto");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("./user.schema");
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async create(createUserDto) {
        const { password, email, ...rest } = createUserDto;
        const hashedPassword = await bcrypt.hash(password, 10);
        const verificationToken = (0, crypto_1.randomBytes)(32).toString('hex');
        const createdUser = new this.userModel({
            ...rest,
            email,
            password_hash: hashedPassword,
            isVerified: false,
            verificationToken,
        });
        await createdUser.save();
        const verificationUrl = `https://appluxemotors-production.up.railway.app/users/verify/${verificationToken}`;
        return {
            message: 'Usuario creado. El cliente debe enviar el correo de verificación.',
            verificationUrl,
        };
    }
    async verifyUser(token) {
        const user = await this.userModel.findOne({ verificationToken: token });
        if (!user) {
            return null;
        }
        user.isVerified = true;
        user.verificationToken = null;
        await user.save();
        return user;
    }
    async findAll() {
        return this.userModel.find().exec();
    }
    async findOne(id) {
        return this.userModel.findById(id).exec();
    }
    async update(id, createUserDto) {
        return this.userModel.findByIdAndUpdate(id, createUserDto, { new: true });
    }
    async remove(id) {
        await this.userModel.findByIdAndDelete(id);
    }
    async findOneByEmail(email) {
        return this.userModel.findOne({ email }).exec();
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsersService);
//# sourceMappingURL=users.service.js.map