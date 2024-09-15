(function () {
  type Size = 'sm' | 'md' | 'lg'

  function createProductToJson (
    title: string,
    createAt: Date,
    stock: number,
    size: Size
  ) {
    return {
      title,
      createAt,
      stock,
      size
    }
  }

  const product = createProductToJson('Shirt', new Date(), 100, 'md')
  console.log(product.createAt.getTime())

  const createProductToJsonV2 = (
    title: string,
    createAt: Date,
    stock: number,
    size?: Size
  ) => ({
    title,
    createAt,
    stock,
    size
  })

  const productv2 = createProductToJsonV2('Shirt', new Date(), 100)
  console.log(productv2.size)
})()
