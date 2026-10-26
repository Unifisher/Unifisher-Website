(() => {
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#main-nav");
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(open));
      menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
    }));
  }

  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();

  const form = document.querySelector("#enquiry-form");
  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const message = [
        "Hello Unifisher Farming, I'd like to make an enquiry.",
        "",
        `Name: ${data.get("name")}`,
        `Email: ${data.get("email")}`,
        `Phone: ${data.get("phone") || "Not provided"}`,
        `Enquiry: ${data.get("topic")}`,
        "",
        `Message: ${data.get("message")}`
      ].join("\n");
      const url = "https://wa.me/918967211315?text=" + encodeURIComponent(message);
      const status = document.querySelector("#form-status");
      if (status) status.textContent = "Opening WhatsApp with your enquiry. Please review it and press Send in WhatsApp.";
      window.open(url, "_blank", "noopener,noreferrer");
    });
  }
})();
