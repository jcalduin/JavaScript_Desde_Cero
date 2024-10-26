// 1. Concatena dos cadenas de texto

let myName = "Javier"
let mySurname = "Cabrera Miranda"
let age = "29"
let presentation = (myName + " "+ mySurname + ", tengo "  + age  +  " años!" )
console.log(presentation)

// 2. Muestra la longitud de una cadena de texto

console.log(presentation.length)

// 3. Muestra el primer y último carácter de un string

console.log(presentation[0])
console.log(presentation[36])

// 4. Convierte a mayúsculas y minúsculas un string

console.log(presentation.toUpperCase())
console.log(presentation.toLowerCase())

// 5. Crea una cadena de texto en varias líneas

let email = `mi email es
cabreramiranda
javier@gmail
.com`
console.log(email)

// 6. Interpola el valor de una variable en un string

console.log(`hola, soy ${myName} ${email}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones

let course = "Estoy empezando a programar ahora desde cero"
let course1 = (course.replace(/ /g, "-"))
console.log(course1)

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(presentation.includes("Miranda"))

// 9. Comprueba si dos strings son iguales

console.log(course == presentation)

// 10. Comprueba si dos strings tienen la misma longitud

console.log(course.length == course1.length)