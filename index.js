
document.addEventListener("DOMContentLoaded", () => {

  const botonAuto = document.getElementById("btnAuto");
  const botonstonks = document.getElementById("btnstonks");
  const btnsyg = document.getElementById("btnsyg");


  if (btnsyg) {
    btnsyg.addEventListener("click", () => {
      window.location.href = "sygtb.html";
    }); sygtb.html
  }

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
