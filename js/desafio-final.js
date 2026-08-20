
function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

function classificarSituacao(media) {
    if (media >= 7) {
        return "Aprovado";
    } else if (media >= 5) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}

let quantidadeAlunos = 0;
let resposta = "s";

while (resposta === "s") {

    let nome = prompt("Digite o nome do aluno:");
    let curso = prompt("Digite o nome do curso:");

    let nota1 = Number(prompt("Digite a primeira nota:"));
    let nota2 = Number(prompt("Digite a segunda nota:"));

    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {

        console.log("Nota inválida! As notas devem estar entre 0 e 10.");

    } else {

        let media = calcularMedia(nota1, nota2);
        let situacao = classificarSituacao(media);

        console.log("===== FICHA DO ALUNO =====");
        console.log("Nome:", nome);
        console.log("Curso:", curso);
        console.log("Nota 1:", nota1);
        console.log("Nota 2:", nota2);
        console.log("Média:", media.toFixed(1));
        console.log("Situação:", situacao);
        console.log("==========================");

        quantidadeAlunos++;
    }

    resposta = prompt("Deseja cadastrar outro aluno? (s/n)");
}

console.log("Total de alunos cadastrados:", quantidadeAlunos);