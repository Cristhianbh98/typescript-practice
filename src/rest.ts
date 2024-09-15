import { User, ROLES } from './enum'

const currentUser: User = {
  name: 'Cristhian',
  role: ROLES.CUSTOMER
}

export const checkAdminRole = (): boolean => {
  if (currentUser.role === ROLES.ADMIN) {
    return true
  }

  return false
}

export const checkRole = (...roles: ROLES[]): boolean => {
  if (roles.includes(currentUser.role)) {
    return true
  }
  return false
}

console.log(checkAdminRole())
