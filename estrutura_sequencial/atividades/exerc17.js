let cotacao = 5.47, dolar, conversao

dolar = parseFloat(prompt("Qual o valor em dólar você deseja converter para real?"))

conversao = dolar * cotacao

document.write(`U$${dolar} convertido para real equivale a R$${conversao.toFixed(2)}`)