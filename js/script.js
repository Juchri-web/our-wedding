function setLanguage(lang) {
  localStorage.setItem("lang", lang);

  // normale Texte
  document.querySelectorAll("[data-de]").forEach(el => {
    const text = el.getAttribute(`data-${lang}`);
    if (text !== null) el.textContent = text;
  });

  // Titel separat
  const title = document.querySelector("title");
  if (title) {
    const newTitle = title.getAttribute(`data-${lang}`);
    if (newTitle) title.textContent = newTitle;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("lang") || "de";
  setLanguage(saved);

  document.querySelectorAll("#language-toggle button").forEach(btn => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });
});

// ---- Timeline Scroll Animation ----
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".timeline-item");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.2
  });

  items.forEach(item => observer.observe(item));
});

