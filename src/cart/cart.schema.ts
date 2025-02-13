// cart.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ _id: false })
export class CartItem {
  @Prop({ required: true })
  accessory: string;

  @Prop({ required: true })
  name_acc: string; 

  @Prop({ required: true })
  quantity: number;

  @Prop({ required: true })
  unit_price: number;

  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  total: number; // total = quantity * unit_price
}

export const CartItemSchema = SchemaFactory.createForClass(CartItem);

@Schema()
export class Cart extends Document {
  @Prop({ required: true })
  user: string; // ID del usuario

  @Prop({ type: [CartItemSchema], required: true, default: [] })
  items: CartItem[];

  // Total general del carrito (suma de los totales de cada item)
  @Prop({ required: true, default: 0 })
  total: number;
}

export const CartSchema = SchemaFactory.createForClass(Cart);
