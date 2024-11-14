let n = []; n2 = []

for(let i = 0; i < 8; i++){
    n[i] = Math.floor(Math.random() * 10)
    n2[i] = n[i] * (-1)
}

console.log(n + "<br>")
console.log(n2 + "<br>")