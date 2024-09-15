import ProductList from "./product.service";
import { Product } from "./product.model";

const products = new ProductList()

const product1: Product = {
  title: 'Shirt',
  price: 15,
  stock: 10,
  size: 'M'
}

products.addProduct(product1)

const product2: Product = {
  title: 'Pants',
  price: 25,
  stock: 5,
  size: 'L'
}

products.addProduct(product2)

console.log(products.calcStock())
