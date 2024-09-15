(() => {
  const calcTotal = (prices: number[]): number => {
    return prices.reduce((total, price) => total + price)
  }

  const total = calcTotal([100, 200, 300])

  const printTotal = (prices: number[]): void => {
    const total = calcTotal(prices)
    console.log(`El total es ${total}`)
  }

  printTotal([100, 200, 300])
})()
