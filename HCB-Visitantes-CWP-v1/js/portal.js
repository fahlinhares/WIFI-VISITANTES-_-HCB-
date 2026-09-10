document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("guestForm");
  if (!form) return;
  form.addEventListener("submit", (event) => {
    // Não alterar para envio externo sem preservar a integração
    // fornecida pelo template do ExtremeCloud IQ.
    if (form.getAttribute("action") === "#") {
      event.preventDefault();
      alert("Esta é uma prévia visual. O formulário será ligado ao Self-Registration do ExtremeCloud IQ após a integração com o template oficial.");
    }
  });
});
