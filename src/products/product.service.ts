import { Product } from "./product.model";

class ProductList {
  private products: Product[] = []

  addProduct(product: Product) {
    this.products.push(product)
  }

  calcStock(): number {
    return this.products.reduce((acc, product) => acc + product.stock, 0)
  }
}

export default ProductList
