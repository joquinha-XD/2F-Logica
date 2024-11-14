let num, numF, i

alert("Inicianto execução do programa!")
num = parseInt(prompt("Digite um número:"))

while(num != 0){
    if(num % 2 == 0){
        numF = num * 2
        document.write(`Esse número é par, portanto, o dobro dele é igual a ${numF}<br>`)
    } else {
        numF = num * 3
        document.write(`Esse número é ímpar, portanto, o triplo dele é igual a ${numF}<br>`)
    }
    num = parseInt(prompt("Digite um número:"))
}