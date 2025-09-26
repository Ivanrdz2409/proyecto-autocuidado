
document.addEventListener("DOMContentLoaded", () => {

  const botonAuto = document.getElementById("btnAuto");
  const botonstonks = document.getElementById("btnstonks");


  if (botonAuto) {
    botonAuto.addEventListener("click", () => {
      window.location.href = "atcdo.html";
    });
  }

  if (botonstonks) {
    botonstonks.addEventListener("click", () => {
      window.location.href = "atcdstonks.html";
    });
  }
})
