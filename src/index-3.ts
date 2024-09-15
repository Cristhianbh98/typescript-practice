// Array
(() => {
  let prices = [100, 200, 300, "400"]

  prices.map(item => {
    if (typeof item === "number") {
      return item * 2
    } else {
      return parseInt(item) * 2
    }
  })

  let what: any = "hello"

  console.log((<string>what).toUpperCase())

})()