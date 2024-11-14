let salario, novosalario, anoatual, porcentagem

salario = Number(prompt("Digite o salário"))
anoatual = Number(prompt("Digite o ano atual"))

document.write(`<h3>Salário 2005: ${salario}</h3>`)

//processamento
percentual = 1.5/100
novosalario = salario + (percentual * salario)

document.write(`<h3>Salário 2006: ${novosalario.toFixed(2)}</h3>`)

for(let i = 2007; i <= anoatual; i++){
    percentual = percentual * 2
    novosalario = novosalario + (percentual*novosalario)
    document.write(`<h3>Salário ${i}: ${novosalario.toFixed(2)}</h3>`)
}

document.write(`<h3 class="sfinal">Salário final: ${novosalario.toFixed(2)}</h3>`)