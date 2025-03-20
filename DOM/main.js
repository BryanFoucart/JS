let lien = document.createElement("a");
lien.setAttribute("href", "https://google.fr");
// lien.innerHTML = "voir mon site"; à éviter pour la sécurité (possibilité d'entrer <script></script>)
lien.textContent = "voir mon site";

// lien.addEventListener("mouseover", () => {
//   lien.classList.toggle("perso");
// });

lien.addEventListener("mouseenter", () => {
  lien.classList.add("perso");
});

lien.addEventListener("mouseout", () => {
  lien.classList.remove("perso");
});

// lien.style.textDecoration = "none";
// lien.style.color ="red";
let root = document.querySelector("#root");

root.append(lien);
// root.remove(lien);

console.log(root);

// window.document.addEventListener("scroll", () => {
//   console.log(scrollTo);

//   window.scrollTo(0, 0);
// });

// lien.addEventListener("click", () => {
//   window.scrollTo(0, 0);
// });

// window.document.addEventListener("scroll", () => {
//   if (scrollY > 100) {
//     lien.style.transform = "rotate(45deg)";
//   }
// });

let scrollPos = 0;
let show = document.querySelector("#show");

window.document.addEventListener("scroll", () => {
  if (document.body.getBoundingClientRect().top > scrollPos) {
    lien.style.transform = "rotate(-45deg)";
    show.textContent = `Vers le haut de ${scrollY}px`;
  } else if (scrollY > 200) {
    show.textContent = "Vous êtes allez trop loin";
  } else {
    lien.style.transform = "rotate(90deg)";
    show.textContent = `Vers le bas de ${scrollY}px`;
  }
  // saves the new position for iteration.
  scrollPos = document.body.getBoundingClientRect().top;
});
