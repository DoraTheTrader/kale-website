const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      nav.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
}

const contactForm = document.querySelector("[data-contact-form]");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(contactForm);
    const subject = encodeURIComponent(`Kale Mekanik teklif talebi - ${data.get("topic")}`);
    const body = encodeURIComponent(
      [
        `Ad Soyad: ${data.get("name")}`,
        `Telefon: ${data.get("phone")}`,
        `Proje Konusu: ${data.get("topic")}`,
        "",
        String(data.get("message")),
      ].join("\n"),
    );

    window.location.href = `mailto:info@kalemekanik.com?subject=${subject}&body=${body}`;
  });
}

window.addEventListener("load", () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
