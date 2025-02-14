import { Document } from 'mongoose';
export declare class Accessory extends Document {
    name: string;
    description: string;
    price: number;
    stock: number;
    compatible_cars: string[];
    image: string[];
}
export declare const AccessorySchema: import("mongoose").Schema<Accessory, import("mongoose").Model<Accessory, any, any, any, Document<unknown, any, Accessory> & Accessory & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Accessory, Document<unknown, {}, import("mongoose").FlatRecord<Accessory>> & import("mongoose").FlatRecord<Accessory> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
