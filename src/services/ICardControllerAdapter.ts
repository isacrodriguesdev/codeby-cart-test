import { Product } from '@/models/Product';

export interface ICardControllerAdapter {
  getLowProducts(): Promise<Product[]>
  getHighProducts(): Promise<Product[]>
}
