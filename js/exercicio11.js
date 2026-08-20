function somar(numero1, numero2) {
    return numero1 + numero2;
}

function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

function classificarMedia(media) {
    if (media >= 7) {
        return "Aprovado";
    } else if (media >= 5) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}

function criarSaudacao(nome) {
    return "Olá, " + nome + "! Seja bem-vindo(a).";
}


let resultadoSoma = somar(10, 5);

let resultadoMedia = calcularMedia(8, 6);

let resultadoClassificacao = classificarMedia(resultadoMedia);

let resultadoSaudacao = criarSaudacao("Sara");


console.log("Soma:", resultadoSoma);
console.log("Média:", resultadoMedia);
console.log("Situação:", resultadoClassificacao);
console.log(resultadoSaudacao);