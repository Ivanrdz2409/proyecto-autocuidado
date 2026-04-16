document.addEventListener("DOMContentLoaded", () => {

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
window.location.href = "menu.html";
});
}

});

const instBtn = document.getElementById("instBtn");

if(instBtn){
instBtn.addEventListener("click", () => {
window.location.href = "instrucciones.html";
});
}