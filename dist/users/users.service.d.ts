import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.schema';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<User>);
    create(createUserDto: CreateUserDto): Promise<{
        message: string;
        verificationUrl: string;
    }>;
    verifyUser(token: string): Promise<User | null>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    update(id: string, createUserDto: CreateUserDto): Promise<User>;
    remove(id: string): Promise<void>;
    findOneByEmail(email: string): Promise<User | undefined>;
}
