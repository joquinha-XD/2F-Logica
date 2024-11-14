let modelo, preco, entrada, saldo

modelo = prompt("Qual é o modelo do carro?")
preco = parseFloat(prompt(`Qual é o preço do ${modelo}`))

entrada = preco * 0.5
saldo = preco - entrada
saldo = saldo / 12

document.write(`Ao pagar uma entrada de R$${entrada}, você pagará 12 parcelas de R$${saldo.toFixed(2)}`)