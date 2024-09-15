import _ from 'lodash'

const data = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 24 },
  { name: 'Jim', age: 24 },
]

const result = _.groupBy(data, item => item.age)

console.log(result)
