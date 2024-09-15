(() => {
  let userID: number | string

  userID = 10

  function greeting (id: string | number) {
    if (typeof id === 'string') id = parseInt(id)
    console.log(id)
  }

  greeting(10)
  greeting('10')
})()
