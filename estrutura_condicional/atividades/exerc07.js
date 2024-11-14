let lado1, lado2, lado3

lado1 = parseInt(prompt("Digite o lado 1 do triângulo:"))
lado2 = parseInt(prompt("Digite o lado 2 do triângulo:"))
lado3 = parseInt(prompt("Digite o lado 3 do triângulo:"))

if(((lado1+lado2) > lado3) && ((lado2+lado3) > lado1) && ((lado1+lado3) > lado2)){
    document.write(`O triângulo de lados ${lado1}, ${lado2} e ${lado3} é válido!`)
} else {
    document.write(`O triângulo de lados ${lado1}, ${lado2} e ${lado3} é inválido!`)
}