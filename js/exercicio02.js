const nome = "Sara Suelen Ferrer Nagahara";
let idade = 26;
const cidade = "São Roque";
const EstaMatriculado = true;
const nota = 9.5;

console.log(nome + " - " + typeof nome);
console.log(idade + " - " + typeof idade);
console.log(cidade + " - " + typeof cidade);
console.log(EstaMatriculado + " - " + typeof EstaMatriculado);
console.log(nota + " - " + typeof nota);

/*Por que algumas são const e outras let? 

Porque as variáveis que não vão sofrer alterações durante a execução do código são declaradas como const, 
enquanto as variáveis que podem sofrer alterações são declaradas como let. 
Por exemplo, o nome, cidade e nota são valores fixos, então são declarados como const. 
Já a idade pode mudar com o tempo, então é declarada como let.


*/
