let numero, soma = 0

numero = parseInt(prompt("Digite um número: "))

//Validação de dados
do {
    numero = parseInt(prompt("Digite um número: "))
    if(numero <= 0 || isNaN(numero)){
        alert("Digite um número inteiro e maior que 0")
    }
} while (numero <= 0 || isNaN(numero));
//Fim da validação de dados

for(let i = 1; i < numero; i++){
    if(numero % i === 0){
        soma = soma + i
    }
}

if(soma === numero){
    document.write(`O número ${numero} é perfeito`)
} else {
    document.write(`O número ${numero} não é perfeito`)
}