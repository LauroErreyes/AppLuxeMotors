import { Cart } from './cart.schema';
import { Model } from 'mongoose';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
export declare class CartService {
    private readonly cartModel;
    constructor(cartModel: Model<Cart>);
    addItem(createCartDto: CreateCartDto): Promise<Cart>;
    findAll(): Promise<Cart[]>;
    findByUser(userId: string): Promise<Cart | null>;
    updateItem(user: string, accessory: string, updateCartDto: UpdateCartDto): Promise<Cart>;
    removeItem(user: string, accessory: string): Promise<Cart>;
    removeCart(user: string): Promise<any>;
}
