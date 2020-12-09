import { Icategory } from '../comun/category';
import { IColor } from '../comun/color';
import { ISize } from '../comun/size';

export interface IProduct {
  id?: string;
  title?: string;
  brand_name?: string;
  model_name?: string;
  price?: number;
  stock?: number;
  sizes?: ISize[];
  colors?: IColor[];
  discount?: number;
  category?: Icategory;
  description?: string;
  image?: string;
  active?: string;
  quantity?: number;
}

export interface IOrder {
  name: string;
  email: string;
  phone: string;
  saler: string;
  body: string;
  products: IProduct[];
  quantity: number;
  totalCost: number;
}
