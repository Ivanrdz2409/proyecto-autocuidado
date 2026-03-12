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
let rolActual = "";

let seguidores = 0;
let salud = 12;
let cordura = 12;

let logros = [];

let historialEventos = [];
const MAX_HISTORIAL = 12;

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

{texto:"🔥 Trend peligroso aparece",opciones:[
{texto:"Hacerlo",seguidores:30,salud:-3,cordura:-1},
{texto:"Versión segura",seguidores:12,salud:-1},
{texto:"Ignorarlo",cordura:1}
]},

{texto:"💬 Hate masivo en comentarios",opciones:[
{texto:"Responder agresivo",seguidores:20,cordura:-2},
{texto:"Ignorar",cordura:1},
{texto:"Cerrar comentarios",seguidores:-5}
]},

{texto:"📹 Video viral inesperado",opciones:[
{texto:"Aprovechar fama",seguidores:40},
{texto:"Subir otro video",seguidores:20,salud:-1},
{texto:"Descansar",salud:2}
]},

{texto:"🎉 Colaboración con influencer famoso",opciones:[
{texto:"Aceptar reto extremo",seguidores:50,salud:-4},
{texto:"Colaboración tranquila",seguidores:25},
{texto:"Rechazar",cordura:1}
]},

{texto:"🧠 Crisis existencial",opciones:[
{texto:"Seguir publicando",seguidores:15,cordura:-3},
{texto:"Tomar descanso",salud:3,cordura:2},
{texto:"Video reflexivo",seguidores:10}
]},

{texto:"📱 Pasas 6 horas scrolleando",opciones:[
{texto:"Seguir",salud:-3},
{texto:"Cerrar app",cordura:1},
{texto:"Publicar algo",seguidores:8}
]},

{texto:"💰 Marca quiere patrocinarte",opciones:[
{texto:"Aceptar patrocinio",seguidores:35},
{texto:"Negociar",seguidores:25,cordura:-1},
{texto:"Rechazar",cordura:2}
]},

{texto:"📹 Te invitan a podcast",opciones:[
{texto:"Ir",seguidores:25},
{texto:"Decir algo polémico",seguidores:40,cordura:-2},
{texto:"Rechazar",cordura:1}
]},

{texto:"🔥 Drama entre influencers",opciones:[
{texto:"Meterte al drama",seguidores:35,cordura:-2},
{texto:"Opinar neutral",seguidores:10},
{texto:"Ignorar",cordura:1}
]},

{texto:"📸 Foto perfecta",opciones:[
{texto:"Editar mucho",seguidores:25,salud:-1},
{texto:"Subirla normal",seguidores:10},
{texto:"No subir",cordura:1}
]},

{texto:"📉 Pierdes seguidores por algoritmo",opciones:[
{texto:"Publicar más",seguidores:10,salud:-1},
{texto:"Ignorar",cordura:1},
{texto:"Cambiar contenido",seguidores:15}
]},

{texto:"📱 Nuevo trend extraño",opciones:[
{texto:"Intentarlo",seguidores:20,salud:-2},
{texto:"Versión segura",seguidores:10},
{texto:"Ignorarlo",cordura:1}
]},

{texto:"📸 Foto filtrada",opciones:[
{texto:"Explicarlo",seguidores:-10},
{texto:"Hacer meme",seguidores:15},
{texto:"Ignorar",cordura:1}
]},

{texto:"🎤 Te invitan a evento",opciones:[
{texto:"Ir",seguidores:30},
{texto:"Ir pero causar drama",seguidores:45,cordura:-2},
{texto:"Rechazar",cordura:1}
]},

{texto:"📱 Te obsesionas con likes",opciones:[
{texto:"Revisar cada minuto",seguidores:5,cordura:-2},
{texto:"Ignorarlo",cordura:2},
{texto:"Salir a caminar",salud:2}
]},

{texto:"🔥 Video polémico",opciones:[
{texto:"Publicarlo",seguidores:35,cordura:-2},
{texto:"Editar",seguidores:15},
{texto:"Eliminar",cordura:1}
]},

{texto:"📹 Fan te reconoce en la calle",opciones:[
{texto:"Foto con fan",seguidores:10},
{texto:"Ignorarlo",seguidores:-5},
{texto:"Hablar con él",cordura:1}
]},

{texto:"💻 Nuevo algoritmo aparece",opciones:[
{texto:"Adaptarte",seguidores:20},
{texto:"Ignorarlo",seguidores:-10},
{texto:"Estudiarlo",cordura:1}
]},

{texto:"📱 Tu video se vuelve meme",opciones:[
{texto:"Aprovechar",seguidores:25},
{texto:"Molestarte",cordura:-2},
{texto:"Ignorar",cordura:1}
]},

{texto:"🎬 Te ofrecen aparecer en serie",opciones:[
{texto:"Aceptar",seguidores:60},
{texto:"Negociar",seguidores:35},
{texto:"Rechazar",cordura:1}
]}

];

const eventosRaros = [

{texto:"💀 TE CANCELAN MASIVAMENTE",opciones:[
{texto:"Responder agresivo",seguidores:-50,cordura:-3},
{texto:"Pedir disculpas",seguidores:-20},
{texto:"Desaparecer unos días",cordura:3}
]},

{texto:"💻 TU CUENTA FUE HACKEADA",opciones:[
{texto:"Recuperarla",seguidores:-10},
{texto:"Crear drama",seguidores:30,cordura:-1},
{texto:"Nueva cuenta",seguidores:-30}
]},

{texto:"🔥 VIDEO ULTRA VIRAL",opciones:[
{texto:"Aprovechar",seguidores:120},
{texto:"Subir parte 2",seguidores:70},
{texto:"Descansar",salud:2}
]}

];

const eventosPorRol = {

"Gamer Pro 🎮":[
{texto:"🎮 Torneo online aparece",opciones:[
{texto:"Participar",seguidores:40,salud:-2},
{texto:"Streamearlo",seguidores:30},
{texto:"Ignorarlo",cordura:1}
]}
],

"TikToker de Bailes 💃":[
{texto:"💃 Nuevo trend de baile",opciones:[
{texto:"Aprender coreografía",seguidores:35,salud:-1},
{texto:"Improvisar",seguidores:20},
{texto:"Ignorar",cordura:1}
]}
]

};

rolBtn.addEventListener("click",()=>{

if(rolAsignado) return;

const randomRol = roles[Math.floor(Math.random()*roles.length)];

rolActual = randomRol;

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

let listaEventos = [...eventos];

if(eventosPorRol[rolActual]){
listaEventos = listaEventos.concat(eventosPorRol[rolActual]);
}

if(Math.random() < 0.15){
listaEventos = listaEventos.concat(eventosRaros);
}

let eventosDisponibles = listaEventos.filter(e => !historialEventos.includes(e.texto));

if(eventosDisponibles.length === 0){
historialEventos = [];
eventosDisponibles = listaEventos;
}

let evento = eventosDisponibles[Math.floor(Math.random()*eventosDisponibles.length)];

historialEventos.push(evento.texto);

if(historialEventos.length > MAX_HISTORIAL){
historialEventos.shift();
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
