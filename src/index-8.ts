(() => {
  interface Login {
    email: string
    password: number
  }

  const login = (login: Login) => {
    console.log(`Email: ${login.email}, Password: ${login.password}`)
  }

  login({
    email: 'cristhianbacusoy@gmail.com',
    password: 123456
  })

  interface Product {
    title: string
    price: number
    stock: number
    size?: 's' | 'm' | 'l'
  }

  const products: Product[] = []
  products.push({
    title: 'Shirt',
    price: 100,
    stock: 10,
    size: 'm'
  })
})()
