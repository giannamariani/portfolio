const portfolioData = {
  hero: {
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
    alt: "Creative team collaborating around a table"
  },
  cards: [
    {
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
      title: "Campaign 1",
      caption: "Brand identity, UI direction, and a polished digital experience."
    },
    {
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
      title: "Campaign 2",
      caption: "A product story designed to feel premium and approachable."
    },
    {
      image:
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80",
      title: "Campaign 3",
      caption: "Visual systems built to convert attention into trust and action."
    },
    {
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
      title: "Campaign 4",
      caption: "Thoughtful planning and shared creative energy in every detail."
    },
    {
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
      title: "Campaign 5",
      caption: "Clear creative direction paired with practical execution."
    },
    {
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
      title: "Campaign 6",
      caption: "A confident narrative that connects audience, product, and purpose."
    }
  ]
};

function renderHero() {
  const heroImage = document.getElementById("heroImage");
  if (heroImage) {
    heroImage.src = portfolioData.hero.image;
    heroImage.alt = portfolioData.hero.alt;
  }
}

function renderCards() {
  const cardGrid = document.getElementById("cardGrid");
  if (!cardGrid) return;

  cardGrid.innerHTML = portfolioData.cards
    .map(
      (card, index) => `
        <article class="card" data-index="${index}" tabindex="0" aria-label="Open ${card.title}">
          <img class="card-image" src="${card.image}" alt="${card.title}" />
          <div class="card-body">
            <h3 class="card-title">${card.title}</h3>
            <p class="card-caption young-serif-regular">${card.caption}</p>
          </div>
        </article>
      `
    )
    .join("");

  cardGrid.querySelectorAll(".card").forEach((cardElement) => {
    cardElement.addEventListener("click", () => {
      const index = Number(cardElement.dataset.index);
      openModal(portfolioData.cards[index]);
    });

    cardElement.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        const index = Number(cardElement.dataset.index);
        openModal(portfolioData.cards[index]);
      }
    });
  });
}

function openModal(card) {
  const modal = document.getElementById("projectModal");
  if (!modal) return;

  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalCaption = document.getElementById("modalCaption");

  if (modalImage) modalImage.src = card.image;
  if (modalImage) modalImage.alt = card.title;
  if (modalTitle) modalTitle.textContent = card.title;
  if (modalCaption) modalCaption.textContent = card.caption;

  modal.classList.add("active");
  document.body.classList.add("modal-open");
}

function closeModal() {
  const modal = document.getElementById("projectModal");
  if (!modal) return;

  modal.classList.remove("active");
  document.body.classList.remove("modal-open");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    renderHero();
    renderCards();

    const modal = document.getElementById("projectModal");
    const closeButton = document.getElementById("closeModal");

    closeButton?.addEventListener("click", closeModal);
    modal?.addEventListener("click", (event) => {
      if (event.target === modal) closeModal();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeModal();
    });
  });
} else {
  renderHero();
  renderCards();

  const modal = document.getElementById("projectModal");
  const closeButton = document.getElementById("closeModal");

  closeButton?.addEventListener("click", closeModal);
  modal?.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });
}
