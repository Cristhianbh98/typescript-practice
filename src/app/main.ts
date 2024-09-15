import { createProduct, updateProduct, findProduct } from './product/product.service'
import { createCategory } from './category/category.service'

const category = createCategory({
  name: 'Clothing',
  description: 'A category of clothing'
})

const newProduct = createProduct({
  name: 'Shirt',
  description: 'A shirt',
  price: 10.22,
  stock: 100,
  size: 'XL',
  categoryId: category.id
})

updateProduct(newProduct.id, {
  description: 'A new shirt',
  stock: 200
})

const product = findProduct(newProduct.id)

console.log('product', product)
