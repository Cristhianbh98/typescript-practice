import { BaseModel } from '../shared/base.model'

export type Size = 'S' | 'M' | 'L' | 'XL' | 'XXL'

export interface Product extends BaseModel {
  name: string
  price: number
  description: string
  stock: number
  size?: Size
}
