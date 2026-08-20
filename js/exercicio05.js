function verificarIdade() {
    let entradaDaIdade = prompt("Digite sua idade: ");
    let idade = Number(entradaDaIdade);

    if (entradaDaIdade === null || entradaDaIdade.trim() === "" || !Number.isFinite(idade) || idade < 0) {
        console.log("Idade inválida");
        return;
    }

    if (idade < 16) {
        console.log("Não pode votar");
    } else if (idade <= 17) {
        console.log("Voto opcional");
    } else {
        console.log("Voto obrigatório");
    }
}

verificarIdade();