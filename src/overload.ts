// Nico => [N,i,c,o] => string => string[]
// [N,i,c,o] => string[] => string
function parseStr (input: string): string[]
function parseStr (input: string[]): string
function parseStr (input: number): boolean
/* function parseStr (input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join('')
  } else {
    return input.split('')
  }
} */
function parseStr (input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join('')
  } else if (typeof input === 'string') {
    return input.split('')
  } else if (typeof input === 'number') {
    return true
  }
}

console.log('N,i,c,o', parseStr('Nico'))
console.log('Nico', parseStr(['N', 'i', 'c', 'o']))
console.log(true, parseStr(1))
