// Menu mobile
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

burger?.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("open");
  burger.setAttribute("aria-expanded", String(isOpen));
});

// Scroll doux
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href");
    if (!id || id === "#") return;

    const el = document.querySelector(id);
    if (!el) return;

    e.preventDefault();
    menu?.classList.remove("open");
    burger?.setAttribute("aria-expanded", "false");

    el.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

// Année footer
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Formulaire contact
document.getElementById("quoteForm")?.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(e.target);

  const name = (data.get("name") || "").toString();
  const email = (data.get("email") || "").toString();
  const location = (data.get("location") || "").toString();
  const message = (data.get("message") || "").toString();

  const subject = encodeURIComponent(`Contact Starway Cie — ${name}`);

  const body = encodeURIComponent(
`Bonjour Starway,

Nom : ${name}
Email : ${email}
Sujet : ${location}

Message :
${message}

Merci`
  );

  window.location.href = `mailto:nathanvillain25@gmail.com?subject=${subject}&body=${body}`;
});

// Modal offres
function openOffer(type) {
  const modal = document.getElementById("offerModal");
  const contents = document.querySelectorAll(".offerContent");

  contents.forEach(content => {
    content.style.display = "none";
  });

  const selected = document.getElementById("offer-" + type);

  if (selected) {
    selected.style.display = "block";
  }

  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeOffer() {
  const modal = document.getElementById("offerModal");
  modal.style.display = "none";
  document.body.style.overflow = "";
}

window.addEventListener("click", function(e) {
  const modal = document.getElementById("offerModal");
  if (e.target === modal) {
    closeOffer();
  }
});

// Offre personnalisée
function sendCustomOffer() {
  const eventType = document.getElementById("customEventType")?.value || "";
  const duration = document.getElementById("customDuration")?.value || "";
  const scenes = document.getElementById("customScenes")?.value || "";
  const branding = document.getElementById("customBranding")?.value || "";
  const music = document.getElementById("customMusic")?.value || "";
  const video = document.getElementById("customVideo")?.value || "";

  const subject = encodeURIComponent("Demande de devis personnalisé — Starway Cie");

  const body = encodeURIComponent(
`Bonjour Starway Cie,

Je souhaite demander un devis personnalisé.

Type d’événement : ${eventType}
Durée : ${duration}
Nombre de tableaux : ${scenes}
Branding / Logo : ${branding}
Musique synchronisée : ${music}
Captation vidéo : ${video}

Merci de me recontacter.`
  );

  const success = document.getElementById("customOfferSuccess");

  if (success) {
    success.style.display = "block";
    success.textContent = "Votre devis personnalisé a bien été préparé. Vérifiez votre client mail pour l’envoyer.";
  }

  window.location.href = `mailto:nathanvillain25@gmail.com?subject=${subject}&body=${body}`;
}
