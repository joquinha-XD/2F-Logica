//Faça um algoritmo que receba o valor das horas em segundos e transforme em dias, horas e minutos.

let seg
let dias, horas, mins
let contadora

seg = parseInt(prompt("Digite as  em segundos"))

mins = seg / 60
horas = mins / 60
dias = horas / 24
dias = Math.floor(dias)
horas = horas - (dias * 24)
horas = Math.floor(horas)
mins = mins - ((dias * 24) * 60)
mins = Math.floor(mins)


document.write(`${seg}s equivale a ${dias.toFixed(0)}d:${horas.toFixed(0)}h:${mins.toFixed(0)}m`)