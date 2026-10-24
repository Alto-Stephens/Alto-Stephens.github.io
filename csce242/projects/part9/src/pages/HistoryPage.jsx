import { PageHeading, SiteLayout } from "../components/SiteLayout";
import { TimelineEra } from "../components/TimelineEra";
import "./HistoryPage.css";

const eras = [
  {
    id: "1970s",
    title: "DAWN OF THE ARCADE",
    years: "1972–1979",
    description:
      "The industry is born from a single tennis simulation and grows into a cultural force.",
    events: [
      {
        year: "1972",
        title: "PONG LAUNCHES",
        description:
          "A simple table-tennis game brings video games into public spaces.",
      },
      {
        year: "1978",
        title: "SPACE INVADERS CHANGES EVERYTHING",
        description:
          "A landmark shooter turns arcades into a global phenomenon.",
      },
      {
        year: "1979",
        title: "ASTEROIDS ARRIVES",
        description:
          "Vector graphics and high-score tracking bring a new kind of space adventure.",
      },
    ],
  },
  {
    id: "1980s",
    title: "THE GOLDEN AGE",
    years: "1980–1989",
    description:
      "Arcade cabinets become gathering places as unforgettable characters and worlds appear.",
    events: [
      {
        year: "1980",
        title: "PAC-MAN TAKES OVER",
        description:
          "A maze-chase hit makes arcade gaming a worldwide pop-culture phenomenon.",
      },
      {
        year: "1981",
        title: "DONKEY KONG DEBUTS",
        description:
          "Jumpman and a barrel-throwing ape star in a landmark platform game.",
      },
      {
        year: "1985",
        title: "THE NINTENDO ENTERTAINMENT SYSTEM",
        description:
          "Home consoles help bring the video game revival into living rooms.",
      },
    ],
  },
  {
    id: "1990s",
    title: "A NEW DIMENSION",
    years: "1990–1999",
    description:
      "Fighting games, 3D graphics, and powerful home consoles reshape the medium.",
    events: [
      {
        year: "1991",
        title: "STREET FIGHTER II",
        description:
          "Competitive fighting games become a major force in arcades.",
      },
      {
        year: "1993",
        title: "3D WORLDS ON THE RISE",
        description:
          "Advances in hardware bring immersive three-dimensional games to more players.",
      },
      {
        year: "1996",
        title: "A NEW ERA OF HOME CONSOLES",
        description:
          "The Nintendo 64 and PlayStation bring expansive 3D games to living rooms.",
      },
    ],
  },
  {
    id: "2000s",
    title: "PLAY GOES GLOBAL",
    years: "2000 and beyond",
    description:
      "Online play, mobile devices, and new communities transform how people play.",
    events: [
      {
        year: "2000s",
        title: "ONLINE MULTIPLAYER GROWS",
        description:
          "Broadband connections make online worlds and multiplayer communities commonplace.",
      },
      {
        year: "2007",
        title: "GAMES GO MOBILE",
        description:
          "Smartphones put casual games in the hands of millions of new players.",
      },
      {
        year: "TODAY",
        title: "ARCADES LIVE ON",
        description:
          "Retro arcades, tournaments, and classic-game collections keep the spirit alive.",
      },
    ],
  },
];

export default function HistoryPage() {
  return (
    <SiteLayout activePage="history">
      <PageHeading
        title="GAMING HISTORY"
        subtitle="Five decades of arcade and video game evolution"
      />
      <section className="subpage-content" aria-label="Video game timeline">
        <nav className="decade-nav" aria-label="Jump to a decade">
          {eras.map(({ id, years }) => (
            <a href={`#${id}`} key={id}>
              {years === "2000 and beyond" ? "2000s+" : id}
            </a>
          ))}
        </nav>
        {eras.map((era) => (
          <TimelineEra {...era} key={era.id} />
        ))}
      </section>
    </SiteLayout>
  );
}
