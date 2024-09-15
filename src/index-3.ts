// Array
(() => {
  const prices = [100, 200, 300, '400']

  prices.map(item => {
    if (typeof item === 'number') {
      return item * 2
    } else {
      return parseInt(item) * 2
    }
  })

  const what: any = 'hello'

  console.log((what as string).toUpperCase())
})()
