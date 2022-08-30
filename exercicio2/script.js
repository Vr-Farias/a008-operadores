const num1 = prompt("Insira um número")
const num2 = prompt("Insira outro número")

let maior = num1 >= num2 //escolhi 25
let igual = num1 == num2 //escolhi 15

console.log("O valor é maior?", maior) //true
console.log("O valor é igual?", igual) //false
console.log(`É divisível o primeiro número pelo segundo? ${num1 % num2===0}`) //false
console.log(`É divisível o segundo número pelo primeiro? ${num2 % num1===0}`) //false

