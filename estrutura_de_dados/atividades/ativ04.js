let v1 = [], v2 = []
v3 = []
let j = 0

for(let i = 0; i < 5; i++){
    v1[i] = Math.floor(Math.random() * 10)
    v2[i] = Math.floor(Math.random() * 10)
    v3[j] = v1[i]
    j++
    v3[j] = v2[i]
    j++
}

console.log(`Vetor 1: ${v1}`)
console.log(`Vetor 2: ${v2}`)
console.log(`Vetor 3: ${v3}`)