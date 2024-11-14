/** FUNÇÕES */

//1º --> Função que não recebe parâmetros/argumentos e não tem retorno
function soma1() {
    let numero1, numero2, soma;

    numero1 = 5
    numero2 = 5
    soma = numero1 + numero2
    console.log(`${soma}`)
}
console.log("---------------- Função sem param e sem retorno --------------")
soma1() //Retorma a soma
console.log("somando ->",soma1() + 5) //NaN

//2º Função que recebe parâmetros/argumentos e não tem retorno
function soma2(parametro1, parametro2) {
    let soma
    soma = parametro1 + parametro2
    console.log(soma)
}
console.log("---------------- Função com param e sem retorno --------------")
soma2() //NaN
soma2(4) //NaN
soma2(4,4) //Retorna a soma
soma2(4,4,4,4,4,4,4,4) //Retorna a soma
console.log(soma2(4,4) + 2)

//3º Função com parâmetro/argumento e retorno
function soma3(param1, param2){
    let soma = param1 + param2
    return soma
}
console.log("---------------- Função com param e com retorno --------------")
console.log(soma3(10, 10))
console.log(soma3(10, 10) + 10)

function cadastro(nome, idade, altura){
    if(idade < 18){
        console.log(`${nome} com alura ${altura} não tem permissão`)
    } else {
        console.log(`${nome} com alura ${altura} tem permissão`)
    }
}
cadastro("Gabriel", 17, 1.78)
cadastro("Augusto", 17, 1.76)