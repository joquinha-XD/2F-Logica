let numero, i = 1

do{
    numero = parseInt(prompt("Digite um número"))
    if((isNaN(numero)) || (numero < 2)){
        alert("Digite um número válido e acima de 2!")
    }
} while((isNaN(numero)) || (numero < 2));

while(i !== numero){
    i++
    if(i%2 == 0){
        document.write(`${i}<br>`)
    }
}