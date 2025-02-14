import { Model } from 'mongoose';
import { Accessory } from './accessory.schema';
import { CreateAccessoryDto } from './dto/create-accessory.dto';
export declare class AccessoriesService {
    private accessoryModel;
    constructor(accessoryModel: Model<Accessory>);
    create(createAccessoryDto: CreateAccessoryDto): Promise<Accessory>;
    findAll(): Promise<Accessory[]>;
    findOne(id: string): Promise<Accessory>;
    findByCompatibleCar(carId: string): Promise<Accessory[]>;
    update(id: string, createAccessoryDto: CreateAccessoryDto): Promise<Accessory>;
    remove(id: string): Promise<void>;
}
