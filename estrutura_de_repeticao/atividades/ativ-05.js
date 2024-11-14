let id, numP, sexo, totalP = 0, totalS = 0, salario = 1412, maiorS, addS, totalH = 0, totalM = 0, i2 = 0, melhorF

for (let i = 1; i <= 15; i++) {
    id = Number(prompt("Digite o seu identificador:"))
    sexo = prompt("Qual é o seu sexo?")
    if (sexo == "masculino") {
        numP = parseInt(prompt("Quantos produtos você fabricou no mês?"))
        totalP = totalP + numP
        if (numP <= 20) {
            document.write(`O operário com identificador ${id} possui um salário de R$${salario} <br>`)
        } else if ((numP > 20) && (numP <= 30)) {
            numP = numP - 20
            addS = 3 * numP
            salario = salario + ((salario * addS) / 100)
            document.write(`O operário com identificador ${id} possui um salário de R$${salario} <br>`)
        } else if (numP > 30) {
            numP = numP - 30
            addS = 5 * numP
            salario = salario + ((salario * addS) / 100)
            document.write(`O operário com identificador ${id} possui um salário de R$${salario} <br>`)
        }
        totalH = totalH + numP
        
    } else if (sexo == "feminino"){
        numP = parseInt(prompt("Quantos produtos você fabricou no mês?"))
        totalP = totalP + numP
        if (numP <= 20) {
            document.write(`O operário com identificador ${id} possui um salário de R$${salario} <br>`)
        } else if ((numP > 20) && (numP <= 30)) {
            numP = numP - 20
            addS = 3 * numP
            salario = salario + ((salario * addS) / 100)
            document.write(`O operário com identificador ${id} possui um salário de R$${salario} <br>`)
        } else if (numP > 30) {
            numP = numP - 30
            addS = 5 * numP
            salario = salario + ((salario * addS) / 100)
            document.write(`O operário com identificador ${id} possui um salário de R$${salario} <br>`)
        }
        totalM = totalM + numP
    }
    
    totalS = totalS + salario
}

mediaH = (mediaH * 100) / totalP
mediaM = (mediaM * 100) / totalP

document.write(`O total da folha de pagamento da fábrica é de R$${totalS}<br>`)
document.write(`O número total de peças fabricadas no mês é de ${totalP}<br>`)
document.write(`Os homens fabricaram um total de ${totalH} peças, o que equivale a ${mediaH}% do total de peças fabricadas no mês.<br>`)
document.write(`As mulheres fabricaram um total de ${totalM} peças, o que equivale a ${mediaM}% do total de peças fabricadas no mês.<br>`)
document.write(`O maior salário do mês é de R$${maiorS}`)