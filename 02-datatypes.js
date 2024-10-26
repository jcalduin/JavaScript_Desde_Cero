//Tipos de datos primitivos

// Cadenas de texto (string)
let myName = "Javi Cabrera"
let alias =  "darlin"
let email = "cabreramirandajavier@gmail.com"

// Números (number)
let age = 37  // Entero
let height = 1.71 // Decimal

// Booleanos (boolean) datos que son siempre verdadero o falso
let isStudent = true
let isTeacher = false

//Undefined son variables declaradas pero que aun no le hemos dado valor, pero puede tenerlo mas adelante (no tienen aun un valor concreto)
let undefinedValue
console.log(undefinedValue)

//Null cuando queremos indicar que tiene un valor nulo, pero si tiene un valor
let nullValue = null

//Symbol intenta representar valores únicos, que pueden ser utilizados como identificadores de propiedades

let mySymbol = Symbol("mysymbol")

//BigInt

let myBigInt = BigInt(543254354736543054354)
let myBigInt2 = 543254354736543054354n

//Mostramos los tipos de datos
console.log(typeof myName)
console.log(typeof alias)
console.log(typeof email)

console.log(typeof age)
console.log(typeof height)

console.log(typeof isTeacher)
console.log(typeof isStudent)

console.log(typeof undefinedValue)

console.log(typeof nullValue)

console.log(typeof mySymbol)

console.log(typeof myBigInt)
console.log(typeof myBigInt2)