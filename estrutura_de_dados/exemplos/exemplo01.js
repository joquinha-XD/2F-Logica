let tempAnual = []
let mediaTemp, acumuladora = 0

//1º - Armazenar dados na estrutura de dados -> ARRAY (VETOR)
for(let i = 0; i < 12; i++){
    tempAnual[i] = Number(prompt("Digite a temperatura do mês"))
}

//2º - Mostrar/processar as informações de forma individual
for(let i = 0; i < tempAnual.length; i++){
    acumuladora = acumuladora + tempAnual[i]
}


// mediaTemp = acumuladora / 12
mediaTemp = acumuladora /tempAnual.length
console.log(mediaTemp)
document.write(`<p> Temperatura: ${tempAnual}</p><br>`)