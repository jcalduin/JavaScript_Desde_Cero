// Operadores

// Operadores Áritmeticos

let a = 5
let b = 10

console.log(a + b) // Suma
console.log(a - b)// Resta
console.log(a * b)// Multiplicación
console.log(a / b)// División

console.log(a % b)// Módulo (el resto de la división)
console.log(a ** b)// Exponente (potencias ejemplo 2^3)

a++ // Incremento (aumenta en 1 la variable dada)
console.log(a)

b-- //Decremento (disminuye en 1  la variable dada)
console.log(b)

//Operadores de asignación

let myVariable = 2
console.log(myVariable)
myVariable += 2 //coge la variable y lo suma sobre si mismo
console.log(myVariable)

myVariable -= 2 
myVariable *= 2 
myVariable /= 2
myVariable %= 2
myVariable **= 2

// Operadores de comparación (nos sirven para comparar variables y el resultado de esa comparación nos arroja un boolean)

console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == b)
console.log(a == 6) //Igualdad por valor *es igual a 6 porque en la línea 16 incrementamos el valor de a
console.log(a == "6") //Igualdad por valor (JavaScript es capaz de distinguir el valor entre cadena de texto y númericos, por eso arroja true)
console.log(a == a)
console.log(a === a) //Igualdad por identidad (por tipo y valor)
console.log(a === 6)
console.log(a === "6") //Arroja false porque es igual en valor pero no en identidad, ya que es un string
console.log(a != 6) //!= comparador de desigualdad, a es diferente de 6, arroja false porque a=6 (no se cumple la desigualdad)
console.log(a !== "6") //Arroja true porque a es diferente de 6
console.log(0 == false) // peculiaridad para JS 0 es false
console.log(1 == false) //para JS el resto de números es true
console.log(2 == false)
console.log(0 == "")
console.log(0 == " ")
console.log(0 == '')
console.log(0 == "Hola")
console.log(0 === "")
console.log(undefined == null)
console.log(undefined === null)

// Truthy values (valores verdaderos) por sistema (siempre arrojan true)

// Todos los números positivos y negativos menos el cero
// Todasd las cadenas de texto menos las vacías
// El boolean true

//Falsy values (valores falsos) por sistema siempre arrojan false

//0
//0n
//null
//undefined
//NaN
// El boolean false
// Cadenas de texto vacías

// Operadores lógicos

// and(&&)
console.log(5 > 10 && 15 > 20) //arroja false por ambas condiciones son falsas (false)
console.log(5 < 10 && 15 < 20) //arroja true porque anbas condiciones sons verdaeras
console.log(5 < 10 && 15 > 20) //arroja false porque una de las condiciones no se cumplem
console.log(5 > 10 && 15 > 20 && 30 > 40) 

// or (||) si se cumple mínimo una de las concidiones el computo global será verdadero (true)
console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20)
console.log(5 > 10 || 15 > 20 || 30 > 40)

console.log(5 > 10 && 15 > 20 || 30 < 40)

// not (!) negación
console.log(!true) //arroja false porque niego que es true
console.log(!false) // arroja true porque niego que es false
console.log(!(5 > 10 && 15 > 20))
console.log(!(5 > 10 || 15 > 20))

// Operadores ternarios (? :)

const isRaining = true
//compara las dos condiciones. Si esta lloviendo imprime "esta lloviendo" porque le hemos dado el valor true a la variable
isRaining ? console.log("Esta lloviendo") : console.log("No esta lloviendo")