export class Product {
  id: number;
  public imageUrl: string;
  public price: number;
  public name: string;

  constructor(public readonly product: Product) { }
}
