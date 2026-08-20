let numero;
let quantidade = 0;
let soma = 0;
let maior;
let menor;

while (true) {
    numero = Number(prompt("Digite um número (0 para sair):"));

    if (numero === 0) {
        break;
    }

    quantidade++;
    soma += numero;

    if (quantidade === 1) {
        maior = numero;
        menor = numero;
    } else {
        if (numero > maior) {
            maior = numero;
        }

        if (numero < menor) {
            menor = numero;
        }
    }
}

if (quantidade === 0) {
    console.log("Nenhum número foi informado.");
} else {
    let media = soma / quantidade;

    console.log("Quantidade: " + quantidade);
    console.log("Soma: " + soma);
    console.log("Média: " + media);
    console.log("Maior número: " + maior);
    console.log("Menor número: " + menor);
}