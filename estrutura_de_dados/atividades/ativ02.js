let acumuladora = 0,
vetor = [];

for(let i = 0; i < 5; i++){
    vetor[i] = Math.floor(Math.random() * 10)
    acumuladora = acumuladora + vetor[i]
}

console.log(vetor + "<br>")
console.log(`A soma desses números é: ${acumuladora}`)