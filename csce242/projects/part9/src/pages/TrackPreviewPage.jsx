import { PageHeading, SiteLayout } from "../components/SiteLayout";
import { images } from "../data/images";
import "./TrackPreviewPage.css";

export default function TrackPreviewPage() {
  return (
    <SiteLayout activePage="soundtracks">
      <PageHeading
        eyebrow="SOUNDTRACK PREVIEW · 1980"
        title="PAC-MAN THEME"
        subtitle="The unmistakable opening notes of a maze-chase legend"
      />
      <section className="subpage-content detail-layout">
        <img
          className="detail-image"
          src={images["pacman.jpg"]}
          alt="Pac-Man arcade game screen"
        />
        <div className="detail-panel">
          <h2>THE ARCADE SOUND</h2>
          <p className="detail-copy">
            A compact, bright electronic melody became an instantly
            recognizable invitation to play. Its playful pulse is inseparable
            from the glowing maze and the chase through it.
          </p>
          <p className="detail-copy">
            <strong>Game:</strong> Pac-Man
            <br />
            <strong>Composer:</strong> Toshio Kai
            <br />
            <strong>Style:</strong> Chiptune
          </p>
          <a className="text-link" href="./soundtracks.html">
            ← BACK TO SOUNDTRACKS
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
