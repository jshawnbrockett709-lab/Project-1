document.querySelectorAll(".play").forEach(button => {
  button.addEventListener("click", () => {
    const title = button.closest(".episode").querySelector("h3").textContent;
    button.textContent = "Queued";
    button.setAttribute("aria-label", `${title} queued`);
    setTimeout(() => {
      button.textContent = "Play";
      button.removeAttribute("aria-label");
    }, 1200);
  });
});

const current = document.body.dataset.page;
document.querySelectorAll(".nav a").forEach(link => {
  if (link.dataset.page === current) link.classList.add("active");
});
