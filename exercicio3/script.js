function soma(a,b){
    return a+b
}

function sub(a,b){
    return a-b
}

function mult(a,b){
    return a*b
}

function div(a,b){
    return a/b
}


const numA=Number(prompt("Insira um número"))
const numB=Number(prompt("Insira outro número"))


const resSoma=soma(numA,numB)
const resSub=sub(numA,numB)
const resMult=mult(numA,numB)
const resDiv=div(numA,numB)



console.log(`${numA}+${numB}=${resSoma}
${numA}-${numB}=${resSub}
${numA}*${numB}=${resMult}
${numA}/${numB}=${resDiv}`)

