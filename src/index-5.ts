(() => {
  type UserID = string | number

  let userID: UserID

  userID = 10

  // Literal Types
  type ShirtSize = "sm" | "md" | "lg"

  let shirtSize: ShirtSize
  shirtSize = "sm"
  shirtSize = "md"
  shirtSize = "lg"

  function greeting(id: UserID, size: ShirtSize) {
    if (typeof id === "string") id = parseInt(id)
    console.log(id)
  }

  greeting(10, 'sm')
  greeting("10", 'lg')
})()