import { images } from "../data/images";

export function CatalogCard({ image, alt, title, description, category, meta }) {
  return (
    <article className="catalog-card">
      <img src={images[image]} alt={alt} loading="lazy" />
      <div className="catalog-card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="card-meta">
          <span>{category}</span>
          <span>{meta}</span>
        </div>
      </div>
    </article>
  );
}
