let idade = prompt("Digite sua idade: ");

console.log("Sua idade: " + idade);

console.log(typeof idade);

function somaIdade(idade) {
    return parseInt(idade) + 5;
}

console.log("Sua idade em 5 anos: " + somaIdade(idade));
