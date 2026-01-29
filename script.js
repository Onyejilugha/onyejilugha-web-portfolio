// HERO DROPPING LETTERS
const heroText = document.querySelector(".hero h1");
const letters = heroText.innerText.split("");
heroText.innerText = "";

letters.forEach((letter, i) => {
  const span = document.createElement("span");
  span.innerText = letter === " " ? "\u00A0" : letter;
  span.style.animationDelay = `${i * 0.05}s`;
  heroText.appendChild(span);
});

// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});
