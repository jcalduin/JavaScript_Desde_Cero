// 1. Escribe un comentario en una línea

//esto es un comentario en una línea

// 2. Escribe un comentario en varias líneas

/*Esto es
uncomentario en varias
lineas */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let variableTexto = "esto es un String"
let variableNumero = 2024
let soyUnNovato = true
let soyUnPro = false
let noSeQueSoy = undefined
let soyNulo = null
let valorSimbolico = Symbol("hola")
let winLotto = BigInt(600500400200300100)  

// 4. Imprime por consola el valor de todas las variables

console.log(variableTexto)
console.log(variableNumero)
console.log(soyUnNovato)
console.log(soyUnPro)
console.log(noSeQueSoy)
console.log(soyNulo)
console.log(valorSimbolico)
console.log(winLotto)

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof variableTexto)
console.log(typeof variableNumero)
console.log(typeof soyUnNovato)
console.log(typeof soyUnPro)
console.log(typeof noSeQueSoy)
console.log(typeof soyNulo)
console.log(typeof valorSimbolico)
console.log(typeof winLotto)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

variableTexto = "que tal chavales ¿todo bien?"
variableNumero = 13.09
soyUnNovato = false
soyUnPro = true
noSeQueSoy = undefined
soyNulo = null
valorSimbolico = Symbol("adios")
winLotto = BigInt(100200300400500600)

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

variableTexto = 546054684354083574864n
variableNumero = false
soyUnNovato = null
soyUnPro = Symbol("sigo sin ser pro")
noSeQueSoy = "era indefinido y ahora soy texto"
soyNulo = true
valorSimbolico = 1994
winLotto = undefined

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const constanteDeTexto = "me mantengo constante"
const constanteDeNumero = 17
const novatoConstante = true
const proConstante = false
const sigoSinSaberQueSoy = undefined
const nuloConstante = null
const constanteSimbolica = Symbol("la famiglia")
const numeroPi = BigInt(314159265358979)

// 9. A continuación, modifica los valores de las constantes
/*
const constanteDeTexto = "me mantengo constante2" //una constante no puede volver a renombrarse
const constanteDeNumero = 172  //una constante no puede volver a renombrarse
const novatoConstante = false  //una constante no puede volver a renombrarse
const proConstante = true   //una constante no puede volver a renombrarse
const sigoSinSaberQueSoy = "señore"   //una constante no puede volver a renombrarse
const nuloConstante = 87.3    //una constante no puede volver a renombrarse
const constanteSimbolica = Symbol("la famiglia2")   //una constante no puede volver a renombrarse
const numeroPi = "3.14159265358979xxx"  //una constante no puede volver a renombrarse
*/

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse