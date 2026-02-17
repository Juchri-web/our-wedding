function setLanguage(lang) {
  localStorage.setItem("lang", lang);

  document.querySelectorAll("[data-de]").forEach(el => {
    const text = el.getAttribute(`data-${lang}`);
    if (text) el.textContent = text;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("lang") || "de";
  setLanguage(saved);

  document.querySelectorAll("#language-toggle button")
    .forEach(btn => {
      btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
    });
});

