const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = "translateY(30px)";
  card.style.transition = "0.6s";
});

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });
});