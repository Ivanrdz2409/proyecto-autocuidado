const startBtn = document.getElementById("startBtn");

const modal1 = document.getElementById("modal1");
const modal2 = document.getElementById("modal2");

const nextModal = document.getElementById("nextModal");
const closeAll = document.getElementById("closeAll");

// Abrir primer modal
startBtn.addEventListener("click", () => {
  modal1.classList.remove("hidden");
});

// Pasar del modal 1 al modal 2
nextModal.addEventListener("click", () => {
  modal1.classList.add("hidden");
  modal2.classList.remove("hidden");
});

closeAll.addEventListener("click", () => {
  window.location.href = "menu.html";
});
