let brasil, franca, fuso = 5, horas

brasil = parseInt(prompt("Que horas são no Brasil? "))

franca = brasil + fuso

if ((brasil < 24) && (brasil >= 0)) {
    if(franca > 23){
        horas = franca - 24
        document.write(`O horário na frança é ${horas} horas`)
    } else{
        document.write(`O horário na frança é ${franca} horas`)
    }
} else {
    document.write("Horário inválido!!")
}