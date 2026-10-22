const portfolioData = {
  hero: {
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
    alt: "Creative team collaborating around a table"
  },
  cards: [
    {
      image: "AKKO%20Retro%20Phone%20Insurance%20Collage.png",
      title: "AKKO Device Insurance",
      caption: "Brand identity, UI direction, and a polished digital experience."
    },
    {
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
      title: "ALTRA",
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
        <a class="card" href="campaign-${index + 1}.html" target="_blank" rel="noopener noreferrer" aria-label="Open ${card.title} in a new tab">
          <img class="card-image" src="${card.image}" alt="${card.title}" />
          <div class="card-body">
            <h3 class="card-title">${card.title}</h3>
          </div>
        </a>
      `
    )
    .join("");
}

function renderPortfolio() {
  renderHero();
  renderCards();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderPortfolio);
} else {
  renderPortfolio();
}
