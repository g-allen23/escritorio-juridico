const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.12 },
);
reveals.forEach((el) => observer.observe(el));

// Mobile menu toggle
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  navToggle.classList.toggle("active");
});

// Form submit
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector(".submit-btn");
  btn.textContent = "Mensagem Enviada ✓";
  btn.style.background = "var(--gold)";
  btn.style.color = "var(--black)";
  setTimeout(() => {
    btn.textContent = "Enviar Mensagem";
    btn.style.background = "";
    btn.style.color = "";
    e.target.reset();
  }, 3000);
}
