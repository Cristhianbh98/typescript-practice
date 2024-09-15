interface Product {
  id: string | number
  stock: number
  isNew: boolean
}

export const createProduct = (
  id: string | number,
  isNew: boolean = true,
  stock?: number
): Product => {
  return {
    id,
    isNew,
    stock: stock ?? 0
  }
}

const p1 = createProduct(1, false)

console.log(p1)
