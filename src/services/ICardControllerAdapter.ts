import { Product } from '@/models/Product';

export interface ICardControllerAdapter {
  getProducts(): Product[];
}
