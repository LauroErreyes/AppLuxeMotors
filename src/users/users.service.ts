import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { randomBytes } from 'crypto';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<{ message: string; verificationUrl: string }> {
    const { password, email, ...rest } = createUserDto;
    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationToken = randomBytes(32).toString('hex');

    const createdUser = new this.userModel({
      ...rest,
      email,
      password_hash: hashedPassword,
      isVerified: false,
      verificationToken,
    });

    await createdUser.save();

    const verificationUrl = `http://localhost:3000/users/verify/${verificationToken}`;

    return {
      message: 'Usuario creado. El cliente debe enviar el correo de verificación.',
      verificationUrl, // El cliente usará esta URL para enviar el correo.
    };
  }

  async verifyUser(token: string): Promise<User | null> {
    const user = await this.userModel.findOne({ verificationToken: token });

    if (!user) {
      return null;
    }

    user.isVerified = true;
    user.verificationToken = null;
    await user.save();

    return user;
  }
  
  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  async update(id: string, createUserDto: CreateUserDto): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, createUserDto, { new: true });
  }

  async remove(id: string): Promise<void> {
    await this.userModel.findByIdAndDelete(id);
  }

  async findOneByEmail(email: string): Promise<User | undefined> {
    return this.userModel.findOne({ email }).exec();
  }
}
