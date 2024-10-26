// 1. Crea una variable para cada operación aritmética

let a = 10
let b = 5
let suma = a + b
let resta = a - b
let multiplicación = a * b
let división = a / b
let modulo = a % b
let exponente = a ** b
let incremento = a++
let decremento = b--

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

let c = 8

let suma1 = c
suma1 += c 

let resta1 = c
resta1 -= c

let multiplicación1 = c
multiplicación1 *= c

let división1 = c
división1 /= c

let modulo1 = c
modulo1 %= c

let exponente1 = c
exponente1 **= c

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación

console.log(a > c)
console.log(c >= b)
console.log(suma == "15")
console.log(suma1 === 16)
console.log(multiplicación <= exponente)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(0 == true)
console.log(decremento != "5")
console.log(a < c)
console.log(división === "2")
console.log(a == "a")

// 5. Utiliza el operador lógico and

8 > b && suma > suma1

// 6. Utiliza el operador lógico or

20 > 50 || multiplicación <= exponente

// 7. Combina ambos operadores lógicos

0 == false && 17 >= "17" || modulo < modulo1

// 8. Añade alguna negación

!(a > c)

// 9. Utiliza el operador ternario

const fútbol = true
fútbol ? console.log("Barça campeon") : console.log("Madrid el peor")

// 10. Combina operadores aritméticos, de comparáción y lógicas

5 * 3 && suma >= 15