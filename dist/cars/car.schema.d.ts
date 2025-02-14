import { Document } from 'mongoose';
declare class Color {
    name: string;
    image: string;
    stock: number;
}
export declare class Car extends Document {
    brand: string;
    car_model: string;
    year: number;
    type: string;
    price: number;
    colors: Color[];
    features: string[];
}
export declare const CarSchema: import("mongoose").Schema<Car, import("mongoose").Model<Car, any, any, any, Document<unknown, any, Car> & Car & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Car, Document<unknown, {}, import("mongoose").FlatRecord<Car>> & import("mongoose").FlatRecord<Car> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
export {};
