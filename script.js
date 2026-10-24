// Change the name shown on the site here:
const NAME = "Beautiful";

document.querySelectorAll("[data-name]").forEach(el => el.textContent = NAME);

const pages = [...document.querySelectorAll(".page")];
let cur = 0, timer = null;

function go(n) {
  pages[cur].classList.remove("active");
  cur = n;
  pages[cur].classList.add("active");
  clearInterval(timer);
  if (cur === pages.length - 1) timer = setInterval(spawnHeart, 450);
}

function spawnHeart() {
  const h = document.createElement("span");
  h.className = "heart";
  h.textContent = "\u2665";
  h.style.left = Math.random() * 100 + "vw";
  h.style.fontSize = 14 + Math.random() * 22 + "px";
  h.style.animationDuration = 4 + Math.random() * 3 + "s";
  document.getElementById("hearts").appendChild(h);
  setTimeout(() => h.remove(), 7500);
}

document.querySelectorAll("[data-next]").forEach(b => b.addEventListener("click", () => go(cur + 1)));

const env = document.getElementById("env");
env.addEventListener("click", () => {
  if (env.classList.contains("open")) return;
  env.classList.add("open");
  setTimeout(() => go(cur + 1), 1500);
});

// Music: starts automatically when the gift is tapped (song.mp3 next to index.html)
const bgm = document.getElementById("bgm");
let opened = false;
document.querySelector(".gift").addEventListener("click", () => {
  opened = true;
  bgm.play().catch(() => {});
});
document.addEventListener("click", () => {
  if (opened && bgm.paused) bgm.play().catch(() => {});
});
