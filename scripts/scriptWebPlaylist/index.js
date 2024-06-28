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
let imageMusicInArtista = window.document.getElementById('imagemPlayerArtistas');

let background = window.document.getElementById("fundao");
let inicioMusica = window.document.getElementById('initial_time_music');
let finalMusica = window.document.getElementById('final_time_music');
let barraMusic = window.document.getElementById('barra_music');

let next_botao = window.document.getElementById('next_botao');
let back_botao = window.document.getElementById('back_botao');
let pause_botao = window.document.getElementById('pause_botao');
let play_botao = window.document.getElementById('play_botao'); 

let audio = document.querySelector('audio');

let inputText = window.document.getElementById("inputText");
let playlist = window.document.getElementById("playlistMusicArtistas");
let preView = window.document.getElementById("pre-view-musicas");

let numberMuisc = 0

// LISTA DE MUSCIAS 
const listaDeMusicas = [
    {
        "nome_artista": "JVKE", 
        "nome_musica": "Golden Hour",
        "capa": "https://s1.dmcdn.net/v/UltK61bTrSleVEeho/x1080",
        "mp3": "Audio/Golden Hour -「AMV」- Anime MV(M4A_128K).m4a", 
        "like": "none",
        "tipo": "R&B/Soul",
    },
    {
        "nome_artista": "Jeremy Zucker", 
        "nome_musica": "You Were Good To Me",
        "capa": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUXSZxi5j-Ok7w3mDJfC4vhScdFsMYREiZ2A&s",
        "mp3": "Audio/Kono Oto Tomare「AMV」 __ You Were Good To Me _Tradução-Legendado_(M4A_128K).m4a", 
        "like": "none",
        "tipo": "R&B/Soul",
    },
    {
        "nome_artista": "Joji", 
        "nome_musica": "Like You Do",
        "capa": "https://i.ytimg.com/vi/HZcRKJf7rOI/maxresdefault.jpg",
        "mp3": "Audio/Like You Do(M4A_128K).m4a", 
        "like": "none",
        "tipo": "R&B/Soul",
    },
    {
        "nome_artista": "Joji", 
        "nome_musica": "Ew",
        "capa": "https://i.ytimg.com/vi/UGB_Bsm5Unk/maxresdefault.jpg",
        "mp3": "Audio/Joji - Ew(M4A_128K).m4a", 
        "like": "none",
        "tipo": "R&B/Soul",
    },
    {
        "nome_artista": "Joji", 
        "nome_musica": "Slow Dancing in The Dark",
        "capa": "https://i.ytimg.com/vi/K3Qzzggn--s/maxresdefault.jpg",
        "mp3": "Audio/Joji - SLOW DANCING IN THE DARK(M4A_128K).m4a", 
        "like": "none",
        "tipo": "R&B/Soul",
    },
    {
        "nome_artista": "VMZ", 
        "nome_musica": "O Ciclo Terminável de Ódio",
        "capa": "https://i.ytimg.com/vi/6IYmmehOsJQ/maxresdefault.jpg",
        "mp3": "Audio/VMZ - O Ciclo Terminável do Ódio _ Gyutaro (Versão Acústica)(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Vibe Anime",
    },
    {
        "nome_artista": "Link Click", 
        "nome_musica": "Until It Dies",
        "capa": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx_gVNf_zHoaj2OByLqBhJ6kHSxPDMvyc5RHl0pRZ_5A&s",
        "mp3": "Audio/Until It Dies (《时光代理人第二季》动画插曲)(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Vibe Anime",
    },
    {
        "nome_artista": "Link Click", 
        "nome_musica": "Vortex",
        "capa": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiLB88SYR8-AXJrYX-zpCoLWveRibtUzLziE-Qk5fJrAfeKHaJIxRu-1k&s=10",
        "mp3": "Audio/XƎTЯOVerthink (《时光代理人第二季》宣传曲)(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Endings",
    },
    {
        "nome_artista": "Link Click", 
        "nome_musica": "THE TIDES",
        "capa": "https://64.media.tumblr.com/798bbccc5480754631219cf3ed792cd9/3fb4d6c75b431ca4-96/s500x750/2e5bdd88459a97412b81e02d7d74f0823d199f49.gifv",
        "mp3": "Audio/Link Click Season 2 Ending Full《THE TIDES》by 饭卡 (Fan Ka) _ 白鲨JAWS【中文_English_Pinyin】(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Endings",
    }, 
    {
        "nome_artista": "Link Click", 
        "nome_musica": "Overthink by Fan Ka",
        "capa": "https://i.ytimg.com/vi/I4BnU5Uqgsg/maxresdefault.jpg",
        "mp3": "Audio/Link Click Ending _ Overthink by Fan Ka(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Endings",
    },  
    {
        "nome_artista": "Trevor Daniel", 
        "nome_musica": "Falling",
        "capa": "https://i.ytimg.com/vi/L7mfjvdnPno/maxresdefault.jpg",
        "mp3": "Audio/Trevor Daniel - Falling (Official Music Video)(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Pop",
    },
    {
        "nome_artista": "Yamê", 
        "nome_musica": "Bécane",
        "capa": "https://i.ytimg.com/vi/iOgAG6_1bbw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBPxYU2bU2n8dAws-LwQF2VqsgKBg",
        "mp3": "Audio/Yamê - Bécane _ A COLORS SHOW(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Pop",
    },
    {
        "nome_artista": "Yamê", 
        "nome_musica": "Ayo Mba",
        "capa": "https://i.ytimg.com/vi/JqZTKwfQfPI/sddefault.jpg",
        "mp3": "Audio/Yamê - Ayo Mba (Visualizer)(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Pop",
    },
    {
        "nome_artista": "Yamê", 
        "nome_musica": "Bahwai",
        "capa": "https://i.ytimg.com/vi/e5OG64h3ILU/maxresdefault.jpg",
        "mp3": "Audio/Yamê - Bahwai (Official Video)(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Pop",
    },
    {
        "nome_artista": "Yamê", 
        "nome_musica": "Call of Valhalla",
        "capa": "https://i.ytimg.com/vi/QKPE6R8QJQs/maxresdefault.jpg",
        "mp3": "Audio/Yamê - Call of Valhalla (Clip Officiel)(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Pop",
    },
    {
        "nome_artista": "Davi Kushner", 
        "nome_musica": "Daylight",
        "capa": "https://i.ytimg.com/vi/MoN9ql6Yymw/maxresdefault.jpg",
        "mp3": "Audio/David Kushner - Daylight (Official Music Video)(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Pop",
    },
    {
        "nome_artista": "Fujii Kaze", 
        "nome_musica": "Shinunoga E-Wa",
        "capa": "https://i.ytimg.com/vi/dawrQnvwMTY/maxresdefault.jpg",
        "mp3": "Audio/Fujii Kaze - Shinunoga E-Wa (Not a MV)(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Pop",
    },
    {
        "nome_artista": "Good Grief", 
        "nome_musica": "A Silent Voice - 『AMV』",
        "capa": "https://i.ytimg.com/vi/Hmfk44FpB8k/hqdefault.jpg",
        "mp3": "Audio/_Good Grief_ A Silent Voice - 『AMV』(M4A_128K).m4a", 
        "like": "none",
        "tipo": "R&B/Soul",
    },
    {
        "nome_artista": "Bryce Fox", 
        "nome_musica": "Horns",
        "capa": "https://i.ytimg.com/vi/sAYpGeqdqHk/hqdefault.jpg",
        "mp3": "Audio/BRYCE FOX - (live) HORNS - WE FOUND NEW MUSIC with GRANT OWENS(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Pop",
    },
    {
        "nome_artista": "Metro Boomin", 
        "nome_musica": "Spider-Man Across the Spider-Verse",
        "capa": "https://pbs.twimg.com/media/Fx9_RAfWYAcKgOF.jpg:large",
        "mp3": "Audio/Metro Boomin _ Swae Lee_ Lil Wayne_ Offset _Annihilate – Spider-Man_ Across the Spider-Verse_(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Pop",
    },
    {
        "nome_artista": "Metro Boomin", 
        "nome_musica": "Am I Dreaming",
        "capa": "https://i1.sndcdn.com/artworks-pNyUOR5gv8pSSyfl-qpkoSw-t500x500.jpg",
        "mp3": "Audio/Metro Boomin_ A_AP Rocky_ Roisee - Am I Dreaming (Visualizer)(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Pop",
    },
    {
        "nome_artista": "Metro Boomin", 
        "nome_musica": "Hummingbird",
        "capa": "https://i.scdn.co/image/ab67616d00001e024a3cdc1e547b3d275d97cff8",
        "mp3": "Audio/Metro Boomin_ James Blake - Hummingbird (Visualizer)(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Pop",
    },
    {
        "nome_artista": "Metro Boomin", 
        "nome_musica": "Nonviolent Communication",
        "capa": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVNO5-d2WZJCVGNI5oLeF-a3sy9VqB0mg-TDb11X0dpg&s",
        "mp3": "Audio/Metro Boomin_ James Blake_ A_AP Rocky_ 21 Savage - Nonviolent Communication (Visualizer)(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Pop",
    },
    {
        "nome_artista": "Metro Boomin", 
        "nome_musica": "Calling",
        "capa": "https://us-tuna-sounds-images.voicemod.net/58b4536c-99fb-463f-a7c6-491db5597f96-1687147653049.jfif",
        "mp3": "Audio/Metro Boomin_ NAV_ A Boogie wit da Hoodie_ Swae Lee - Calling(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Pop",
    },
    {
        "nome_artista": "Novatroop", 
        "nome_musica": "Mahoraga",
        "capa": "https://i.ytimg.com/vi/ukhhHHOIZf0/maxresdefault.jpg",
        "mp3": "Audio/Mahoraga _ Novatroop _ Megumi Fushiguro (Jujutsu Kaisen)(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Vibe Anime",
    },
    {
        "nome_artista": "Novatroop", 
        "nome_musica": "Águas Ardentes",
        "capa": "https://i.ytimg.com/vi/wSo0sgiDRi0/maxresdefault.jpg",
        "mp3": "Audio/Águas Ardentes _ Novatroop _ Tanjiro Kamado (Kimetsu No Yaiba)(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Vibe Anime",
    },
    {
        "nome_artista": "Novatroop", 
        "nome_musica": "Combustão",
        "capa": "https://i.ytimg.com/vi/N4WCFr_mxa4/maxresdefault.jpg",
        "mp3": "Audio/Combustão _ Novatroop _ Jogo (Jujutsu Kaisen)(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Vibe Anime",
    },
    {
        "nome_artista": "Novatroop", 
        "nome_musica": "Divina Facínora",
        "capa": "https://i.ytimg.com/vi/AZN31IeOePs/maxresdefault.jpg",
        "mp3": "Audio/Divina Facínora _ Novatroop _ Sukuna (Jujutsu Kaisen)(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Vibe Anime",
    },
    {
        "nome_artista": "Bazzi", 
        "nome_musica": "Myself",
        "capa": "https://i.ytimg.com/vi/VgKjHh1Y-1Y/mqdefault.jpg",
        "mp3": "Audio/Classroom of the Elite「AMV」 __ Myself _Tradução-Legendado_(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Pop",
    },
    {
        "nome_artista": "VMZ", 
        "nome_musica": "Retorno Rengoku 🔥",
        "capa": "https://i.ytimg.com/vi/-J_77fQLUgs/maxresdefault.jpg",
        "mp3": "Audio/VMZ - Retorno Rengoku 🔥 _ Prod. Blxck(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Vibe Anime",
    },
    {
        "nome_artista": "Taka", 
        "nome_musica": "Faces da Morte",
        "capa": "https://i.ytimg.com/vi/FuUXZt_uZFo/maxresdefault.jpg",
        "mp3": "Audio/Taka - Faces da Morte(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Vibe Anime",
    }, 
    {
        "nome_artista": "Taka", 
        "nome_musica": "Lua de Neon",
        "capa": "https://i.ytimg.com/vi/f9U4v17rHr0/maxresdefault.jpg",
        "mp3": "Audio/Taka - Lua de Neon - Feat. _AnnyTHN(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Vibe Anime",
    },
    {
        "nome_artista": "VMZ", 
        "nome_musica": "Chainsaw Man",
        "capa": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ64Njjwnr_u9aou0iANzM8EoCxKhcnZoEWEw&s",
        "mp3": "Audio/VMZ - Chainsaw Man --(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Vibe Anime",
    },
    {
        "nome_artista": "VMZ", 
        "nome_musica": "Komi San",
        "capa": "https://i.ytimg.com/vi/YHY47mbLKpY/maxresdefault.jpg",
        "mp3": "Audio/VMZ - Komi San(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Vibe Anime",
    },
    {
        "nome_artista": "VMZ", 
        "nome_musica": "Kitsune 🦊",
        "capa": "https://i.ytimg.com/vi/oWPjk0QPtko/maxresdefault.jpg",
        "mp3": "Audio/VMZ - Kitsune 🦊 _ Prod. Jow Santh(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Vibe Anime",
    },
    {
        "nome_artista": "VMZ", 
        "nome_musica": "Bad Girl",
        "capa": "https://i.ytimg.com/vi/feDO03yR26Q/maxresdefault.jpg",
        "mp3": "Audio/VMZ - Bad Girl -- _ Lyric Vídeo _ Prod. Jow Santh(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Vibe Anime",
    },
    {
        "nome_artista": "VMZ", 
        "nome_musica": "Rei dos Piratas",
        "capa": "https://i.ytimg.com/vi/JI_YpNRmMek/maxresdefault.jpg",
        "mp3": "Audio/VMZ - Rei dos Piratas _ Prod. Jow Santh(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Vibe Anime",
    },
    {
        "nome_artista": "VMZ", 
        "nome_musica": "Suzume",
        "capa": "https://i.ytimg.com/vi/ga2qksrzVUc/maxresdefault.jpg",
        "mp3": "Audio/VMZ - Suzume(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Vibe Anime",
    },
    {
        "nome_artista": "VMZ", 
        "nome_musica": "Meu Pecado",
        "capa": "https://i.ytimg.com/vi/XOol5VTkuTo/maxresdefault.jpg",
        "mp3": "Audio/VMZ - Meu Pecado _ Lyric Vídeo(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Vibe Anime",
    },
    {
        "nome_artista": "VMZ", 
        "nome_musica": "Seu Harlequin",
        "capa": "https://i.ytimg.com/vi/pMIlBTJlcu8/maxresdefault.jpg",
        "mp3": "Audio/VMZ - Seu Harlequin _ Lyric Vídeo _ Feat. Carol Brasil(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Vibe Anime",
    },
    {
        "nome_artista": "VMZ", 
        "nome_musica": "Lois Lane",
        "capa": "https://i.ytimg.com/vi/NfgY6JPwLlA/maxresdefault.jpg",
        "mp3": "Audio/VMZ - Lois Lane _ Versão Guia(M4A_128K).m4a", 
        "like": "none",
        "tipo": "R&B/Soul",
    },
    {
        "nome_artista": "VMZ", 
        "nome_musica": "Cereja",
        "capa": "https://i.ytimg.com/vi/DbqJThKZLj8/maxresdefault.jpg",
        "mp3": "Audio/VMZ - Cereja -- _ Versão Acústica(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Vibe Anime"
    },
    {
        "nome_artista": "VMZ", 
        "nome_musica": "Tô Indo Embora",
        "capa": "https://i.ytimg.com/vi/BjzmYGkP5VM/maxresdefault.jpg",
        "mp3": "Audio/VMZ - Tô Indo Embora _ Lyric Vídeo(M4A_128K).m4a", 
        "like": "none",
        "tipo": "R&B/Soul",
    },
    {
        "nome_artista": "VMZ", 
        "nome_musica": "Essa Noite",
        "capa": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcpl2-ICQQ0p7hP9MbgwTshvnF5vfVsnKSLw&s",
        "mp3": "Audio/VMZ - Essa Noite (Prod. Syndrome)(M4A_128K).m4a", 
        "like": "none",
        "tipo": "R&B/Soul",
    },
    {
        "nome_artista": "VMZ", 
        "nome_musica": "Não Me Ligue Mais",
        "capa": "https://i.ytimg.com/vi/NqMDYjXNiiI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCmUn4Zec1fSaJVR8pbac0jsFQzCg",
        "mp3": "Audio/VMZ - Não Me Ligue Mais _ Versão Acústica(M4A_128K).m4a", 
        "like": "none",
        "tipo": "R&B/Soul",
    },
    {
        "nome_artista": "VMZ", 
        "nome_musica": "Por Nós Dois",
        "capa": "https://i.ytimg.com/vi/vYFPQLZDbpc/maxresdefault.jpg",
        "mp3": "Audio/VMZ - Por Nós Dois _ Lyric Vídeo(M4A_128K).m4a", 
        "like": "none",
        "tipo": "R&B/Soul",
    },
    {
        "nome_artista": "VMZ", 
        "nome_musica": "Marionetes",
        "capa": "https://i.ytimg.com/vi/jeHl3oG6pmI/maxresdefault.jpg",
        "mp3": "Audio/VMZ - Marionetes _ Versão Acústica(M4A_128K).m4a", 
        "like": "none",
        "tipo": "R&B/Soul",
    },
    {
        "nome_artista": "VMZ", 
        "nome_musica": "Sua Ausência",
        "capa": "https://i.ytimg.com/vi/4KSlLjIUgfs/maxresdefault.jpg",
        "mp3": "Audio/VMZ - Sua Ausência _ Lyric Vídeo(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Vibe Anime",
    },
    {
        "nome_artista": "VMZ", 
        "nome_musica": "Sete dias",
        "capa": "https://i.ytimg.com/vi/-hsT2Z8wwxs/maxresdefault.jpg",
        "mp3": "Audio/VMZ - Sete dias (prod. MISERY)(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Vibe Anime",
    },
    {
        "nome_artista": "kessoku band", 
        "nome_musica": "If I could be a constellation",
        "capa": "https://preview.redd.it/bocchi-the-rock-character-appreciation-analysis-vol-iii-v0-p8y1m100ifaa1.png?width=1920&format=png&auto=webp&s=4d45b9cb714609184faf323b2e4286b584a34457",
        "mp3": "Audio/If I could be a constellation(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Pop",
    },
    {
        "nome_artista": "kessoku band", 
        "nome_musica": "That band",
        "capa": "https://static.animecorner.me/2022/02/bocchi-rock-ryo-yamada.jpg",
        "mp3": "Audio/That band(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Pop",
    },
    {
        "nome_artista": "kessoku band", 
        "nome_musica": "Never forget",
        "capa": "https://steamuserimages-a.akamaihd.net/ugc/5094165732985238703/0ACC332ED4B8175D5D961BDA6356793865281402/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
        "mp3": "Audio/Never forget(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Pop",
    },
    {
        "nome_artista": "kessoku band", 
        "nome_musica": "Guitar, Loneliness and Blue Planet",
        "capa": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh-tctQs2wv25NhcmOJlFhd0GNDMSRI3yufg&s",
        "mp3": "Audio/Guitar_ Loneliness and Blue Planet(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Pop",
    },
    {
        "nome_artista": "kessoku band", 
        "nome_musica": "BOCCHI THE ROCK - Opening",
        "capa": "https://i.ytimg.com/vi/dlSbEP4V-gI/maxresdefault.jpg",
        "mp3": "Audio/BOCCHI THE ROCK_ - Opening _ Seishun Complex(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Openings",
    },{
        "nome_artista": "kessoku band", 
        "nome_musica": "Bocchi's Solo",
        "capa": "https://i.ytimg.com/vi/QjmnsAWGm8E/maxresdefault.jpg",
        "mp3": "Audio/Bocchi_s Solo _ BOCCHI THE ROCK_(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Pop",
    },
    {
        "nome_artista": "Bunny Girl", 
        "nome_musica": "lofi hiphop and lofi remix",
        "capa": "https://i.ytimg.com/vi/g7Luv9ibHWg/maxresdefault.jpg",
        "mp3": "Audio/Bunny Girl Senpai _ lofi hiphop and lofi remix(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Lo-Fi",
    },
    {
        "nome_artista": "kaguya-sama", 
        "nome_musica": "Season 2 Opening",
        "capa": "https://i.ytimg.com/vi/IUlhv9ZWK28/maxresdefault.jpg",
        "mp3": "Audio/Kaguya-sama_ Love is War Season 2 Opening Full『Masayuki Suzuki ft. Airi Suzuki - DADDY_ DADDY_ DO_』(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Openings",
    },
    {
        "nome_artista": "kaguya-sama", 
        "nome_musica": "Opening 1",
        "capa": "https://i.ytimg.com/vi/WZof19wk4Ec/maxresdefault.jpg",
        "mp3": "Audio/Kaguya-sama_ Love is War - Opening 1 [4K 60FPS _ Creditless _ CC](M4A_128K).m4a", 
        "like": "none",
        "tipo": "Openings",
    },
    {
        "nome_artista": "kaguya-sama", 
        "nome_musica": "Ending 2",
        "capa": "https://i.ytimg.com/vi/eqjFmsZGBSc/maxresdefault.jpg",
        "mp3": "Audio/Kaguya-sama_ Love is War Ending 2 (4k 60FPS)┃Creditless(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Endings",
    },
    {
        "nome_artista": "kaguya-sama", 
        "nome_musica": "Opening Theme",
        "capa": "https://i.ytimg.com/vi/lTlzDfhPtFA/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGwgQChyMA8=&rs=AOn4CLBIV4ziUmaycGfqnWUfCmZeHKF1eg",
        "mp3": "Audio/Kaguya-sama_ Love Is War__ Opening Theme (Limited Time Only)(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Openings",
    },
    {
        "nome_artista": "Chainsaw Man", 
        "nome_musica": "Opening",
        "capa": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHXcMxXt7yd-6cWOonIlEQZYHCcmwBKZ3R2A&s",
        "mp3": "Audio/『チェンソーマン』ノンクレジットオープニング _ CHAINSAW MAN  Opening│米津玄師 「KICK BACK」(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Openings",
    },
    {
        "nome_artista": "Chainsaw Man", 
        "nome_musica": "Ending 8",
        "capa": "https://i.ytimg.com/vi/6ej4gHhUzek/maxresdefault.jpg",
        "mp3": "Audio/『チェンソーマン』第８話ノンクレジットエンディング _ CHAINSAW MAN _8 Ending│TK from 凛として時雨「first death」(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Endings",
    },
    {
        "nome_artista": "Chainsaw Man", 
        "nome_musica": "Kick Back but is it okay if it's lofi",
        "capa": "https://i.ytimg.com/vi/f2ELU8R5k6I/maxresdefault.jpg",
        "mp3": "Audio/Kick Back but is it okay if it_s lofi_(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Lo-Fi",
    },
    {
        "nome_artista": "Oshi no Ko", 
        "nome_musica": "STAR☆T☆RAIN",
        "capa": "https://cdn.ome.lt/DzjDfb2soPNe-XZ5QDJvt2O03X8=/570x0/smart/uploads/conteudo/fotos/oshi-no-ko-capa.jpg",
        "mp3": "Audio/【推しの子】STAR☆T☆RAIN_新生B小町【第十一話「アイドル」挿入歌】(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Vibe Anime",
    },
    {
        "nome_artista": "Oshi no Ko", 
        "nome_musica": "Sign wa B",
        "capa": "https://m.media-amazon.com/images/S/pv-target-images/32ec3362fa1fde0657657d94ec839dc89f479cd8d3b28f8f8cee2adc74e93165._SX1080_FMjpg_.jpg",
        "mp3": "Audio/MAD ライブ音響【推しの子】Ｂ小町「サインはＢ」４Ｋ６０ｆｐｓ高画質(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Vibe Anime",
    },
    {
        "nome_artista": "Oshi no Ko", 
        "nome_musica": "Ending 【Mephisto】",
        "capa": "https://i.ytimg.com/vi/plKHkrVcBxU/maxresdefault.jpg",
        "mp3": "Audio/Oshi no Ko - Ending 【Mephisto】 4K _ UHD Creditless _ CC(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Endings",
    },
    {
        "nome_artista": "Oshi no Ko", 
        "nome_musica": "Opening 【Idol】",
        "capa": "https://static.animecorner.me/2023/04/FthGCPPWYAAjSNp.jpg",
        "mp3": "Audio/Oshi no Ko Opening (4k 60FPS)┃Creditless(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Openings",
    },
    {
        "nome_artista": "Oshi no Ko", 
        "nome_musica": "Lo-Fi",
        "capa": "https://i.ytimg.com/vi/lY3RfjP8HFo/maxresdefault.jpg",
        "mp3": "Audio/Oshi No Ko lo-fi(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Lo-Fi",
    },
    {
        "nome_artista": "$UICIDEBOY", 
        "nome_musica": "Putrid Pride",
        "capa": "https://i.ytimg.com/vi/FfImsmupqG4/maxresdefault.jpg",
        "mp3": "Audio/$UICIDEBOY_ - Putrid Pride(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Trap",
    },
    {
        "nome_artista": "$UICIDEBOY", 
        "nome_musica": "NOT EVEN GHOSTS ARE THIS EMPTY",
        "capa": "https://i.ytimg.com/vi/SDv5WDcjPHM/maxresdefault.jpg",
        "mp3": "Audio/$UICIDEBOY_ X JUJUSU KAISEN - NOT EVEN GHOSTS ARE THIS EMPTY(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Trap",
    },
    {
        "nome_artista": "ONI INC", 
        "nome_musica": "MY OPINION",
        "capa": "https://i.ytimg.com/vi/VvInV1hzexQ/maxresdefault.jpg",
        "mp3": "Audio/ONI INC._ Julian _moke - MY OPINION(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Trap",
    },
    {
        "nome_artista": "「AMV」", 
        "nome_musica": "Crazy In Love",
        "capa": "https://i.ytimg.com/vi/iBuXUinJi3c/maxresdefault.jpg",
        "mp3": "Audio/Crazy In Love「AMV」(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Pop",
    },
    {
        "nome_artista": "CHRIS RAIN", 
        "nome_musica": "JEALOUSY",
        "capa": "https://i.ytimg.com/vi/G5aqVNP1XOQ/maxresdefault.jpg",
        "mp3": "Audio/CHRIS RAIN - JEALOUSY [Lyrics x AMV](M4A_128K).m4a", 
        "like": "none",
        "tipo": "Pop",
    },
    {
        "nome_artista": "CHRIS RAIN", 
        "nome_musica": "HATE ME",
        "capa": "https://i.ytimg.com/vi/c5V79A867y4/maxresdefault.jpg",
        "mp3": "Audio/CHRIS RAIN - HATE ME [Lyrics x AMV](M4A_128K).m4a", 
        "like": "none",
        "tipo": "Pop",
    },
    {
        "nome_artista": "CHRIS RAIN", 
        "nome_musica": "4 WALLS",
        "capa": "https://i.ytimg.com/vi/fFOj2sQiKUo/maxresdefault.jpg",
        "mp3": "Audio/CHRIS RAIN - 4 WALLS [Lyrics x AMV](M4A_128K).m4a", 
        "like": "none",
        "tipo": "Pop",
    },
    {
        "nome_artista": "CHRIS RAIN", 
        "nome_musica": "CENTIPEDE",
        "capa": "https://i.ytimg.com/vi/ngNVb_CnV_8/maxresdefault.jpg",
        "mp3": "Audio/CHRIS RAIN - CENTIPEDE [Lyrics x AMV](M4A_128K).m4a", 
        "like": "none",
        "tipo": "Pop",
    },
    {
        "nome_artista": "CHRIS RAIN", 
        "nome_musica": "FIRST DATE",
        "capa": "https://i.ytimg.com/vi/A-Wur2BwQIE/maxresdefault.jpg",
        "mp3": "Audio/CHRIS RAIN - FIRST DATE _ AMV(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Pop",
    },
    {
        "nome_artista": "CHRIS RAIN", 
        "nome_musica": "OUTSIDER",
        "capa": "https://i.ytimg.com/vi/GPPk9spIuPI/maxresdefault.jpg",
        "mp3": "Audio/CHRIS RAIN - OUTSIDER [Lyrics x AMV](M4A_128K).m4a", 
        "like": "none",
        "tipo": "Pop",
    },
    {
        "nome_artista": "Eve", 
        "nome_musica": "いのちの食べ方 (How to Eat Life)",
        "capa": "https://i.ytimg.com/vi/U7L-3VXAkSA/maxresdefault.jpg",
        "mp3": "Audio/いのちの食べ方 - Eve MV(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Pop",
    }, 
    {
        "nome_artista": "Eve", 
        "nome_musica": "ドラマツルギー (Dramaturgy)",
        "capa": "https://i.ytimg.com/vi/jJzw1h5CR-I/maxresdefault.jpg",
        "mp3": "Audio/ドラマツルギー - Eve MV(Live Film ver.)(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Pop",
    },
    {
        "nome_artista": "Eve", 
        "nome_musica": "ファイトソング (Fight Song)",
        "capa": "https://i.ytimg.com/vi/2eOg5DoYuwU/maxresdefault.jpg",
        "mp3": "Audio/ファイトソング (Fight Song) - Eve Music Video(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Pop",
    }, 
    {
        "nome_artista": "Eve", 
        "nome_musica": "ラストダンス (Last Dance)",
        "capa": "https://i.ytimg.com/vi/CLdeykXCZX4/maxresdefault.jpg",
        "mp3": "Audio/ラストダンス - Eve MV(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Pop",
    }, 
    {
        "nome_artista": "Eve", 
        "nome_musica": "レーゾンデートル (Raison d'etre)",
        "capa": "https://i.ytimg.com/vi/ulfY8WQE_HE/maxresdefault.jpg",
        "mp3": "Audio/レーゾンデートル - Eve MV(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Pop",
    }, 
    {
        "nome_artista": "Eve", 
        "nome_musica": "夜は仄か",
        "capa": "https://i.ytimg.com/vi/9Y0_CVX1hok/sddefault.jpg?v=6157414c",
        "mp3": "Audio/夜は仄か - Eve MV(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Pop",
    },
    {
        "nome_artista": "Eve", 
        "nome_musica": "廻廻奇譚 (Strange tales of the past)",
        "capa": "https://i.ytimg.com/vi/E5hX30d5lAE/maxresdefault.jpg",
        "mp3": "Audio/廻廻奇譚 - Eve CGMV(Adam by Eve ver.)(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Pop",
    }, 
    {
        "nome_artista": "Eve", 
        "nome_musica": "暴徒",
        "capa": "https://i.ytimg.com/vi/8McISUEXb9g/maxresdefault.jpg",
        "mp3": "Audio/暴徒 - Eve MV(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Pop",
    }, 
    {
        "nome_artista": "Eve", 
        "nome_musica": "⻁狼来 (Kororon)",
        "capa": "https://i.ytimg.com/vi/MLi6PzOZfm4/maxresdefault.jpg",
        "mp3": "Audio/⻁狼来 (Kororon) - Eve Official Audio(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Pop",
    },
    {
        "nome_artista": "Beethoven", 
        "nome_musica": "Sonata ao Luar",
        "capa": "https://blog.fritzdobbert.com.br/wp-content/uploads/2020/10/648x430_SonataAoLuar-648x410.png",
        "mp3": "Audio/Beethoven - Sonata ao Luar (Moonlight Sonata)(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Clássica",
    },
    {
        "nome_artista": "Koe no Katachi", 
        "nome_musica": "OST 37 (SLT)",
        "capa": "https://i.ytimg.com/vi/YuHhKFhVkMs/maxresdefault.jpg",
        "mp3": "Audio/[聲の形] OST 37 (SLT) Koe no Katachi [Piano cover] - Synthesia Tutorial- [ピアノ](M4A_128K).m4a", 
        "like": "none",
        "tipo": ("Clássica" || "Vibe Anime"),
    },
    {
        "nome_artista": "Black Clover", 
        "nome_musica": "Black Rover",
        "capa": "https://i.ytimg.com/vi/dUiDZJMPh-s/maxresdefault.jpg",
        "mp3": "Audio/Black Clover - Opening 3 (HD)(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Openings",
    },
    {
        "nome_artista": "Black Clover", 
        "nome_musica": "Guess Who Is Back",
        "capa": "https://i.ytimg.com/vi/cK9Z9Zcuso0/maxresdefault.jpg",
        "mp3": "Audio/Black Clover - Opening 4 (HD)(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Openings",
    },
    {
        "nome_artista": "Cyberpunk Edgerunners", 
        "nome_musica": "Let You Down",
        "capa": "https://i.ytimg.com/vi/BnnbP7pCIvQ/maxresdefault.jpg",
        "mp3": "Audio/Cyberpunk_ Edgerunners _ Ending Theme _ Let You Down by Dawid Podsiadło _ Netflix(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Endings",
    },
    {
        "nome_artista": "Dr. Stone", 
        "nome_musica": "Where Do We Go",
        "capa": "https://i.ytimg.com/vi/gvVo_gjXMEM/maxresdefault.jpg",
        "mp3": "Audio/Dr. STONE NEW WORLD - Ending _ Where Do We Go_(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Endings",
    },
    {
        "nome_artista": "Dr. Stone", 
        "nome_musica": "Rukuen",
        "capa": "https://i.ytimg.com/vi/fkAL_LeCsZs/maxresdefault.jpg",
        "mp3": "Audio/Dr. Stone Season 2 - Opening Full『Rakuen』by Fujifabric(M4A_128K).m4a", 
        "like": "none",
        "tipo": "Openings",
    },
    {
        "nome_artista": "Erix", 
        "nome_musica": "Brinca com meu coração",
        "capa": "https://i.ytimg.com/vi/YfQMYhyxCXw/mqdefault.jpg",
        "mp3": "Audio/Erix - Brinca com meu coração (prod. Uxie Kid)(M4A_128K).m4a", 
        "like": "none",
        "tipo": "R&B/Soul",
    },
    {
        "nome_artista": "Wesley Black", 
        "nome_musica": "King Of The World",
        "capa": "https://i.ytimg.com/vi/xvoxbHn_j08/maxresdefault.jpg",
        "mp3": "Audio/Wesley Black - King Of The World(MP3_160K).mp3", 
        "like": "none",
        "tipo": "Pop",
    },
];
var newLista = []; 

// FUNÇÃO QUE PESQUISA NA LISTA
function pesquisar() {
    identificador = 1;
    let texto = String(inputText.value).toLocaleLowerCase();
    preView.innerHTML = '';

    for(let x = 0; x < listaDeMusicas.length; x++) {
        if (texto == listaDeMusicas[x].nome_artista.toLocaleLowerCase() || texto == listaDeMusicas[x].nome_musica.toLocaleLowerCase() || texto == listaDeMusicas[x].tipo.toLocaleLowerCase()) {
            preView.appendChild(document.createElement('li')).innerHTML = `<img class="small-music-image" src="${listaDeMusicas[x].capa}"></img><p onclick="adicionarPlaylist(${x})" >${listaDeMusicas[x].nome_artista} - ${listaDeMusicas[x].nome_musica}</p>`;
        }
    }
};

// ADICIONANDO MÚSICAS NA PLAYLIST
let algo = 0;
function adicionarPlaylist(musica) {
    playlist.innerHTML = '';
    newLista.push(listaDeMusicas[musica]);
    let numeroId = 0;

    for (let x = 0; x < newLista.length; x++) {
        playlist.appendChild(document.createElement('li')).innerHTML = `<img class="small-music-image" src="${newLista[x].capa}"></img><p id="musicaDaPlaylist${numeroId}" onclick="clickMusic(${x})">${newLista[x].nome_artista} - ${newLista[x].nome_musica}</p>`;
        numeroId++
    }
    listaDeMusicas.splice(musica, 1);
    pesquisar();

    if (algo == 0){
        audio.src = newLista[numberMuisc].mp3;
        imageMusicInArtista.src = newLista[numberMuisc].capa;
        algo++
    } else {}
    styeMusicAtual(numberMuisc, numberMuisc);
}
// MUDANDO ESTILO DO MUSICA ATUAL

function styeMusicAtual(posicaoAnterior, posicaoAtual) {
    let musicaAtual = window.document.getElementById(`musicaDaPlaylist${posicaoAtual}`);
    let musicaAnterior = window.document.getElementById(`musicaDaPlaylist${posicaoAnterior}`);

    musicaAnterior.style.color = "whitesmoke";
    musicaAnterior.style.textShadow = "";
    musicaAtual.style.color = "#6042c6d7";
    musicaAtual.style.textShadow = "0px 0px 5px #262d4c"
}

// BOTÕES DE PLAY E PAUSE
play_botao.style.display = "block";
function playPause() {
    styeMusicAtual(numberMuisc, numberMuisc);
    if (play_botao.style.display == "block") {
        audio.play();
        play_botao.style.display = "none";
        pause_botao.style.display = "block";
        MP3.style.animation = "bordalad 4s ease-in-out infinite";
        capaMp3.style.animation = "bordalad 4s ease-in-out infinite";
    } else {
        audio.pause();
        play_botao.style.display = "block";
        pause_botao.style.display = "none";
        MP3.style.animation = "3s";
        capaMp3.style.animation = "3s";
    }
};
// FUNÇÃO PARRA AVANÇAR E RETROCEDER A MUSICA

function nextMusic() {
    let tamanhoLista = newLista.length;
    tamanhoLista -= 1;

    if (numberMuisc >= tamanhoLista) {
        numberMuisc = 0;
    } else {
        numberMuisc += 1;
    }

    audio.src = newLista[numberMuisc].mp3;
    imageMusicInArtista.src = newLista[numberMuisc].capa;
    play_botao.style.display = "none";
    pause_botao.style.display = "block";
    audio.play();

    styeMusicAtual(Number(numberMuisc == 0 ? tamanhoLista : numberMuisc-1), numberMuisc);
    background.style.backgroundImage = `url(${newLista[numberMuisc].capa})`;
};

function backMusic() {
    let tamanhoLista = newLista.length;
    tamanhoLista -= 1;

    if (numberMuisc == 0) {
        numberMuisc = tamanhoLista;
    } else {
        numberMuisc -= 1;
    }

    audio.src = newLista[numberMuisc].mp3;
    imageMusicInArtista.src = newLista[numberMuisc].capa;
    play_botao.style.display = "none";
    pause_botao.style.display = "block";
    audio.play();

    styeMusicAtual(Number(numberMuisc ==  tamanhoLista ? 0 : numberMuisc+1), numberMuisc);
    background.style.backgroundImage = `url(${newLista[numberMuisc].capa})`;
};

function clickMusic(number) {

    styeMusicAtual(numberMuisc, number);

    numberMuisc = number

    audio.src = newLista[numberMuisc].mp3;
    imageMusicInArtista.src = newLista[numberMuisc].capa;
    play_botao.style.display = "none";
    pause_botao.style.display = "block";
    audio.play();
    background.style.backgroundImage = `url(${newLista[numberMuisc].capa})`;
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

// INTERAÇÃO COM O PLAYER DE MUSICA POR TECLAS

document.addEventListener('keydown', function(event) {
    switch (event.code) {
        case "Enter":
            return pesquisar();
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
