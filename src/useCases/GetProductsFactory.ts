import { CardControllerAdapter } from "@/services/axios/adapters/CardControllerAdapter";
import { GetProductsController } from "./GetProductsController";

export function GetProductsFactory() {

  const cardControllerAdapter = new CardControllerAdapter()

  return new GetProductsController(cardControllerAdapter)
}