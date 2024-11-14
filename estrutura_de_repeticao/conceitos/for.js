let tabuada, numero = Number(prompt("Digite um número:"))

for(let i = 1; i <= 10; i++){
    tabuada = numero * i
    document.write(`${numero} x ${i} = ${tabuada} <br>`)
}