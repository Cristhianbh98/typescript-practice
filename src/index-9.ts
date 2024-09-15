import { subDays, format } from 'date-fns'

const date = new Date(19998, 7, 8)
const rta = subDays(date, 2)

const str = format(rta, 'yyyy-MM-dd')

console.log(str)

