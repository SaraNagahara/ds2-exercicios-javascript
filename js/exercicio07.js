const admin = "admin";
const senha = "1234";

const usuario = prompt("Digite o usuário:");
const senhaDigitada = prompt("Digite a senha:");

if(usuario === admin && senhaDigitada === senha) {
    console.log("Acesso permitido");
}else{
    console.log("Acesso negado");
}

//diferença entre == , === e =

/* 
    = é usado para atribuição de valor a uma variável, exemplo: let x = 5, onde o valor 5 é atribuído a variável x então x possui o valor de 5, pois você esta usando = para atribuir este valor.
    == é usado para comparação de valores, mas não compara o tipo de dado, por exemplo se é string, number, boolean, etc.
    === é usado para comparação de valores e os tipos de dados

    exemplo:

    1 == "1" // true
    1 === "1" // false, pois o tipo de dado é diferente o primeiro é number e o segundo string
    1 === 1 // true, pois o valor e o tipo de dado são iguais
    1 == 2 // false, pois o valor é diferente
    1 === 2 // false, pois o valor e o tipo de dado são diferentes
*/
