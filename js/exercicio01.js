//Titulo do exercício 01
function criarTituloH1Html(titulo){
    const h1 = document.createElement('h1');
    h1.textContent = titulo;
    return h1;
}

document.body.appendChild(criarTituloH1Html("Fundamentos da Web"));

//Container de Definição de página estática com titulo e subtitulo
function criarEstaticaeDefinicaoHtml(titulo, subtitulo){
    const container = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.textContent = titulo;
    const p = document.createElement('p');
    p.textContent = subtitulo;
    container.appendChild(h2);
    container.appendChild(p);
    return container;
}

document.body.appendChild(criarEstaticaeDefinicaoHtml(
    "Definição de página estática", 
    "Uma página web estática é aquela cujo conteúdo é fixo e não muda em resposta a ações do usuário ou eventos externos."
));


//container de Definição de página dinâmica com título e subtitulo
function criarDinamicadDefinicaoHtml(titulo, subtitulo){
    const container = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.textContent = titulo;
    const p = document.createElement('p');
    p.textContent = subtitulo;
    container.appendChild(h2);
    container.appendChild(p);
    return container;
}

document.body.appendChild(criarDinamicadDefinicaoHtml(
    "Definição de página dinâmica", 
    "Uma página web dinâmica é aquela que pode mudar seu conteúdo e aparência em resposta a ações do usuário ou eventos externos. Isso é possível através do uso de linguagens de programação, como JavaScript, que permitem manipular o DOM (Document Object Model) da página em tempo real."
));


//Exemplo real de cada tipo

//estatica
function containerExemploEstaticaHtml(titulo, subtitulo){
    const container = document.createElement('div');
    const h2 = document.createElement('h2');     
    const p = document.createElement('p');
    h2.textContent = titulo;
    p.textContent = subtitulo;
    container.appendChild(h2);
    container.appendChild(p);
    return container;
}

document.body.appendChild(containerExemploEstaticaHtml(
    "Exemplo real de página estática: ", 
    "Um exemplo comum de página estática é um site de apresentação de uma empresa ou um portifolio onde as informações são fixas e não mudam com frequência."
));

//dinamica

function containerExemploDinamicaHtml(titulo, subtitulo){
    const container = document.createElement('div');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    h2.textContent = titulo;
    p.textContent = subtitulo;
    container.appendChild(h2);
    container.appendChild(p);
    return container;
}

document.body.appendChild(containerExemploDinamicaHtml(
    "Exemplo real de página dinâmica: ", 
    "Um exemplo comum de página dinâmica são redes sociais, como o Facebook ou o Twitter, onde o conteúdo é constantemente atualizado com novas postagens, comentários e interações dos usuários e carrega informações em tempo real, como notificações e mensagens."
));

//lista ordenada explicando caminho básico entre navegador, servidor e resposta.
function criarListaCaminhoBásicoServidorRespostaHtml(titulo, itens){
    const container = document.createElement('div');
    const h2 = document.createElement('h2');
    const ol = document.createElement('ol');  
    h2.textContent = titulo;
    itens.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ol.appendChild(li);
    });
    container.appendChild(h2);
    container.appendChild(ol);
    return container;
}

document.body.appendChild(criarListaCaminhoBásicoServidorRespostaHtml(
    "Caminho básico entre navegador, servidor e resposta: ", 
    [
        "O navegador envia uma solicitação ao servidor",
        "O servidor processa a solicitação e envia uma resposta",
        "O navegador recebe a resposta e a exibe para o usuário"
    ]
));
