let ano

ano = parseInt(prompt("Em qual ano você está?"))

if(ano%4 == 0){
    document.write("Esse ano é bissexto")
} else{
    document.write("Esse ano não é bissexto")
}