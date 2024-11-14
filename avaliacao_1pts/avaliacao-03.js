let chinchilas, anos, i = 0, acumuladora = 0

do{
    chinchilas = parseInt(prompt("Qual o número de chinchilas?"))
    if (chinchilas < 2){
        alert("O número de chinchilas deve ser maior ou igual a 2!!")
    }
} while(chinchilas < 2);

anos = parseInt(prompt("Qual a quantidade de anos você deseja esperar?"))
acumuladora = chinchilas

for(let i = 0; anos != 0; anos --){
    i++
    if(i <= 1){
        document.write(`O número de chinchilas após ${i} ano é de ${chinchilas}<br>`)
    } else {
        acumuladora = acumuladora * 3
        document.write(`O número de chinchilas após ${i} ano é de ${acumuladora}<br>`)
    }
}