document.addEventListener("DOMContentLoaded", () => {

/* --------------------------
VARIABLES DEL JUEGO
-------------------------- */

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

/* --------------------------
ELEMENTOS DEL MENU (JUEGO)
-------------------------- */

const rolBtn = document.getElementById("rolBtn");
const rolDisplay = document.getElementById("rolDisplay");

const seguidoresDisplay = document.getElementById("seguidores");
const saludDisplay = document.getElementById("salud");
const corduraDisplay = document.getElementById("cordura");

const scrollBtn = document.getElementById("scrollBtn");
const eventoDisplay = document.getElementById("evento");
const opcionesDiv = document.getElementById("opciones");

/* --------------------------
EVENTOS DEL JUEGO
-------------------------- */

const eventos = [

{
texto:"🔥 Trend peligroso aparece en redes",
opciones:[
{texto:"Hacer el trend arriesgado", seguidores:30, salud:-3, cordura:-1},
{texto:"Hacer versión segura", seguidores:10, salud:-1, cordura:0},
{texto:"Ignorarlo", seguidores:0, salud:0, cordura:1}
]
},

{
texto:"💬 Hate masivo en comentarios",
opciones:[
{texto:"Responder agresivamente", seguidores:20, cordura:-2},
{texto:"Ignorar comentarios", seguidores:-5, cordura:1},
{texto:"Cerrar comentarios", seguidores:-10, salud:1}
]
},

{
texto:"📱 Te quedas editando toda la noche",
opciones:[
{texto:"Subir video perfecto", seguidores:25, salud:-3},
{texto:"Subir video normal", seguidores:10, salud:-1},
{texto:"Dormir mejor", seguidores:-5, salud:2}
]
},

{
texto:"🎉 Colaboración con influencer famoso",
opciones:[
{texto:"Aceptar reto extremo", seguidores:40, salud:-4, cordura:-1},
{texto:"Colaboración tranquila", seguidores:20},
{texto:"Rechazar", seguidores:0, cordura:1}
]
},

{
texto:"🧠 Crisis existencial por redes",
opciones:[
{texto:"Seguir publicando", seguidores:15, cordura:-3},
{texto:"Tomar descanso", seguidores:-10, salud:2, cordura:2},
{texto:"Hacer video reflexivo", seguidores:10, cordura:1}
]
}

];

/* --------------------------
GENERAR ROL
-------------------------- */

if(rolBtn){

rolBtn.addEventListener("click",()=>{

if(rolAsignado) return;

const randomRol = roles[Math.floor(Math.random()*roles.length)];

rolDisplay.innerText = "Tu rol: " + randomRol;

rolAsignado = true;

eventoDisplay.innerText="Ahora puedes empezar a hacer scroll";

});

}

/* --------------------------
SCROLL
-------------------------- */

if(scrollBtn){

scrollBtn.addEventListener("click",()=>{

if(!rolAsignado){
alert("Primero genera tu rol");
return;
}

generarEvento();

});

}

function generarEvento(){

if(!opcionesDiv) return;

opcionesDiv.innerHTML="";

const evento = eventos[Math.floor(Math.random()*eventos.length)];

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

/* --------------------------
CONSECUENCIAS
-------------------------- */

function aplicarConsecuencias(opcion){

seguidores += opcion.seguidores || 0;
salud += opcion.salud || 0;
cordura += opcion.cordura || 0;

if(seguidores < 0) seguidores = 0;

updateStats();

opcionesDiv.innerHTML="";

eventoDisplay.innerText="Desliza para el siguiente evento";

}

function updateStats(){

if(seguidoresDisplay) seguidoresDisplay.innerText = seguidores;
if(saludDisplay) saludDisplay.innerText = salud;
if(corduraDisplay) corduraDisplay.innerText = cordura;

if(salud <=0 || cordura <=0){

alert("💀 Tu vida influencer colapsó. Seguidores finales: "+seguidores);

location.reload();

}

}

/* --------------------------
MODALES DEL INDEX
-------------------------- */

const startBtn = document.getElementById("startBtn");
const modal1 = document.getElementById("modal1");
const modal2 = document.getElementById("modal2");
const nextModal = document.getElementById("nextModal");
const closeAll = document.getElementById("closeAll");

if(startBtn){
startBtn.addEventListener("click",()=>{
modal1.classList.remove("hidden");
});
}

if(nextModal){
nextModal.addEventListener("click",()=>{
modal1.classList.add("hidden");
modal2.classList.remove("hidden");
});
}

if(closeAll){
closeAll.addEventListener("click",()=>{
window.location.href = "menu.html";
});
}

});
