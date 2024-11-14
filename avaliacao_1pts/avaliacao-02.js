let contas, contadora = 0, valorF = 0, valor

do{
    contas = prompt("Qual conta você irá pagar?")
    if((contas != "Nenhuma") && (contas != "nenhuma") && (contas != "Nada") && (contas != "nada") && contas != ""){
        valor = Number(prompt(`Qual o valor da conta de ${contas}?`))
        valorF = valorF + valor
        contadora = contadora + 1
    }
} while((contas != "Nenhuma") && (contas != "nenhuma") && (contas != "Nada") && (contas != "nada") && contas != "");

document.write(`Você tem o total de ${contadora} contas para pagar no valor total de R$ ${valorF}`)