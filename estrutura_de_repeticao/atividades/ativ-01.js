/*let numero, contadora = 0

do {
    numero = parseInt(prompt("Digite um número: "))
    if(numero <= 0 || isNaN(numero)){
        alert("Digite um número inteiro e maior que 0")
    }
} while (numero <= 0 || isNaN(numero));

for (let i = numero; i != 0; i--){
    if(numero % i == 0){
        contadora++
    }
}
if(contadora == 2){
    document.write(`O número ${numero} é primo`)
} else {
    document.write(`O número ${numero} não é primo`)
}*/
let numero, cont = 0

//Validação de dados
do {
    numero = parseInt(prompt("Digite um número: "))
    if(numero <= 0 || isNaN(numero)){
        alert("Digite um número inteiro e maior que 0")
    }
} while (numero <= 0 || isNaN(numero));
//Fim da validação de dados

for(let i = 1; i <= numero; i++){
    if(numero % i === 0){
        cont++
    }
}

if (cont == 2) {
    document.write(`O número ${numero} é primo`)
} else {
    document.write(`O número ${numero} não é primo`)
}