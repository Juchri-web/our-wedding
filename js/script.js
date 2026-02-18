function setLanguage(lang) {
  localStorage.setItem("lang", lang);

  document.querySelectorAll("[data-de]").forEach(el => {
    const text = el.getAttribute(`data-${lang}`);
    if (text) el.textContent = text;
  });

  // Title separat behandeln
  const title = document.querySelector("title");
  if (title) {
    const newTitle = title.getAttribute(`data-${lang}`);
    if (newTitle) title.textContent = newTitle;
  }
}
