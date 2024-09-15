let what: unknown

what = true
what = '10'

let isNew: boolean = false

if (typeof what === 'boolean') {
  isNew = what
}
console.log(isNew)
