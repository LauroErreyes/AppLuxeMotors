import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto'; 
import { Cart } from './cart.schema';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  // Endpoint para agregar (o actualizar) un item en el carrito
  @Post()
  async addItem(@Body() createCartDto: CreateCartDto): Promise<Cart> {
    return this.cartService.addItem(createCartDto);
  }


  @Get()
  async getAllCarts(): Promise<Cart[]> {
    return this.cartService.findAll();
  }

  // Obtener el carrito por ID de usuario
  @Get(':id')
  async getCartByUser(@Param('id') id: string): Promise<Cart | null> {
    return this.cartService.findByUser(id);
  }

  // Endpoint para actualizar la cantidad de un item en el carrito
  // Por ejemplo: PATCH /cart/:user/:accessory
  @Patch(':user/:accessory')
  async updateItem(
    @Param('user') user: string,
    @Param('accessory') accessory: string,
    @Body() updateCartDto: UpdateCartDto,
  ): Promise<Cart> {
    return this.cartService.updateItem(user, accessory, updateCartDto);
  }

  // Endpoint para eliminar un item específico del carrito
  // Por ejemplo: DELETE /cart/:user/:accessory
  @Delete(':user/:accessory')
  async removeItem(
    @Param('user') user: string,
    @Param('accessory') accessory: string,
  ): Promise<Cart> {
    return this.cartService.removeItem(user, accessory);
  }

  // Endpoint para eliminar todo el carrito de un usuario
  // Por ejemplo: DELETE /cart/:user
  @Delete(':user')
  async removeCart(@Param('user') user: string): Promise<any> {
    return this.cartService.removeCart(user);
  }
}
