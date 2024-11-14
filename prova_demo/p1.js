/** Relembrando alguns conceitos
 * 1 - Leia o Array e mostre os números positivos
 * 2 - Leia o Array e mostre os números negativos
 * 3 - Leia o Array, verifique se no Array existe o número 6 e qual posição ele está.
 */

//Início 1º Algoritmo - Leia o Array e mostre os números positivos

// let vetor1 = [9, 3, 4, 5, 7, -1, -3, -2, 6, 10];

// for(let i = 0; i < vetor1.length; i++){
//     if(vetor1[i] > 0){
//         console.log(`Valor ${vetor1[i]} positivo`)
//     }
// }

//FIM 1º Algoritmo

//Início 2º Algoritmo - Leia o Array e mostre os números negativos

// let vetor1 = [9, 3, 4, 5, 7, -1, -3, -2, 6, 10];

// for(let i = 0; i < vetor1.length; i++){
//     if(vetor1[i] < 0){
//         console.log(`Valor ${vetor1[i]} negativo`)
//     }
// }

//FIM 2º Algoritmo

//Início 3º Algoritmo - Leia o Array, verifique se no Array existe o número 6 e qual posição ele está.

let vetor1 = [9, 3, 4, 5, 7, -1, -3, -2, 6, 10];

for(let i = 0; i < vetor1.length; i++){
    if(vetor1[i] === 6){
        console.log(`O número ${vetor1[i]} está na posição ${i} do Array`)
    }
}

//FIM 3º Algoritmo