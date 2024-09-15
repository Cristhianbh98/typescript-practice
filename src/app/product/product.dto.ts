import { Product } from './product.model'

export interface CreateProductDTO extends Omit<Product, 'id' | 'createdAt' | 'updatedAt'> {
  categoryId: string
}

export interface UpdateProductDTO extends Partial<CreateProductDTO> {}
