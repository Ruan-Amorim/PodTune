
var titulo = window.document.getElementById("title");
var nome = window.document.getElementById("nome");
var voltar = window.document.getElementById("voltar");

var webLista = window.document.getElementById("lista-de-podcasts");
var tituloPage = window.document.getElementById("titulo-de-selecao-podcast");
var progressBar = window.document.getElementsByClassName("barra-podcast");
var player = window.document.getElementById("video-player");
var inicioTempoPodcast = window.document.getElementById("initial_time_podcast");
var finalTempoPodcast = window.document.getElementById("final_time_podcast");

// LISTAS
const listaDePodcast = [
    {
        "nomePodCast": "Ciência Sem Fim",
        "nome": "ROSALY LOPES [NASA] [LIVE SOLIDÁRIA]",
        "imageCapa": "https://i.ytimg.com/vi/ULvzQBIn7nw/maxresdefault.jpg",
        "src": "https://www.youtube-nocookie.com/embed/ULvzQBIn7nw?si=OYm_jmJYelibP8gm",
        "tipo": "Ciências",
    },
    {
        "nomePodCast": "Ciência Sem Fim",
        "nome": "STARSHIP [COM PEDRO PALLOTTA]",
        "imageCapa": "https://i.ytimg.com/vi/z9OttX-E_oY/maxresdefault.jpg",
        "src": "https://www.youtube.com/embed/z9OttX-E_oY?si=enx5O2QDcJjZKeGd",
        "tipo": "Ciências",
    },
    {
        "nomePodCast": "Ciência Sem Fim",
        "nome": "CAMILE VILELA",
        "imageCapa": "https://i.ytimg.com/vi/a9GNbUJCyyQ/sddefault.jpg?v=662b04d5",
        "src": "https://www.youtube.com/embed/a9GNbUJCyyQ?si=iLF_bKiZCpDx19FC",
        "tipo": "Ciências",
    },
    {
        "nomePodCast": "Ciência Sem Fim",
        "nome": "A VOYAGER VOLTOU!!!",
        "imageCapa": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuygIEmiDW2opoGqs9MY5UxVYrbKuuDZXWag&s",
        "src": "https://www.youtube.com/embed/1JVVD7kOT98?si=qOHonGswEucFlDyT",
        "tipo": "Ciências",
    },
    {
        "nomePodCast": "Coda+Fala",
        "nome": "O QUE UM DEV INICIANTE DEVE SABER ANTES DE COMEÇAR",
        "imageCapa": "https://i.ytimg.com/vi/4nepEd9BxPs/maxresdefault.jpg",
        "src": "https://www.youtube.com/embed/4nepEd9BxPs?si=1lzIdMJg-3PF0XeC",
        "tipo": "Programação",
    },
    {
        "nomePodCast": "Coda+Fala",
        "nome": "PROGRAMADOR FRONT-END: Tudo para você começar!",
        "imageCapa": "https://i.ytimg.com/vi/4nepEd9BxPs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBGAhsR5Re1HVf1dSM5sPZe6h3zyw",
        "src": "https://www.youtube.com/embed/wmM1Y0FTiz8?si=jGEtHZ8o-TJwtPWO",
        "tipo": "Programação",
    },
    {
        "nomePodCast": "Curso em Video" ,
        "nome": "TINHAMOS TUDO, MENOS DINHEIRO Experience Podcast - Gustavo Guanabara",
        "imageCapa": "https://i.ytimg.com/vi/666m6E4mqkc/maxresdefault.jpg" ,
        "src": "https://www.youtube.com/embed/666m6E4mqkc?si=2rM3ylc-Hme1gkEE" ,
        "tipo": "Programação",
    },
    {
        "nomePodCast": "Curso em Video" ,
        "nome": "LAYOFF? PROGRAMADOR NO CODE? HOME OFFICE? - Mano Deyvin",
        "imageCapa": "https://i.ytimg.com/vi/g-BjJmbvQZ0/maxresdefault.jpg" ,
        "src": "https://www.youtube.com/embed/g-BjJmbvQZ0?si=JGtdP0IsocrFodC3" ,
        "tipo": "Programação",
    },
    {
        "nomePodCast": "Curso em Video" ,
        "nome": "FALTA DEV DESENROLADO - Experience Podcast 29 - Deyvid Nascimento vulgo Mano Deyvin",
        "imageCapa": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0AxphBE-mFzq3vWc2vfIqqh9vKhObEqTvGA&s" ,
        "src": "https://www.youtube.com/embed/qUOTbRW0HSw?si=pNB-268_-arOpTEE" ,
        "tipo": "Programação",
    },
    {
        "nomePodCast": "Lutz Podcast" ,
        "nome": "Fernanda Landeiro: Psicologia, Cognitivo Comportamental, Emoções e Felicidade",
        "imageCapa": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtZIZZOP76RORYnC5yrUcfMnDniFQ1N5oPcQ&s" ,
        "src": "https://www.youtube.com/embed/07TbX1fP83k?si=eRPdWuLuXVRcClFa" ,
        "tipo": "Psicologia",
    },{
        "nomePodCast": "Lutz Podcast" ,
        "nome": "Eslen Delanogare: Neurociência, Equilíbrio Na Vida, Dinheiro e Relacionamentos",
        "imageCapa": "https://i.ytimg.com/vi/SQ0qgQtqq9U/maxresdefault.jpg" ,
        "src": "https://www.youtube.com/embed/SQ0qgQtqq9U?si=oMWOTGAqAVViLkMJ" ,
        "tipo": "Psicologia",
    },
    {
        "nomePodCast": "Inteligência Ltda" ,
        "nome": "PEDRO LOOS (CIÊNCIA TODO DIA)",
        "imageCapa": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgozFlwvK3WeByYt7lcFpXO_z9SRlPS9WVRg&s" ,
        "src": "https://www.youtube.com/embed/MKzOAOu8Zes?si=yWCHJ9Fvk1uKWwae" ,
        "tipo": "Descontraído",
    },
    {
        "nomePodCast": "Flow Podcast" ,
        "nome": "BAKA GAIJIN [+ GIANZÃO]",
        "imageCapa": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL4svwqPuVvOsBG88kw_IkZS-kSw-VXvuaBg&s" ,
        "src": "https://www.youtube.com/embed/V7Yra6qJJ1o?si=6QRzi7O86_kbdAv-" ,
        "tipo": "Descontraído",
    },
];
const tiposPodCast = ["Ciências", "Psicologia", "Programação", "Descontraído", "Debates"];
const listaAtual = [];

// GERADOR DE TIPOS

function gerarTipos() {
 for (let x = 0; x < tiposPodCast.length; x++){
    webLista.appendChild(document.createElement("li")).innerHTML = `<p onclick="abrirTipo('${tiposPodCast[x]}')">${tiposPodCast[x]}<p/>`
 }
}

// ABRINDO TIPOS DE PODCASTS

function abrirTipo(tipo) {
    let number = 0;
    webLista.innerHTML = "";
    tituloPage.innerText = "Escolha seu Video PodCast"
    var newLista = webLista.appendChild(document.createElement("ul"));

    for (let x = 0; x < listaDePodcast.length; x++) {

        if (tipo ==  listaDePodcast[x].tipo) {
            listaAtual.push(listaDePodcast[x]);
            newLista.appendChild(document.createElement("li")).innerHTML = `<img src="${listaDePodcast[x].imageCapa}" alt="capa do podcast"><p onclick="clickPodcast('${number}')">${listaDePodcast[x].nome} - ${listaDePodcast[x].nomePodCast}<p/>`
            number++;
        }
    }
    voltar.style.display = "inline-block";
};

// FUNÇÃO PARA SELECIONAR O VIDEO DO PODCAST

function randomSelecaoPodcast() {
    // Gerar um índice aleatório dentro do intervalo válido da listaDePodcast
    let codigo = Math.floor(Math.random() * listaDePodcast.length);

    // Atualizar os elementos HTML com os dados do podcast selecionado aleatoriamente
    titulo.innerText = listaDePodcast[codigo].nomePodCast;
    nome.innerText = listaDePodcast[codigo].nome;
    player.src = listaDePodcast[codigo].src;
}


function clickPodcast(codigo) {
    titulo.innerText = listaAtual[codigo].nomePodCast;
    nome.innerText = listaAtual[codigo].nome;
    player.src = listaAtual[codigo].src;
}

gerarTipos();
randomSelecaoPodcast();