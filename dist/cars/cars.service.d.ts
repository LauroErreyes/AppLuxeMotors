import { Model } from 'mongoose';
import { Car } from './car.schema';
import { CreateCarDto } from './dto/create-car.dto';
export declare class CarsService {
    private carModel;
    constructor(carModel: Model<Car>);
    create(createCarDto: CreateCarDto): Promise<Car>;
    findAll(): Promise<Car[]>;
    findOne(id: string): Promise<Car>;
    update(id: string, createCarDto: CreateCarDto): Promise<Car>;
    remove(id: string): Promise<void>;
}
