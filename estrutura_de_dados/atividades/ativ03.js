let v = []; v2 = []

for(let i = 0; i < 10; i++){
    v[i] = Math.floor(Math.random() * 10)
    v2[i] = v[i] * 5
}
console.log("Vetor digitado: "+v)
console.log("Vetor resultante: "+v2)