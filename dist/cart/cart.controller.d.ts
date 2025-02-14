import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Cart } from './cart.schema';
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    addItem(createCartDto: CreateCartDto): Promise<Cart>;
    getAllCarts(): Promise<Cart[]>;
    getCartByUser(id: string): Promise<Cart | null>;
    updateItem(user: string, accessory: string, updateCartDto: UpdateCartDto): Promise<Cart>;
    removeItem(user: string, accessory: string): Promise<Cart>;
    removeCart(user: string): Promise<any>;
}
