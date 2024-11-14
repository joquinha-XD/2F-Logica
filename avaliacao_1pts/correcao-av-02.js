//Variáveis contadoras, acumuladoras = iniciadas com o valor 0
//1º variavel++, variavel--
//2º variavel = variavel + acumular
let nomeConta, valorConta
let qtdConta = 0, valorTotal = 0
let i = 1;

while(i !== 0){

    do{
        nomeConta = prompt("Qual conta você irá pagar")
        if(nomeConta === ''){
            alert("A conta precisa de uma descrição, digite novamente")
        }
    } while (nomeConta === '');

    do {
        valorConta = parseInt(prompt(`Digite o valor da conta ${nomeConta}: `))
        if(valorConta === 0 || isNaN(valorConta)){
            alert("O valor da conta precisa ser números, digite novamente")
        }
    } while (valorConta === 0 || isNaN(valorConta));

    qtdConta++
    valorTotal = valorTotal + valorConta

    document.write(`<h4>${nomeConta} \t\t ------ \t\t ${valorConta}</h4>`)
    i = parseInt(prompt("Digite 1 para continuar cadastrando e 0 para sair"))
}
document.write(`<h3>QUantidade de contas: ${qtdConta} ------ ${valorTotal}</h3>`)