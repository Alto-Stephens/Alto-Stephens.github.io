import { useEffect, useState } from "react";
import { CatalogCard } from "../components/CatalogCard";
import { PageHeading, SiteLayout } from "../components/SiteLayout";
import "./GamesPage.css";

const categories = ["ALL", "MAZE", "SHOOTER", "PLATFORMER", "FIGHTING", "RACING"];
const gamesApiUrl = "https://midnightarcade-backend.onrender.com/api/games";

export default function GamesPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    async function loadGames() {
      setIsLoading(true);
      setError("");

      try {
        const response = await fetch(gamesApiUrl, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`The game service returned ${response.status}.`);
        }

        const gameList = await response.json();
        if (!Array.isArray(gameList)) {
          throw new Error("The game service returned an invalid response.");
        }

        setGames(gameList);
      } catch (fetchError) {
        if (fetchError.name !== "AbortError") {
          setError(fetchError.message || "Unable to load games right now.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    loadGames();
    return () => controller.abort();
  }, [retryCount]);

  const visibleGames =
    activeCategory === "ALL"
      ? games
      : games.filter((game) => game.category === activeCategory);

  return (
    <SiteLayout activePage="games">
      <PageHeading
        title="GAMES CATALOG"
        subtitle="Classic arcade games from the golden age, 1978 to 1992"
      />
      <section className="subpage-content" aria-label="Classic game catalog">
        <div className="section-bar">
          <h2>CLASSIC GAMES</h2>
          <span className="section-count" aria-live="polite">
            {visibleGames.length} / {games.length} GAMES
          </span>
        </div>
        <nav className="filters" aria-label="Filter games by category">
          {categories.map((category) => (
            <button
              className={`filter-link${activeCategory === category ? " is-active" : ""}`}
              type="button"
              key={category}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </nav>
        <p className="catalog-status" role="status" aria-live="polite">
          {isLoading
            ? "Loading games from the arcade server..."
            : error
              ? "The game catalog could not be loaded."
              : `Showing ${visibleGames.length} ${
                  visibleGames.length === 1 ? "game" : "games"
                }.`}
        </p>
        {error ? (
          <div className="catalog-error" role="alert">
            <p>{error}</p>
            <button
              className="filter-link"
              type="button"
              onClick={() => setRetryCount((count) => count + 1)}
            >
              TRY AGAIN
            </button>
          </div>
        ) : (
          <div className="catalog-grid" aria-busy={isLoading}>
            {visibleGames.map((game) => (
              <CatalogCard
                key={game.id}
                image={game.image}
                alt={game.alt}
                title={game.name}
                description={game.description}
                category={game.category}
                meta={`${game.year} - ${game.developer}`}
              />
            ))}
          </div>
        )}
      </section>
    </SiteLayout>
  );
}
