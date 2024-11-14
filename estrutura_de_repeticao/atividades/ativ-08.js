let codM = 001, codS = 002, codA = 003, codP = 004, codN = 005
let maceioV = 1250, salvadorV = 1500, aracajuV = 422, portoalegreV = 7049, natalV = 9250
let maceioA =  246, salvadorA = 1844, aracajuA = 186, portoalegreA = 13833, natalA = 7000
let maiorA = portoalegreA, menorA = aracajuA, mediaVeh, mediaA

document.write(`A cidade com maior número de acidentes é ${maiorA}. E a cidade com o menor número de acidentes é ${menorA}.<br>`)

mediaVeh = (maceioV + salvadorV + aracajuV + portoalegreV + natalV) / 5

document.write(`A média de veículos nas cinco cidades é de ${mediaVeh.toFixed(2)}`)

mediaA = (maceioA + salvadorA + aracajuA) / 3

document.write(`A média de acidentes nas cidades com número de veículos inferior a 2000 é de ${mediaA.toFixed(2)}`)