import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cart } from './cart.schema';
import { Model } from 'mongoose';
import { CreateCartDto } from './dto/create-cart.dto'; 
import { UpdateCartDto } from './dto/update-cart.dto'; 

@Injectable()
export class CartService {
  constructor(@InjectModel(Cart.name) private readonly cartModel: Model<Cart>) {}

  // Agrega un item al carrito (o lo actualiza si ya existe)
  async addItem(createCartDto: CreateCartDto): Promise<Cart> {
    // Calculamos el total del item
    const itemTotal = createCartDto.quantity * createCartDto.unit_price;
    
    // Buscamos si el usuario ya tiene un carrito
    let cart = await this.cartModel.findOne({ user: createCartDto.user });
    
    if (cart) {
      // Buscamos si el item (accesorio) ya está en el carrito
      const index = cart.items.findIndex(item => item.accessory === createCartDto.accessory);
      if (index > -1) {
        // Si el item existe, actualizamos la cantidad sumándole la nueva cantidad
        cart.items[index].quantity += createCartDto.quantity;
        cart.items[index].total = cart.items[index].quantity * cart.items[index].unit_price;
      } else {
        // Si no existe, lo agregamos
        cart.items.push({
          accessory: createCartDto.accessory,
          name_acc: createCartDto.name_acc,
          quantity: createCartDto.quantity,
          unit_price: createCartDto.unit_price,
          image: createCartDto.image,
          total: itemTotal
        });
      }
      // Recalculamos el total del carrito
      cart.total = cart.items.reduce((sum, item) => sum + item.total, 0);
      return cart.save();
    } else {
      // Si no existe el carrito, lo creamos con el item inicial
      const newCart = new this.cartModel({
        user: createCartDto.user,
        items: [{
          accessory: createCartDto.accessory,
          name_acc: createCartDto.name_acc,
          quantity: createCartDto.quantity,
          unit_price: createCartDto.unit_price,
          image: createCartDto.image,
          total: itemTotal
        }],
        total: itemTotal
      });
      return newCart.save();
    }
  }
  // Obtener todos los carritos
  async findAll(): Promise<Cart[]> {
    return this.cartModel.find().exec();
  }

  // Obtener un carrito por ID de usuario
  async findByUser(userId: string): Promise<Cart | null> {
    return this.cartModel.findOne({ user: userId }).exec();
  }
  // Actualiza la cantidad de un item en el carrito
  async updateItem(user: string, accessory: string, updateCartDto: UpdateCartDto): Promise<Cart> {
    const cart = await this.cartModel.findOne({ user });
    if (!cart) {
      throw new NotFoundException(`No se encontró carrito para el usuario ${user}`);
    }
    const index = cart.items.findIndex(item => item.accessory === accessory);
    if (index === -1) {
      throw new NotFoundException(`El item con accesorio ${accessory} no se encuentra en el carrito`);
    }
    // Actualizamos la cantidad y el total del item
    cart.items[index].quantity = updateCartDto.quantity;
    cart.items[index].total = updateCartDto.quantity * cart.items[index].unit_price;
    // Recalculamos el total del carrito
    cart.total = cart.items.reduce((sum, item) => sum + item.total, 0);
    return cart.save();
  }

  // Elimina un item específico del carrito de un usuario
  async removeItem(user: string, accessory: string): Promise<Cart> {
    const cart = await this.cartModel.findOne({ user });
    if (!cart) {
      throw new NotFoundException(`No se encontró carrito para el usuario ${user}`);
    }
    // Filtramos para eliminar el item
    cart.items = cart.items.filter(item => item.accessory !== accessory);
    // Recalculamos el total del carrito
    cart.total = cart.items.reduce((sum, item) => sum + item.total, 0);
    return cart.save();
  }

  // Elimina todo el carrito de un usuario
  async removeCart(user: string): Promise<any> {
    const result = await this.cartModel.deleteOne({ user }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException(`No se encontró carrito para el usuario ${user}`);
    }
    return result;
  }
}
