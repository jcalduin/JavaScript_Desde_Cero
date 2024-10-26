// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let myName = "Javier"
if (myName == "Javier") {
    console.log("Tu nombre es Javier")
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let user = "jcalduin"
let password = 123456
if (user === "jcalduin" && password === 123456) {
    console.log("El usuario y contraseña coinciden")
} else {
    console.log("El usuario o contraseña no coincide")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let number = -5
if (number > 0){
    console.log("El número es positivo")
} else if (number === 0) {
    console.log("El número es igual a cero")
} else {
    console.log("El número es negativo")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let voto = 10

if (voto >= 18){
    console.log("Puedes votar")
} else {
    let noVoto = 18 - voto
    console.log("No puedes votar, te faltan " + noVoto + " años")
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

let edad = 25
const answer = edad >= 18 ? "Eres un adulto" : "Eres menor"
console.log(answer)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = "Marzo"

if (mes == "Enero" || mes== "Febrero" || mes == "Marzo") {
    console.log("Estamos en invierno")
} else if (mes == "Abril" || mes == "Mayo" || mes == "Junio") {
    console.log("Estamos en primavera")
} else if (mes == "Julio" || mes == "Agosto" || mes == "Septiembre") {
    console.log("Estamos en verano")
} else if (mes == "Octubre" || mes == "Noviembre" || mes == "Diciembre") {
    console.log("Estamos en Otoño ")
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

if (mes == "Enero" || mes == "Marzo" || mes == "Mayo" || mes == "Julio" || mes == "Agosto" || mes == "Octubre" || mes == "Diciembre") {
    console.log(mes + " tiene 31 días")
} else if (mes == "Abril" || mes == "Junio" || mes == "Septiembre" || mes == "Noviembre") {
    console.log(mes + " tiene 30 días")
} else if (mes == "Febrero") {
    console.log(mes + " tiene 28 o 29 días")
} else {
    console.log("Esto no es un mes")
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idioma = "English"
let saludo

switch (idioma) {
    case "Spanish" :
        saludo = "Hola, ¿qué tal?" 
        break
    case "English" :
        saludo = "Hello, how are you?"
        break
    case "French" :
        saludo = "Bonjour, ça va?"
        break
    case "Português" :
        saludo = "Oi, como vai?"
        break
    case "Italian" :
        saludo = "Ciao, come stai?"
        break
    default :
        saludo = "No contemplo ese idioma"              
}

console.log(saludo)


// 9. Usa un switch para hacer de nuevo el ejercicio 6

let mesS = "amarillo"
let respuesta

switch (mesS) {
    case "enero" :
    case "febrero" :
    case "marzo" :
        respuesta = "invierno" 
            break
    case "abril" :
    case "mayo" :
    case "junio" :
        respuesta = "primavera" 
        break
    case "julio" :
    case "agosto" :
    case "septiembre" :
        respuesta = "verano" 
        break
    case "octubre" : 
    case "noviembre" : 
    case "diciembre" :
        respuesta = "otoño" 
        break
    default :
        respuesta = "esto no es un mes"           
}
  
console.log(respuesta)

// 10. Usa un switch para hacer de nuevo el ejercicio 7

switch (mesS) {
    case "enero" :
    case "marzo" :
    case "mayo" :
    case "julio" :
    case "agosto" :
    case "octubre" :
    case "diciembre" :
        respuesta = (mesS + " tiene 31 días") 
        break
    case "abril" :
    case "junio" :
    case "septiembre" :
    case "noviembre" :
        respuesta = (mesS + " tiene 30 días")
        break
    case "febrero" :
        respuesta = (mesS + " tiene 28 o 29 días")
        break
    default :
        respuesta = "esto no es un mes"           
}
  
console.log(respuesta)