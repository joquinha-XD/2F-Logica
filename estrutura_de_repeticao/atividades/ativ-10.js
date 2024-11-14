let numA = 0, numP = 1, result

for (let i = 0; i < 8; i++) {
    document.write(`${numA} `)
    result = numA + numP
    numA = numP
    numP = result
}