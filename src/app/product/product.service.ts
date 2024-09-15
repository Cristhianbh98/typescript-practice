import { Product } from '../product/product.model'
import { CreateProductDTO, UpdateProductDTO } from './product.dto'

export const products: Product[] = []

export const createProduct = (product: CreateProductDTO): Product => {
  const newProduct: Product = {
    id: Math.random().toString(36).slice(2),
    createdAt: new Date(),
    updatedAt: new Date(),
    ...product
  }
  products.push(newProduct)
  return newProduct
}

export const updateProduct = (id: string, product: UpdateProductDTO): void => {
  const index = products.findIndex(p => p.id === id)
  if (index === -1) {
    throw new Error('Product not found')
  }
  products[index] = {
    ...products[index],
    ...product,
    updatedAt: new Date()
  }
}

export const findProduct = (id: string): Product | undefined => {
  return products.find(p => p.id === id)
}
