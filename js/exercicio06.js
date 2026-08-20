const nome = prompt("Digite seu nome:");
const entradaN1 = prompt("Digite a primeira nota:");
const entradaN2 = prompt("Digite a segunda nota:");

let media = (Number(entradaN1) + Number(entradaN2)) / 2;

if(media >= 7 && media <= 10) {
    console.log(`Nome do aluno: ${nome}, primeira nota: ${entradaN1}, segunda nota: ${entradaN2}, média do aluno: ${media.toFixed(1)}, situação do aluno: Aprovado`);
}else if(media >= 5 && media < 7) {
    console.log(`Nome do aluno: ${nome}, primeira nota: ${entradaN1}, segunda nota: ${entradaN2}, média do aluno: ${media.toFixed(1)}, situação do aluno: Recuperação`);
}else if(media >= 0 && media < 5) {
    console.log(`Nome do aluno: ${nome}, primeira nota: ${entradaN1}, segunda nota: ${entradaN2}, média do aluno: ${media.toFixed(1)}, situação do aluno: Reprovado`);
}else{
    console.log("Nota inválida");
}


