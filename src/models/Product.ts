export class Product {
  id: number;
  public imageUrl: string;
  public price: number;
  public name: string;

  constructor(product: Product) {
    this.id = product.id
    this.imageUrl = product.imageUrl
    this.name = product.name
    this.price = product.price
   }
}
