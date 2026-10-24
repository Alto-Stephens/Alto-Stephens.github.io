import { CatalogCard } from "../components/CatalogCard";
import { PageHeading, SiteLayout } from "../components/SiteLayout";
import { images } from "../data/images";
import "./GalleryPage.css";

const galleryItems = [
  {
    title: "Transmission Arcade",
    image: "transarcade.webp",
    alt: "Transmission Arcade in Columbia, South Carolina",
    description: "Visit the retro games and cabinets at Transmission Arcade.",
    category: "ARCADE HALLS",
    meta: "COLUMBIA, SC",
  },
  {
    title: "Nintendo 64 Controller",
    image: "n64.webp",
    alt: "Classic Nintendo 64 controller",
    description:
      "The classic Nintendo 64 controller introduced a distinctive three-pronged design in 1996.",
    category: "CONTROLLERS",
    meta: "1996",
  },
  {
    title: "Pinball Hall of Fame",
    image: "pinballHOF.jpg",
    alt: "Pinball Hall of Fame in Las Vegas",
    description:
      "A Las Vegas museum celebrating a huge collection of pinball machines.",
    category: "ARCADE HALLS",
    meta: "LAS VEGAS, NV",
  },
  {
    title: "Street Fighter II",
    image: "streetfighterII.jpg",
    alt: "Street Fighter II arcade game",
    description:
      "A landmark fighting game, immortalized on screens and in arcade art.",
    category: "SCREENS",
    meta: "1991",
  },
];

export default function GalleryPage() {
  return (
    <SiteLayout activePage="gallery">
      <PageHeading
        title="ARCADE GALLERY"
        subtitle="Cabinets, halls, controllers, and art from the golden age"
      />
      <section className="subpage-content" aria-label="Arcade image gallery">
        <div className="gallery-feature">
          <img
            src={images["mrdo.jpg"]}
            alt="A vintage advertisement for the Mr. Do! arcade game"
          />
          <div className="feature-gallery-copy">
            <h2>MR. DO! ARCADE ART</h2>
            <div className="card-meta">
              <span>ARCADE CLASSICS</span>
              <span>1982</span>
            </div>
            <p className="detail-copy">
              A look at Mr. Do!, a 1982 maze game produced by Universal
              Entertainment.
            </p>
          </div>
        </div>
        <div className="section-bar gallery-section-bar">
          <h2>ARCADE COLLECTION</h2>
          <span className="section-count">{galleryItems.length} ITEMS</span>
        </div>
        <div className="catalog-grid">
          {galleryItems.map((item) => (
            <CatalogCard {...item} key={item.title} />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
