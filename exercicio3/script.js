const a = 5 > 20 && 5 < 2
const b = 5 === 5 || 5 === "5"
const c = !(20 > 50)
let d = !(20 > 50 || 50 > 60)

console.log(a) //imprime false - 5 é menor que 20 e maior que 2
console.log(b) //imprime true - um ou outro
console.log(c) //imprime true - nega que 20 é maior que 50
console.log(d) //imprime true - nega que 20 é maior que 50 ou que 50 é maior que 60
