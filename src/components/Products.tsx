import { Product } from "@/models/Product"
import { GetProductsFactory } from "@/useCases/GetProductsFactory"
import { useEffect, useState } from "react"
import styles from "../styles/Home.module.css"

export default function Products() {

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
      <div className={styles.ContainerProduct}>
        {
          products.map(product => (
            <div>
              <p>{product.name}</p>
              <p>R${product.price / 100}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}