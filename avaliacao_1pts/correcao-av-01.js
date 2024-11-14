/*let numero = 1

    1º Maneira
while(numero != 0){
   alert("Entrou no laço")
   numero = parseInt(prompt("Digite 0 para sair"))
}

    2º Maneira - continue - break
for(let i = 0; i < 10; i++){
    if(i === 5 || i === 8){
        continue
    }

    if(i === 6){
        break
    }
    console.log("i: "+i)
}*/

let numero;

do {
    numero = parseInt(prompt("Digite um número"))
      debugger
    if(numero === 0 || isNaN(numero)){
        //confirmar a saída
        let sair = prompt("Confirmar saída")
        if(sair){
            break;
        } else{
            continue;
        }
    }
    
    //continuar a lógica: par(dobro) e ímpar(triplo)
    if(numero % 2 === 0){
        alert(`O dobro do número ${numero} é: ${numero * 2}`)
    } else{
        alert(`O triplo do número ${numero} é: ${numero * 3}`)
    }
} while (true);