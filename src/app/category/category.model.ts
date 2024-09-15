import { BaseModel } from '../shared/base.model'

export interface Category extends BaseModel {
  name: string
  description: string
}

export interface CategoryDTO extends Omit<Category, 'id' | 'createdAt' | 'updatedAt'> {}
