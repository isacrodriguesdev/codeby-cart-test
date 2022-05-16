import { Product } from "@/models/Product"
import { GetProductsFactory } from "@/useCases/GetProductsFactory"
import { useEffect, useState } from "react"
import styles from "../styles/Home.module.css"

export function ShoppingCart() {

  const getProductsController = GetProductsFactory()

  const [products, setProducts] = useState<Product[]>([] as Product[])

  useEffect(() => {
    getProducts()
  }, [])

  async function getProducts() {
    const products = await getProductsController.execute()
    setProducts(products)
  }

  return (
    <div className="container">
      <div className={styles.ContainerShoppingCart}>
        <div>
          <p>Meu carrinho</p>
        </div>
        {
          products.map(product => (
            <div className={styles.ProductItem}>
              <div>
                <img src={product.imageUrl} height={200} />
              </div>
              <div>
                <p>{product.name}</p>
                <p>R${product.price / 100}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}