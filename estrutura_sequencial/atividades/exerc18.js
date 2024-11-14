let titulo, horas, minutos

titulo = prompt("Qual o título do filme?")
minutos = parseFloat(prompt("Quanto tempo de duração tem o filme (em minutos)?"))

horas = minutos/60
horas = Math.floor(horas)
minutos = minutos - (horas * 60)

document.write(`O filme ${titulo} possui ${horas}h:${minutos}m`)