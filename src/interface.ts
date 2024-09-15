import { User, ROLES } from './enum'

export interface SuperUser extends User {
  superPower: boolean
}

const superUser: SuperUser = {
  name: 'Cristhian',
  role: ROLES.ADMIN,
  superPower: true
}

console.log(superUser)
