import { Document } from 'mongoose';
export declare class User extends Document {
    email: string;
    password_hash: string;
    role: string;
    first_name: string;
    last_name: string;
    address: string;
    phone: string;
    foto: string;
    isVerified: boolean;
    verificationToken: string;
}
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any, Document<unknown, any, User> & User & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User, Document<unknown, {}, import("mongoose").FlatRecord<User>> & import("mongoose").FlatRecord<User> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
