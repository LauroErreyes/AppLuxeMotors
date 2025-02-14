import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.schema';
import { UsersService } from './users.service';
import { Response } from 'express';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<User[]>;
    create(createUserDto: CreateUserDto): Promise<{
        message: string;
        verificationUrl: string;
    }>;
    findOne(id: string): Promise<User>;
    verifyUser(token: string, res: Response): Promise<void>;
    update(id: string, createUserDto: CreateUserDto): Promise<User>;
    remove(id: string): Promise<void>;
    findOneEmail(email: string): Promise<User>;
}
