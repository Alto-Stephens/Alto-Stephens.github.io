const gamesContainer = document.querySelector("#all-games");
const gameCount = document.querySelector("#game-count");
const catalogStatus = document.querySelector("#catalog-status");
const categoryFilters = Array.from(document.querySelectorAll("[data-category]"));
const gamesJsonUrl = "https://alto-stephens.github.io/csce242/projects/part7/games.json";
let games = [];
let activeCategory = "ALL";

const isGameRecord = (game) =>
  game &&
  Number.isInteger(game._id) &&
  typeof game.name === "string" &&
  typeof game.img_name === "string" &&
  typeof game.alt === "string" &&
  typeof game.description === "string" &&
  typeof game.category === "string" &&
  Number.isInteger(game.year) &&
  typeof game.developer === "string";

const createGameCard = (game) => {
  const card = document.createElement("article");
  card.className = "catalog-card";

  const image = document.createElement("img");
  image.src = game.img_name;
  image.alt = game.alt;
  image.loading = "lazy";

  const body = document.createElement("div");
  body.className = "catalog-card-body";

  const title = document.createElement("h3");
  title.textContent = game.name;

  const description = document.createElement("p");
  description.textContent = game.description;

  const metadata = document.createElement("div");
  metadata.className = "card-meta";
  const category = document.createElement("span");
  category.textContent = game.category;
  const year = document.createElement("span");
  year.textContent = `${game.year} - ${game.developer}`;
  metadata.append(category, year);

  body.append(title, description, metadata);
  card.append(image, body);
  return card;
};

const renderGames = () => {
  const visibleGames = activeCategory === "ALL"
    ? games
    : games.filter((game) => game.category === activeCategory);

  gamesContainer.replaceChildren(...visibleGames.map(createGameCard));
  gameCount.textContent = `${visibleGames.length} / ${games.length} GAMES`;
  catalogStatus.textContent = visibleGames.length
    ? `Showing ${visibleGames.length} ${visibleGames.length === 1 ? "game" : "games"}.`
    : "No games found in this category.";
};

categoryFilters.forEach((filter) => {
  filter.addEventListener("click", () => {
    activeCategory = filter.dataset.category;
    categoryFilters.forEach((button) => {
      const isActive = button === filter;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
    renderGames();
  });
});

const loadGames = async () => {
  try {
    const response = await fetch(gamesJsonUrl);
    if (!response.ok) {
      throw new Error(`The game data request failed with status ${response.status}.`);
    }

    const data = await response.json();
    if (!Array.isArray(data) || !data.every(isGameRecord)) {
      throw new Error("The game data must be an array of valid game records.");
    }

    games = data;
    renderGames();
  } catch (error) {
    catalogStatus.textContent = "The game catalog could not be loaded. Please try again later.";
    gameCount.textContent = "CATALOG UNAVAILABLE";
    console.error("Unable to load the Midnight Arcade game catalog.", error);
  }
};

loadGames();
