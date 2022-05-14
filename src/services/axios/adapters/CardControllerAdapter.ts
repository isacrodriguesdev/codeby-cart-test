import axios from "axios";
import { Product } from "@/models/Product";
import { ICardControllerAdapter } from "@/services/ICardControllerAdapter";

export class CardControllerAdapter implements ICardControllerAdapter {

  async getLowProducts(): Promise<Product[]> {
    const response = await axios.get(
      "https://raw.githubusercontent.com/isacrodriguesdev/codeby-cart-test/main/__database/low_products.json"
    )
    return response.data.map((product: any) => {
      return new Product(product)
    })
  }

  async getHighProducts(): Promise<Product[]> {
    const response = await axios.get(
      "https://raw.githubusercontent.com/isacrodriguesdev/codeby-cart-test/main/__database/high_products.json"
    )
    return response.data.map((product: any) => {
      return new Product(product)
    })
  }

}
