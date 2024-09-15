export enum ROLES {
  ADMIN = 'admin',
  USER = 'user',
  SELLER = 'seller',
  CUSTOMER = 'custumer'
}

export interface User {
  name: string
  role: ROLES
}

const cristhian: User = {
  name: 'Cristhian',
  role: ROLES.ADMIN
}

console.log(cristhian)
