let numero

do {
    numero = parseInt(prompt("Digite um número"))
    if(isNaN(numero)){
        alert("Digite um número válido!")
    }
} while (isNaN(numero));

if(numero > 10){
    if((numero % 2 !== 0) && (numero % 3 !== 0) && (numero % 5 !== 0) && (numero % 7 !== 0)){
        document.write(`O número ${numero} é primo`)
    } else{
        document.write(`O número ${numero} não é primo`)
    }
} else {
    
}
