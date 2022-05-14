import axios from "axios";
import { Product } from "@/models/Product";
import { ICardControllerAdapter } from "@/services/ICardControllerAdapter";

export class CardControllerAdapter implements ICardControllerAdapter {

  async getProducts(): Promise<Product[]> {
    const response = await axios.get(
      "https://raw.githubusercontent.com/isacrodriguesdev/codeby-cart-test/main/__database/products.json"
    )

    return response.data.items.map((product: any) => {
      return new Product(product)
    })
  }
}
