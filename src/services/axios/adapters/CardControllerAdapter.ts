import { Product } from '@/models/Product';
import { ICardControllerAdapter } from '@/services/ICardControllerAdapter';
import axios from 'axios';

export class HttpControllerAdapter implements ICardControllerAdapter {
  getProducts(): Product[] {
    return [new Product()];
  }
}
