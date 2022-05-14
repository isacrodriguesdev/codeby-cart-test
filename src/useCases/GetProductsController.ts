import { ICardControllerAdapter } from "@/services/ICardControllerAdapter";

export class GetProductsController {

  constructor(
    private readonly cardControllerAdapter: ICardControllerAdapter
  ) { }

  async execute() {
    const products = await this.cardControllerAdapter.getProducts()
    console.log(products)
    return products
  }
}