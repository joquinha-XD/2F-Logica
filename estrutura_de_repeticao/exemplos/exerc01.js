let numero, tabuada;

numero = Number(prompt("Digite um numero:"))

for(let i = 1; i<11; i++){
    tabuada = numero * i
    document.write(`${numero} x ${i} = ${tabuada} <br>`)
}