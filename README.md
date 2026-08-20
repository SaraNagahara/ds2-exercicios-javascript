# ds2-exercicios-javascript
Repositório para armazenar atividades de desenvolvimento de servidores da faculdade


# Exercício 1 — Páginas Dinâmicas e Estáticas

## Pergunta

Em qual momento uma página dinâmica é processada e por que um banco de dados pode ser necessário?

## Resposta

Uma página dinâmica é processada no momento em que o usuário faz uma requisição. Nesse processo, o servidor pode gerar ou modificar o conteúdo da página de acordo com os dados solicitados.

Um banco de dados pode ser necessário para armazenar e consultar informações que serão utilizadas para gerar o conteúdo da página, como usuários, produtos, pedidos ou outros dados que precisam ser persistidos.

# Exercício 2 — Client-side e Server-side

## 1. Tabela comparativa

| Característica | Client-side | Server-side |
|---|---|---|
| **Local em que o código é executado** | No navegador do usuário | No servidor |
| **Tecnologias de exemplo** | HTML, CSS, JavaScript | Node.js, PHP, Python, Java, C# |
| **Responsabilidades** | Interação com a interface, alterações visuais e validações de entrada | Processamento de dados, regras de negócio, autenticação e acesso ao banco de dados |
| **Vantagens** | Resposta rápida para interações da interface e menor necessidade de comunicação com o servidor | Maior controle sobre dados e regras de negócio, além de permitir acesso seguro ao banco de dados |
| **Limitações** | O código pode ser visualizado e manipulado pelo usuário e não deve ser usado sozinho para proteger dados ou regras importantes | Depende da comunicação com o servidor, podendo gerar maior latência |
| **Exemplos de tarefas adequadas** | Alterar elementos da página, validar campos, responder a cliques e realizar cálculos simples | Consultar banco de dados, autenticar usuários, controlar sessões e processar dados sigilosos |

## 2. Classificação das operações

| Nº | Operação | Classificação | Justificativa |
|---|---|---|---|
| 1 | Validar se um campo obrigatório foi preenchido | **Client-side** | A validação pode ser realizada diretamente no navegador antes que os dados sejam enviados ao servidor, proporcionando uma resposta imediata ao usuário. |
| 2 | Consultar dados sigilosos de um cliente | **Server-side** | Os dados sigilosos devem ser protegidos no servidor. O navegador não deve ter acesso direto ao banco de dados. |
| 3 | Alterar a cor de um botão após um clique | **Client-side** | A alteração da interface pode ser realizada diretamente no navegador utilizando JavaScript e CSS. |
| 4 | Verificar login e senha em um banco de dados | **Server-side** | A autenticação deve ser processada no servidor, que consulta o banco de dados sem expor essas informações ao cliente. |
| 5 | Calcular o total de uma compra | **Possíveis em ambos** | O cálculo pode ser realizado no client-side para atualizar o valor imediatamente na interface, mas também deve ser validado no server-side antes de finalizar a compra. |
| 6 | Controlar uma sessão de usuário | **Server-side** | O controle da sessão envolve autenticação e manutenção do estado do usuário, sendo uma responsabilidade normalmente tratada pelo servidor. |