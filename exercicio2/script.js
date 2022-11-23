
//a)
function soma(a,b){
    return `${a+b}`
}

console.log(soma(3,5))

//b)
function maiorOuIgual(a,b){
    return `O primeiro número é maior ou igual ao segundo? ${a>=b}`
}

console.log(maiorOuIgual(10,11))

//c)
function numPar(numero){
    return `O número é par? ${numero%2==0}`
}

console.log(numPar(6))

//d)
function salDescontado(salario){
    salario=Number(prompt("Insira o salário"))
    return `O salário de ${salario} com desconto vai para ${salario-salario*0.1}`
}

console.log(salDescontado())