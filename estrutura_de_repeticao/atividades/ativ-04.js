let qtd, numero, fat

do {
    qtd = parseInt(prompt("Quantos números deseja descobrir o fatorial?"))
    if(qtd <= 0 || isNaN(qtd)){
        alert("Digite um número inteiro e maior que 0")
    }
} while (qtd <= 0 || isNaN(qtd));

for (let i = 1; i <= qtd; i++){
    do {
        numero = parseInt(prompt(`Digite o ${i}º número que você deseja saber o fatorial: `))
        if(numero <= 0 || isNaN(numero)){
            alert("Digite um número inteiro e maior que 0")
        }
    } while (numero <= 0 || isNaN(numero));
    
    fat = 1
    
    for(let y = 1; y <= numero; y++){
        fat = fat * y
    }
    
    document.write(`O fatorial de ${numero} é igual a ${fat}<br>`)
}