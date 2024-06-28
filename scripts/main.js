
// MENU BURGUER
var menuBurguer = window.document.getElementById('menuBurguer');
var menuBurguerExit = window.document.getElementById('menuBurguerExit');
var caixaMenu = window.document.getElementById('menu');

function menu() {
    if (caixaMenu.style.display == "none") {
        caixaMenu.style.display = "block";
        menuBurguer.style.display = "none";
        menuBurguerExit.style.display = "block";
    } else {
        caixaMenu.style.display = "none";
        menuBurguer.style.display = "block";
        menuBurguerExit.style.display = "none";
    }
};

// LISTA DE MUSCIAS 
const listaDeMusicas = [
    {
        "nome_artista": "JVKE", 
        "nome_musica": "Golden Hour",
        "capa": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5o4XhFAeHWLoGrXH_KGULW0N19o6uzhqnqFs8gwxXX5kznshPVbGelyFP&s=10",
        "mp3": "Audio/Golden Hour -「AMV」- Anime MV(M4A_128K).m4a", 
        "like": "none",
    },
    {
        "nome_artista": "Joji", 
        "nome_musica": "Like You Do",
        "capa": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfqBQl3FYww0iR0WBezbUyCkgvHKLvK9QubQqIL47BGpOH3rgR1bzPD-c&s=10",
        "mp3": "Audio/Like You Do(M4A_128K).m4a", 
        "like": "none",
    },
    {
        "nome_artista": "VMZ", 
        "nome_musica": "O Ciclo Terminável de Ódio",
        "capa": "https://i1.sndcdn.com/artworks-qnzNnVzl475fYqyx-RIOtrA-t1080x1080.jpg",
        "mp3": "Audio/VMZ - O Ciclo Terminável do Ódio _ Gyutaro (Versão Acústica)(M4A_128K).m4a", 
        "like": "none",
    },
    {
        "nome_artista": "Link Click", 
        "nome_musica": "Vortex",
        "capa": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiLB88SYR8-AXJrYX-zpCoLWveRibtUzLziE-Qk5fJrAfeKHaJIxRu-1k&s=10",
        "mp3": "Audio/XƎTЯOVerthink (《时光代理人第二季》宣传曲)(M4A_128K).m4a", 
        "like": "none",
    },
    {
        "nome_artista": "Trevor Daniel", 
        "nome_musica": "Falling",
        "capa": "https://i1.sndcdn.com/artworks-E0zrhebzE0l9zx21-zhUO4w-t500x500.jpg",
        "mp3": "Audio/Trevor Daniel - Falling (Official Music Video)(M4A_128K).m4a", 
        "like": "none",
    },
    {
        "nome_artista": "Yamê", 
        "nome_musica": "Bécane",
        "capa": "https://i.scdn.co/image/ab67616d0000b2737dfba3f3ae607f250cdd969c",
        "mp3": "Audio/Yamê - Bécane _ A COLORS SHOW(M4A_128K).m4a", 
        "like": "none",
    },
    {
        "nome_artista": "Davi Kushner", 
        "nome_musica": "Daylight",
        "capa": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQudtLuCloIDlZSCt4gkyyWt9l0x98aSoGpxQ&s",
        "mp3": "Audio/David Kushner - Daylight (Official Music Video)(M4A_128K).m4a", 
        "like": "none",
    },
    {
        "nome_artista": "Fujii Kaze", 
        "nome_musica": "Shinunoga E-Wa",
        "capa": "https://i.pinimg.com/736x/a2/d6/c1/a2d6c1aefdc5aab248ed2ad3a9e452f2.jpg",
        "mp3": "Audio/Fujii Kaze - Shinunoga E-Wa (Not a MV)(M4A_128K).m4a", 
        "like": "none",
    },
    {
        "nome_artista": "Bryce Fox", 
        "nome_musica": "Horns",
        "capa": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk-h923frwMbpE7oG3MXCzgIpFWBWAWW9ic3J2WtH6hQ&s",
        "mp3": "Audio/BRYCE FOX - (live) HORNS - WE FOUND NEW MUSIC with GRANT OWENS(M4A_128K).m4a", 
        "like": "none",
    },
    {
        "nome_artista": "Metro Boomin", 
        "nome_musica": "Spider-Man Across the Spider-Verse",
        "capa": "https://pbs.twimg.com/media/Fx9_RAfWYAcKgOF.jpg:large",
        "mp3": "Audio/Metro Boomin _ Swae Lee_ Lil Wayne_ Offset _Annihilate – Spider-Man_ Across the Spider-Verse_(M4A_128K).m4a", 
        "like": "none",
    },
    {
        "nome_artista": "Metro Boomin", 
        "nome_musica": "Am I Dreaming",
        "capa": "https://i1.sndcdn.com/artworks-pNyUOR5gv8pSSyfl-qpkoSw-t500x500.jpg",
        "mp3": "Audio/Metro Boomin_ A_AP Rocky_ Roisee - Am I Dreaming (Visualizer)(M4A_128K).m4a", 
        "like": "none",
    },
    {
        "nome_artista": "Metro Boomin", 
        "nome_musica": "Hummingbird",
        "capa": "https://i.scdn.co/image/ab67616d00001e024a3cdc1e547b3d275d97cff8",
        "mp3": "Audio/Metro Boomin_ James Blake - Hummingbird (Visualizer)(M4A_128K).m4a", 
        "like": "none",
    },
    {
        "nome_artista": "Metro Boomin", 
        "nome_musica": "Nonviolent Communication",
        "capa": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVNO5-d2WZJCVGNI5oLeF-a3sy9VqB0mg-TDb11X0dpg&s",
        "mp3": "Audio/Metro Boomin_ James Blake_ A_AP Rocky_ 21 Savage - Nonviolent Communication (Visualizer)(M4A_128K).m4a", 
        "like": "none",
    },
    {
        "nome_artista": "Metro Boomin", 
        "nome_musica": "Calling",
        "capa": "https://us-tuna-sounds-images.voicemod.net/58b4536c-99fb-463f-a7c6-491db5597f96-1687147653049.jfif",
        "mp3": "Audio/Metro Boomin_ NAV_ A Boogie wit da Hoodie_ Swae Lee - Calling(M4A_128K).m4a", 
        "like": "none",
    },
]; 
let idMusic = ["false","false","false","false","false","false","false","false","false","false","false","false","false","false","false",];

localStorage.setItem('arrayMusic', JSON.stringify(idMusic));

let idVerifcadorMusic = JSON.parse(localStorage.getItem('arrayMusic'));


let body = window.document.getElementById('body');

let background = window.document.getElementById("fundao");
let MP3 = document.getElementById("MP3");
let containerMP3 = window.document.getElementById('containerMP3');
let capaMp3 = window.document.getElementById('img_capa_mp3');
let nomeCantor = window.document.getElementById('name_cantor');
let nomeMusica = window.document.getElementById('name_music');
let inicioMusica = window.document.getElementById('initial_time_music');
let finalMusica = window.document.getElementById('final_time_music');
let barraMusic = window.document.getElementById('barra_music');
let mp3ArrowRight = window.document.getElementById('mp3ArrowRight');
let mp3ArrowLeft = window.document.getElementById('mp3ArrowLeft');

let next_botao = window.document.getElementById('next_botao');
let back_botao = window.document.getElementById('back_botao');
let pause_botao = window.document.getElementById('pause_botao');
let play_botao = window.document.getElementById('play_botao'); 

let audio = document.querySelector('audio');

// ARROW BUTTON DINAMICO ARA MUDAR DE ESTILO

function clickMp3ArrowRight(num) {
//   containerMP3.style.backgroundImage = `url('${listaDeMusicas[numberMuisc].capa}')`;
    if (num == 0) {
        body.style.background = "linear-gradient(60deg, rgb(17,17,17), rgb(1,1,1))";
        caixaMenu.style.background = "linear-gradient(60deg, rgb(26,26,26), rgb(1,1,1))";
        MP3.style.background = "linear-gradient(60deg, rgb(26,26,26), rgb(1,1,1))";
    } else {
        body.style.background = "linear-gradient(60deg, #000011, #040442ed,#01012b, #000011)";
        caixaMenu.style.background = "linear-gradient(60deg,#000021, #00012b 20%, #000021)";
        MP3.style.background = "linear-gradient(60deg,#01012b,#070741, #000122)";
    }
    
}

// BOTÕES DE PLAY E PAUSE
play_botao.style.display = "block";
function playPause() {
    switch (play_botao.style.display) {
        case "block":
            audio.play();
            play_botao.style.display = "none";
            pause_botao.style.display = "block";
            MP3.style.animation = "bordalad 4s ease-in-out infinite";
            capaMp3.style.animation = "bordalad 4s ease-in-out infinite";
            break;
        default:
            audio.pause();
            play_botao.style.display = "block";
            pause_botao.style.display = "none";
            MP3.style.animation = "3s";
            capaMp3.style.animation = "3s";
            break;
    }
};
// FUNÇÃO PARRA AVANÇAR E RETROCEDER A MUsICA

let numberMuisc = 0

function nextMusic() {
    
    if (numberMuisc == 3) {
        numberMuisc = 0;
    } else if (numberMuisc == 8){
        numberMuisc = 4;
    }else if(numberMuisc == 13){
        numberMuisc = 9;
    } else{
        numberMuisc += 1;
    }

    audio.src = listaDeMusicas[numberMuisc].mp3;
    nomeCantor.textContent = listaDeMusicas[numberMuisc].nome_artista;
    nomeMusica.textContent = listaDeMusicas[numberMuisc].nome_musica;
    capaMp3.src = listaDeMusicas[numberMuisc].capa; 
    play_botao.style.display = "none";
    pause_botao.style.display = "block";
    audio.play();
    stylePlayer(numberStyle);
    background.style.backgroundImage = `url(${listaDeMusicas[numberMuisc].capa})`;
};

function backMusic() {
    
    if (numberMuisc == 0){
        numberMuisc = 3;
    } else if (numberMuisc == 4){
        numberMuisc = 8;
    } else if(numberMuisc == 9){
        numberMuisc = 13;
    } else{
        numberMuisc -= 1;
    }

    audio.src = listaDeMusicas[numberMuisc].mp3;
    nomeCantor.textContent = listaDeMusicas[numberMuisc].nome_artista;
    nomeMusica.textContent = listaDeMusicas[numberMuisc].nome_musica;
    capaMp3.src = listaDeMusicas[numberMuisc].capa;
    play_botao.style.display = "none";
    pause_botao.style.display = "block";
    audio.play();
    stylePlayer(numberStyle);
    background.style.backgroundImage = `url(${listaDeMusicas[numberMuisc].capa})`;
};

function clickMusic(number) {
    numberMuisc = number

    audio.src = listaDeMusicas[numberMuisc].mp3;
    nomeCantor.textContent = listaDeMusicas[numberMuisc].nome_artista;
    nomeMusica.textContent = listaDeMusicas[numberMuisc].nome_musica;
    capaMp3.src = listaDeMusicas[numberMuisc].capa;
    play_botao.style.display = "none";
    pause_botao.style.display = "block";
    MP3.style.animation = "bordalad 4s ease-in-out infinite";
    capaMp3.style.animation = "bordalad 4s ease-in-out infinite";
    audio.play();
    stylePlayer(numberStyle);
    background.style.backgroundImage = `url(${listaDeMusicas[numberMuisc].capa})`;
};

// ATUALIZAÇÃO DA BARRA E DO TEMPO DA MUSICA

barraMusic.addEventListener('click', function(e) {
    const offsetX = e.offsetX
    const clickedPercentage = (offsetX / this.offsetWidth);
    const newTime = clickedPercentage * audio.duration;
    audio.currentTime = newTime;
});

audio.addEventListener('timeupdate', function() {
    const barraUpdate = Math.floor(audio.currentTime / audio.duration * 100);
    const minutos = Math.floor(audio.currentTime / 60);
    const segundos = Math.floor(audio.currentTime % 60);
    const formatTime = (minutos < 10 ? '0' : ' ') + minutos + ':' + (segundos < 10 ? '0' : ' ' ) + segundos;
    barraMusic.value = barraUpdate;
    inicioMusica.textContent = formatTime; 
    finalMusica.textContent = segParaMinutes(Math.floor(audio.duration));
    
    if (barraMusic.value == 100) {
        nextMusic();
    }
    
});

function segParaMinutes(segundos) {
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10) {
        campoSegundos = "0" + campoSegundos; 
    }else{}

    if (campoMinutos < 10){
        campoMinutos = "0" + campoMinutos;

    }else{}

    return campoMinutos+ ':' +campoSegundos;
};

//  FUNÇÃO PARA FAVORITAR
function favoratarMusic(number) {
    if (idVerifcadorMusic[number] === "false") {

        idVerifcadorMusic[number] = "true";
        alert(`Musica: ${listaDeMusicas[number].nome_artista} - ${listaDeMusicas[number].nome_musica} || adicionada aos favorito`);
        localStorage.setItem('arrayMusic', JSON.stringify(idVerifcadorMusic));

    } else {
        idVerifcadorMusic[number] = "false";
        alert(`Musica: ${listaDeMusicas[number].nome_artista} - ${listaDeMusicas[number].nome_musica} || retirada dos favorito`);
        localStorage.setItem('arrayMusic', JSON.stringify(idVerifcadorMusic));
    }
};

function favoritar() {
    const listaFavoritos = window.document.getElementById('lista-favoritos');
    
    for (let x = 0; x < idVerifcadorMusic.length; x++) {
        if (idVerifcadorMusic[x] === "true") {
            listaFavoritos.appendChild(document.createElement('li')).innerHTML = `<img class="small-music-image" src="${listaDeMusicas[x].capa}"></img><p onclick="clickMusic(10)">${listaDeMusicas[x].nome_artista} - ${listaDeMusicas[x].nome_musica}</p>`;
        }
    }
};

function upLoadfavoritos() {
    favoritar();
    alert("carregando musicas")
};

window.addEventListener('DOMContentLoaded', () => {
    localStorage.setItem('arrayMusic', JSON.stringify(idVerifcadorMusic));
});

// ESTILIZAÇÃO PLAYER DE MUSICA
numberStyle = 0;
function stylePlayer(parametro) { 

    if (parametro == 999) {
        numberStyle++;
    }
    if (parametro == 1000){
        numberStyle--;
    }
    if (numberStyle > 2){
        numberStyle = 0;
    }
    if (numberStyle < 0){
        numberStyle = 2;
    }

    if (numberStyle == 0) {
        MP3.style.borderRadius = "20px";
        MP3.style.backgroundImage = "";
        MP3.style.background = "linear-gradient(60deg,#01012b,#070741, #000122);";
        capaMp3.style.scale = 1;
        capaMp3.style.width = "75%";
        capaMp3.style.height = "48%";
        capaMp3.style.transform = "translateY(-25px)";
        next_botao.style.marginTop = "15px";
        back_botao.style.marginTop = "15px";
        pause_botao.style.marginTop = "15px";
        play_botao.style.marginTop = "15px";
        nomeCantor.style.margin = "10px auto 5px auto";
        capaMp3.style.borderRadius = "20px";
    } else if (numberStyle == 1) {
        MP3.style.backgroundRepeat = "no-repeat";
        MP3.style.backgroundSize = "cover";
        MP3.style.backgroundPosition = "center";  
        MP3.style.backgroundImage = `url(${listaDeMusicas[numberMuisc].capa})`;
        capaMp3.style.scale = 0.85;
        capaMp3.style.width = "75%";
        capaMp3.style.height = "48%";
        capaMp3.style.transform = "translateY(0.1px)";
        next_botao.style.marginTop = "15px";
        back_botao.style.marginTop = "15px";
        pause_botao.style.marginTop = "15px";
        play_botao.style.marginTop = "15px";
        nomeCantor.style.margin = "10px auto 5px auto";
        capaMp3.style.borderRadius = "20px";
    } else if (numberStyle = 2) {
        MP3.style.borderRadius = "20px";
        MP3.style.backgroundImage = "";
        MP3.style.background = "linear-gradient(60deg,#01012b,#070741, #000122);";
        capaMp3.style.scale = 1;
        capaMp3.style.width = "108%";
        capaMp3.style.height = "55%";
        capaMp3.style.transform = "translateY(-10px) translateX(-10px)";
        capaMp3.style.borderRadius = "20px 20px 0px 0px";
        nomeCantor.style.margin = "5px";
        nomeMusica.style.margin = 0;
        barraMusic.style.marginBottom = "3px";
        next_botao.style.marginTop = "0";
        back_botao.style.marginTop = "0";
        pause_botao.style.marginTop = "0";
        play_botao.style.marginTop = "0";
    }
}

// INTERAÇÃO COM O PLAYER DE MUSICA POR TECLAS

document.addEventListener('keydown', function(event) {
    switch (event.code) {
        case "KeyD":
            return nextMusic();
        case "KeyA":
            return backMusic();
        case "KeyS":
            return playPause();
        case "Space":
            return playPause();
        case "ArrowRight":
            return nextMusic();
        case "ArrowLeft":
            return backMusic();
        case "ArrowDown":
            return playPause();
        default:
            break;
    }
});
navigator.mediaSession.setActionHandler('nexttrack', function() {
    nextMusic();
});
navigator.mediaSession.setActionHandler('previoustrack', function() {
    backMusic();
});
navigator.mediaSession.setActionHandler('play', function() {
    playPause();
});
navigator.mediaSession.setActionHandler('pause', function() {
    playPause();
});
