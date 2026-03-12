const roles = [

"Gamer Pro 🎮",
"Reina del Drama 🎭",
"Gurú Motivacional 💪",
"Influencer Fitness 🏋️",
"Conspiranoico 🛸",
"TikToker de Bailes 💃",
"Streamer Rage 😡",
"Influencer de Viajes ✈️",
"Experto en Life Hacks 🔧",
"Meme Lord 😂",
"Influencer Cancelado 🔥",
"Filósofo de Twitter 🧠",
"Influencer Fake 💄",
"Cringe Creator 😬",
"Influencer Fantasma 👻"

];

let rolAsignado = false;

let seguidores = 0;
let salud = 12;
let cordura = 12;

let logros = [];

const rolBtn = document.getElementById("rolBtn");
const rolDisplay = document.getElementById("rolDisplay");

const seguidoresDisplay = document.getElementById("seguidores");
const saludDisplay = document.getElementById("salud");
const corduraDisplay = document.getElementById("cordura");

const scrollBtn = document.getElementById("scrollBtn");
const eventoDisplay = document.getElementById("evento");
const opcionesDiv = document.getElementById("opciones");

const logrosDisplay = document.getElementById("logros");

const eventos = [

{
texto:"🔥 Trend peligroso aparece",
opciones:[
{texto:"Hacerlo",seguidores:30,salud:-3,cordura:-1},
{texto:"Versión segura",seguidores:12,salud:-1},
{texto:"Ignorarlo",cordura:1}
]
},

{
texto:"💬 Hate masivo en comentarios",
opciones:[
{texto:"Responder agresivo",seguidores:20,cordura:-2},
{texto:"Ignorar",cordura:1},
{texto:"Cerrar comentarios",seguidores:-5}
]
},

{
texto:"📹 Video viral inesperado",
opciones:[
{texto:"Aprovechar fama",seguidores:40},
{texto:"Subir otro video",seguidores:20,salud:-1},
{texto:"Descansar",salud:2}
]
},

{
texto:"🎉 Colaboración con influencer famoso",
opciones:[
{texto:"Aceptar reto extremo",seguidores:50,salud:-4},
{texto:"Colaboración tranquila",seguidores:25},
{texto:"Rechazar",cordura:1}
]
},

{
texto:"🧠 Crisis existencial",
opciones:[
{texto:"Seguir publicando",seguidores:15,cordura:-3},
{texto:"Tomar descanso",salud:3,cordura:2},
{texto:"Video reflexivo",seguidores:10}
]
},

{
texto:"📱 Pasas 6 horas scrolleando",
opciones:[
{texto:"Seguir",salud:-3},
{texto:"Cerrar app",cordura:1},
{texto:"Publicar algo",seguidores:8}
]
},

{
texto:"💰 Marca quiere patrocinarte",
opciones:[
{texto:"Aceptar patrocinio",seguidores:35},
{texto:"Negociar",seguidores:25,cordura:-1},
{texto:"Rechazar",cordura:2}
]
},

{
texto:"📹 Te invitan a podcast",
opciones:[
{texto:"Ir",seguidores:25},
{texto:"Decir algo polémico",seguidores:40,cordura:-2},
{texto:"Rechazar",cordura:1}
]
},

{
texto:"🔥 Drama entre influencers",
opciones:[
{texto:"Meterte al drama",seguidores:35,cordura:-2},
{texto:"Opinar neutral",seguidores:10},
{texto:"Ignorar",cordura:1}
]
},

{
texto:"📸 Foto perfecta",
opciones:[
{texto:"Editar mucho",seguidores:25,salud:-1},
{texto:"Subirla normal",seguidores:10},
{texto:"No subir",cordura:1}
]
}

];

const eventosRaros = [

{
texto:"💀 TE CANCELAN MASIVAMENTE",
opciones:[
{texto:"Responder agresivo",seguidores:-50,cordura:-3},
{texto:"Pedir disculpas",seguidores:-20},
{texto:"Desaparecer unos días",cordura:3}
]
},

{
texto:"💻 TU CUENTA FUE HACKEADA",
opciones:[
{texto:"Recuperarla",seguidores:-10},
{texto:"Crear drama",seguidores:30,cordura:-1},
{texto:"Nueva cuenta",seguidores:-30}
]
},

{
texto:"🔥 VIDEO ULTRA VIRAL",
opciones:[
{texto:"Aprovechar",seguidores:120},
{texto:"Subir parte 2",seguidores:70},
{texto:"Descansar",salud:2}
]
},

{
texto:"📂 FILTRAN TUS MENSAJES",
opciones:[
{texto:"Negarlo",seguidores:-20},
{texto:"Hacer meme",seguidores:20},
{texto:"Desaparecer",cordura:2}
]
}

];

rolBtn.addEventListener("click",()=>{

if(rolAsignado) return;

const randomRol = roles[Math.floor(Math.random()*roles.length)];

rolDisplay.innerText = "Tu rol: " + randomRol;

rolAsignado = true;

eventoDisplay.innerText="Empieza tu carrera como influencer";

});

scrollBtn.addEventListener("click",()=>{

if(!rolAsignado){

alert("Primero genera tu rol");
return;

}

generarEvento();

});

function generarEvento(){

opcionesDiv.innerHTML="";

let evento;

if(Math.random() < 0.15){

evento = eventosRaros[Math.floor(Math.random()*eventosRaros.length)];

}else{

evento = eventos[Math.floor(Math.random()*eventos.length)];

}

eventoDisplay.innerText = evento.texto;

evento.opciones.forEach(opcion=>{

const btn = document.createElement("button");

btn.classList.add("opcionBtn");

btn.innerText = opcion.texto;

btn.onclick = ()=>{

aplicarConsecuencias(opcion);

};

opcionesDiv.appendChild(btn);

});

}

function aplicarConsecuencias(opcion){

let bonus = Math.floor(seguidores / 100);

seguidores += (opcion.seguidores || 0) + bonus;
salud += opcion.salud || 0;
cordura += opcion.cordura || 0;

if(seguidores < 0) seguidores = 0;

checkLogros();

updateStats();

opcionesDiv.innerHTML="";

eventoDisplay.innerText="Sigue scrolleando...";

}

function updateStats(){

seguidoresDisplay.innerText = seguidores;
saludDisplay.innerText = salud;
corduraDisplay.innerText = cordura;

if(salud <=0 || cordura <=0){

finalJuego();

}

}

function checkLogros(){

if(seguidores >= 100 && !logros.includes("💯 Micro Influencer")){
logros.push("💯 Micro Influencer");
}

if(seguidores >= 500 && !logros.includes("🌟 Influencer Viral")){
logros.push("🌟 Influencer Viral");
}

if(seguidores >= 1000 && !logros.includes("👑 Celebridad de Internet")){
logros.push("👑 Celebridad de Internet");
}

if(logrosDisplay){
logrosDisplay.innerText = logros.join(" | ");
}

}

function finalJuego(){

let finalTexto="";

if(seguidores >= 1000){

finalTexto="👑 Terminaste como una SUPER CELEBRIDAD";

}
else if(seguidores >= 300){

finalTexto="🌟 Terminaste como influencer famoso";

}
else{

finalTexto="📱 Terminaste siendo un creador pequeño";

}

alert(finalTexto + "\nSeguidores finales: " + seguidores);

location.reload();

}

const startBtn = document.getElementById("startBtn");

const modal1 = document.getElementById("modal1");
const modal2 = document.getElementById("modal2");

const nextModal = document.getElementById("nextModal");
const closeAll = document.getElementById("closeAll");

if(startBtn){
startBtn.addEventListener("click", () => {
modal1.classList.remove("hidden");
});
}

if(nextModal){
nextModal.addEventListener("click", () => {
modal1.classList.add("hidden");
modal2.classList.remove("hidden");
});
}

if(closeAll){
closeAll.addEventListener("click", () => {
window.location.href = "index.html";
});
}