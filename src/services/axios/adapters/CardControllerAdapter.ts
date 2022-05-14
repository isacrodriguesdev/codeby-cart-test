import axios from "axios";
import { Product } from "@/models/Product";
import { ICardControllerAdapter } from "@/services/ICardControllerAdapter";

export class HttpControllerAdapter implements ICardControllerAdapter {

  getProducts(): Product[] {
    const products = axios.get("")
    return []
  }

}
