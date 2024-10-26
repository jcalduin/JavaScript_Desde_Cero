// Strings

//Concatenación

let myName = "Javier"
let greeting = "Hola, " + myName + "!"
console.log(greeting)
console.log(typeof greeting)

// Longitud
console.log(greeting.length) 

// Acceso a caracteres
console.log(greeting[0]) // Se empieza a contar desde cero, por eso el priemr caracter es "H"
console.log(greeting[12]) // Como empieza a contar desde cero el caracter 13 no existe y el 12 es en realidad el ultimo símbolo "!"

// Métodos comunes
console.log(greeting.toUpperCase()) //Convierte toda la cadena en mayúscula
console.log(greeting.toLowerCase()) //Convierte toda la cadena en minúsucla
console.log(greeting.indexOf("Javier")) //Muestra la posición en la empieza la palabra dada en este caso 6
console.log(greeting.indexOf("Hola"))
console.log(greeting.indexOf("Cabrera")) // Muestra un -1 porque la palabra no existe dentro de esa cadena
console.log(greeting.includes("Hola")) //Arroja true o false si la palabra esta incluida en nuestra cadena
console.log(greeting.includes("Javier"))
console.log(greeting.includes("Cabrera")) // Aqui da false porque no la incluye
console.log(greeting.slice(0, 10)) // Muestra los caracteres de la cadena que solicitamos "Hola, Javi" . 10 no incluido
console.log(greeting.replace("Javier", "Cabrera")) //Sustituye el caracter por otro

// Template literals (plantilla literales)  . Se usan las comillas invertidas

let message = `Hola, este     
es el curso 
de JavaScript
, bro` //He creado un string en varias ñineas usando comillas invertidaS

console.log(message)

let email = "cabreramirandajavier@gmail.com"

console.log(`Hola, ${myName} ! Tu email es ${email}.`)  // Manera de interpolar string sin usar + 