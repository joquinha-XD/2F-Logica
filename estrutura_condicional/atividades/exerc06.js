let num

num = parseInt(prompt("Digite um número:"))

if ((num % 3 == 0) && (num % 5 == 0)) {
    document.write(`O número ${num} é múltiplo de 3 e de 5`)
} else {
    document.write(`O número ${num} não é múltiplo de 3 e de 5`)
}