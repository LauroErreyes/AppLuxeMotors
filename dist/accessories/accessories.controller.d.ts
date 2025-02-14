import { AccessoriesService } from './accessories.service';
import { Accessory } from './accessory.schema';
import { CreateAccessoryDto } from './dto/create-accessory.dto';
export declare class AccessoriesController {
    private readonly accessoriesService;
    constructor(accessoriesService: AccessoriesService);
    create(createAccessoryDto: CreateAccessoryDto): Promise<Accessory>;
    findAll(): Promise<Accessory[]>;
    getCompatibleAccessories(carId: string): Promise<Accessory[]>;
    findOne(id: string): Promise<Accessory>;
    update(id: string, createAccessoryDto: CreateAccessoryDto): Promise<Accessory>;
    remove(id: string): Promise<void>;
}
