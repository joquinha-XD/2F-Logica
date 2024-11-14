let qtdChinchilas, anosFazenda
let totalChinchilas = 0

do {
    qtdChinchilas = parseInt(prompt("Digite a quantidade de Chinchilas"))
    if(isNaN(qtdChinchilas) || qtdChinchilas < 2){
        alert("O número de Chinchilas deve ser maior ou igual a 2")
    }
} while (isNaN(qtdChinchilas) || qtdChinchilas < 2);

do {
    anosFazenda = parseInt(prompt("Digite por quantos anos você irá criar Chinchilas"))
    if(isNaN(anosFazenda) || anosFazenda < 1){
        alert("Tempo de criação inválido")
    }
} while (isNaN(anosFazenda) || anosFazenda < 1);

totalChinchilas = qtdChinchilas
for(let i = 1; i <= anosFazenda; i++){
    document.write("<br>"+totalChinchilas)
    totalChinchilas *= 3
}

document.write(`<br> Ao final de ${anosFazenda} você terá o total de ${totalChinchilas} Chinchilas`)