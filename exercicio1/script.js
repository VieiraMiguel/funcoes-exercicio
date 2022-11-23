/*function hello(nome){
    return console.log("Olá,", nome)
}

hello("Miguel")

function tabuada(numero){
    return console.log(`Tabuada de ${numero}:
    ${numero}x1  = ${numero*1}
    ${numero}x2  = ${numero*2}  
    ${numero}x3  = ${numero*3}
    ${numero}x4  = ${numero*4}
    ${numero}x5  = ${numero*5}
    ${numero}x6  = ${numero*6}
    ${numero}x7  = ${numero*7}
    ${numero}x8  = ${numero*8}
    ${numero}x9  = ${numero*9}
    ${numero}x10 = ${numero*10}`)
}

tabuada(5)
tabuada(7)
tabuada(9)*/

const hello=function(nome) {
    return `Olá ${nome}`
}

console.log(hello("Miguel"))


const tabuada=(numero)=>{
    return `Tabuada de ${numero}:
    ${numero}x1  = ${numero*1}
    ${numero}x2  = ${numero*2}  
    ${numero}x3  = ${numero*3}
    ${numero}x4  = ${numero*4}
    ${numero}x5  = ${numero*5}
    ${numero}x6  = ${numero*6}
    ${numero}x7  = ${numero*7}
    ${numero}x8  = ${numero*8}
    ${numero}x9  = ${numero*9}
    ${numero}x10 = ${numero*10}`
}

console.log(tabuada(5))
console.log(tabuada(6))
console.log(tabuada(8))