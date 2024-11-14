let n, 
numeros = [];

n = Number(prompt("Digite a quantidade de números"))

for (let i = 0; i < n; i++) {
    numeros[i] = Number(prompt("Digite um número"))
}
// 0:4, 1:5, 2:6, 3:7
for(let i = numeros.length - 1; i >= 0; i--){
    document.write(`${numeros[i]}\t`)
}