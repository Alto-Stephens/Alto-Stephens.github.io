import { useState } from "react";
import { CatalogCard } from "../components/CatalogCard";
import { PageHeading, SiteLayout } from "../components/SiteLayout";
import { games } from "../data/games";
import "./GamesPage.css";

const categories = ["ALL", "MAZE", "SHOOTER", "PLATFORMER", "FIGHTING", "RACING"];

export default function GamesPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");
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
          Showing {visibleGames.length}{" "}
          {visibleGames.length === 1 ? "game" : "games"}.
        </p>
        <div className="catalog-grid">
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
      </section>
    </SiteLayout>
  );
}
