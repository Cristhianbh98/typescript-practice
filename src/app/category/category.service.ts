import { Category, CategoryDTO } from './category.model'
export const categories: Category[] = []

export const createCategory = (category: CategoryDTO): Category => {
  const newCategory: Category = {
    id: Math.random().toString(36).slice(2),
    createdAt: new Date(),
    updatedAt: new Date(),
    ...category
  }
  categories.push(newCategory)
  return newCategory
}
