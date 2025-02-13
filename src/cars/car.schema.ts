import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

class Color {
  @Prop({ required: true })
  name: string;

  @Prop()
  image: string;

  @Prop({ required: true })
  stock: number;
}

@Schema()
export class Car extends Document {
  @Prop({ required: true })
  brand: string;

  @Prop({ required: true })
  car_model: string;

  @Prop({ required: true })
  year: number;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  price: number;

  @Prop({ type: [Color], required: true })
  colors: Color[];

  @Prop([String])
  features: string[];
}

export const CarSchema = SchemaFactory.createForClass(Car);
