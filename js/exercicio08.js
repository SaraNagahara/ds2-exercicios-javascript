//Tabuada com for

let numero = parseInt(prompt("Digite um número para ver sua tabuada:"));

if (!Number.isInteger(numero)) {
    console.log("Número inválido");
} else {    
    console.log(`Tabuada do ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }

}