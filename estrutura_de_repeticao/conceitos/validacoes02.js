let numero1, numero2
//isNaN --> verificar o que foi digitado (texto)

do{
    numero1 = parseInt(prompt("Digite o 1º número"))
    if((isNaN(numero1)) || (numero1 < 0)){
        alert("Número inválido, digite um número válido e maior que 0")
    }
} while((isNaN(numero1)) || (numero1 < 0));
do{
    numero2 = parseInt(prompt("Digite o 2º número"))
    if((isNaN(numero2)) || (numero2 < 0)){
        alert("Número inválido, digite um número válido e maior que 0")
    }
} while((isNaN(numero2)) || (numero2 < 0));
document.write(numero1 + numero2)