
const admin = "admin";
const senha = "1234";

let tentativas = 0;

while (tentativas < 3) {
    const usuario = prompt("Digite o usuário:");
    const senhaDigitada = prompt("Digite a senha:");

    if (usuario === admin && senhaDigitada === senha) {
        console.log("Acesso permitido");
        break;
    } else {
        tentativas++;

        if (tentativas < 3) {
            console.log("Login incorreto. Tentativas restantes: " + (3 - tentativas));
        } else {
            console.log("Acesso bloqueado");
        }
    }
}