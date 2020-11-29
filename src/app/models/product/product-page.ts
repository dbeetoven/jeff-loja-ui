import { IProduct } from './product';

export interface IproductPage {
  loading: boolean;
  products: IProduct[];
  formStatus: string;
}
