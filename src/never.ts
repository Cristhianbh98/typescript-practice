const withoutEnd = (): never => {
  while (true) {
    console.log('I will never end')
  }
}

const fail = (message: string): never => {
  throw new Error(message)
}
