let nota1, nota2, nota3, media

nota1 = parseFloat(prompt("Digite a nota 1:"))
nota2 = parseFloat(prompt("Digite a nota 2:"))
nota3 = parseFloat(prompt("Digite a nota 3:"))

media = (nota1+nota2+nota3)/3

if(((nota1 || nota2 || nota3) >= 0) && ((nota1 || nota2 || nota3) <= 10)){
    if(media >= 7){
        document.write(`Aprovado!`)
    } else {
        document.write(`Reprovado!`)
    }
} else {
    document.write(`Alguma de suas notas estão incorretas!!`)
}