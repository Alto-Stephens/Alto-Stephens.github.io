import { useState } from "react";
import { SiteLayout } from "../components/SiteLayout";
import { images } from "../data/images";
import "./HomePage.css";

const featuredGames = [
  {
    name: "Pac-Man",
    year: "1980",
    image: "pacman.jpg",
    description:
      "The most iconic arcade game ever created. Guide Pac-Man through a maze of dots while dodging hordes of ghosts.",
    className: "pacman",
  },
  {
    name: "Space Invaders",
    year: "1978",
    image: "invaders.jpg",
    description:
      "The game that launched the golden age of arcade gaming. Defend Earth from relentless alien formations.",
    className: "invaders",
  },
  {
    name: "Donkey Kong",
    year: "1981",
    image: "dk.jpg",
    description:
      "Mario's debut. Climb ladders, dodge barrels, and rescue Pauline from the towering ape.",
    className: "donkey",
  },
];

const slides = [
  { name: "Pac-Man", year: "1980", image: "pacman.jpg" },
  { name: "Space Invaders", year: "1978", image: "invaders.jpg" },
  { name: "Donkey Kong", year: "1981", image: "dk.jpg" },
  { name: "Galaga", year: "1981", image: "galaga.jpg" },
  { name: "Out Run", year: "1986", image: "outrun.jpg" },
];

function FeaturedGameCard({ game }) {
  return (
    <article className={`game-card ${game.className}`}>
      <div className="game-header">
        <h3>{game.name}</h3>
        <span>RELEASED: {game.year}</span>
      </div>
      <p>{game.description}</p>
      <a className="game-card-link" href="./games.html">
        EXPLORE GAME
      </a>
    </article>
  );
}

function FeaturedSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slide = slides[activeIndex];
  const changeSlide = (step) => {
    setActiveIndex((index) => (index + step + slides.length) % slides.length);
  };

  return (
    <section className="arcade-gallery" aria-label="Featured arcade games">
      <div className="section-bar">
        <h2>GAMES TO DISCOVER</h2>
        <span className="section-count" aria-live="polite">
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>
      <div className="slideshow" aria-roledescription="carousel">
        <div className="slideshow-stage">
          <a
            className="gallery-slide"
            href="./games.html"
            aria-label={`${slide.name}, released ${slide.year}`}
          >
            <img
              src={images[slide.image]}
              alt={`${slide.name} arcade game`}
            />
            <span className="gallery-caption">
              <strong>{slide.name}</strong>
              <small>{slide.year}</small>
            </span>
          </a>
        </div>
        <div className="slideshow-controls">
          <button
            className="slideshow-button"
            type="button"
            onClick={() => changeSlide(-1)}
          >
            PREVIOUS
          </button>
          <button
            className="slideshow-button"
            type="button"
            onClick={() => changeSlide(1)}
          >
            NEXT
          </button>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <SiteLayout activePage="home">
      <div className="content">
        <section className="hero" aria-label="Arcade hero section">
          <div className="hero-content">
            <p className="coin-text">INSERT COIN TO CONTINUE</p>
            <h1>
              <span className="line-one">MIDNIGHT</span>
              <span className="line-two">ARCADE</span>
            </h1>
          </div>
        </section>
        <p className="intro-text">
          Journey back to the golden age of gaming.
          <br />
          Explore the classics, the history, and the culture
          <br />
          that shaped an entire generation.
        </p>
        <div className="tag-row" aria-label="Game categories">
          {["PAC-MAN", "SPACE INVADERS", "DONKEY KONG", "GALAXIAN", "TETRIS"].map(
            (game) => (
              <span className="tag-item" key={game}>
                <span aria-hidden="true">•</span>
                <a href="./games.html">{game}</a>
              </span>
            ),
          )}
        </div>
        <FeaturedSlideshow />
        <section className="featured">
          <h2>FEATURED CLASSICS</h2>
          <div className="card-grid">
            {featuredGames.map((game) => (
              <FeaturedGameCard game={game} key={game.name} />
            ))}
          </div>
        </section>
        <section className="feature-banner" aria-label="Arcade gallery banner">
          <img
            src={images["arcade carpet.jpg"]}
            alt="Colorful carpet inside a classic arcade"
            loading="lazy"
          />
        </section>
        <section className="home-contact" id="contact" aria-labelledby="contact-title">
          <p className="eyebrow">KEEP THE CLASSICS ALIVE</p>
          <h2 id="contact-title">CONTACT US</h2>
          <p>
            Have a favorite classic or a question? Get in touch—the contact form
            is coming soon.
          </p>
        </section>
      </div>
    </SiteLayout>
  );
}
