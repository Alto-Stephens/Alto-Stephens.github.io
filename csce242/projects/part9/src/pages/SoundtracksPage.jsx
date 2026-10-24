import { PageHeading, SiteLayout } from "../components/SiteLayout";
import { TrackRow } from "../components/TrackRow";
import { images } from "../data/images";
import "./SoundtracksPage.css";

const tracks = [
  {
    title: "Pac-Man Theme",
    game: "PAC-MAN",
    composer: "TOSHIO KAI",
    note: "A looping electronic maze chase that became the sound of the 8-bit arcade.",
    genre: "CHIPTUNE",
    duration: "1:29",
    href: "./track-preview.html",
  },
  {
    title: "DK Stage 1",
    game: "DONKEY KONG",
    composer: "YUKIO KANEOKA",
    note: "A playful, urgent theme that builds as the platforms rise.",
    genre: "CHIPTUNE",
    duration: "0:48",
  },
  {
    title: "Magical Sound Shower",
    game: "OUT RUN",
    composer: "HIROSHI KAWAGUCHI",
    note: "Smooth FM synths and a sunlit vibe made this a driving favorite.",
    genre: "CITY POP",
    duration: "2:01",
  },
  {
    title: "Passing Breeze",
    game: "OUT RUN",
    composer: "HIROSHI KAWAGUCHI",
    note: "A mellow ride through the coast, made for one more run.",
    genre: "CITY POP",
    duration: "1:58",
  },
  {
    title: "Splash Wave",
    game: "OUT RUN",
    composer: "HIROSHI KAWAGUCHI",
    note: "Bright guitar and an open-road feeling in a memorable arcade score.",
    genre: "SYNTH",
    duration: "2:09",
  },
  {
    title: "Guile's Theme",
    game: "STREET FIGHTER II",
    composer: "YOKO SHIMOMURA",
    note: "A driving melody that became a legend beyond the game.",
    genre: "SYNTH",
    duration: "1:36",
  },
  {
    title: "Green Hill Zone",
    game: "SONIC THE HEDGEHOG",
    composer: "MASATO NAKAMURA",
    note: "A bright, propulsive theme that makes the first level unforgettable.",
    genre: "ELECTRONIC",
    duration: "1:47",
  },
];

export default function SoundtracksPage() {
  return (
    <SiteLayout activePage="soundtracks">
      <PageHeading
        title="SOUNDTRACKS"
        subtitle="Legendary music from the golden age"
      />
      <section className="subpage-content" aria-label="Classic arcade soundtracks">
        <section className="soundtrack-feature" aria-labelledby="featured-track-title">
          <div className="soundtrack-art">
            <img
              src={images["pacman.jpg"]}
              alt="Pac-Man arcade game artwork"
            />
            <span className="soundtrack-art-label">PRESS PLAY IN YOUR IMAGINATION</span>
          </div>
          <div className="soundtrack-feature-copy">
            <p className="eyebrow">FEATURED SOUNDTRACK</p>
            <h2 id="featured-track-title">TETRIS (ARCADE) MUSIC THEMES</h2>
            <p>
              Bright, fast-paced melodies helped make classic arcade games
              unforgettable.
            </p>
            <p className="soundtrack-feature-meta">
              <strong>GAME</strong> Tetris <span aria-hidden="true">·</span>{" "}
              <strong>STYLE</strong> Arcade Chiptune
            </p>
          </div>
        </section>
        <div className="section-bar">
          <h2>LEGENDARY SOUNDTRACKS</h2>
          <span className="section-count">{tracks.length} TRACKS</span>
        </div>
        <div className="track-list">
          {tracks.map((track) => (
            <TrackRow {...track} key={track.title} />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
