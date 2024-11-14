let valor1, valor2

valor1 = parseInt(prompt("Digite o valor 1:"))
valor2 = parseInt(prompt("Digite o valor 2:"))

if (valor1 > valor2){
    document.write(`O número maior é o ${valor1}`)
} else{
    document.write(`O número maior é o ${valor2}`)
}