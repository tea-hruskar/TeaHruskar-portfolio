/*
  Burger meni prilagođen prema videu:
  Dani Krossing (2023), YouTube:
  https://www.youtube.com/watch?v=YSdMqb-Mk6Y
*/

document.querySelectorAll(".burger-menu").forEach((burgerMenu) => {
  const zaglavlje = burgerMenu.closest(".zaglavlje");
  const navigacija = zaglavlje.querySelector(".navigacija");

  burgerMenu.addEventListener("click", () => {
    navigacija.classList.toggle("otvoren");
  });

  navigacija.querySelectorAll("a").forEach((poveznica) => {
    poveznica.addEventListener("click", () => {
      navigacija.classList.remove("otvoren");
    });
  });
});
