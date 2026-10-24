export function TrackRow({ title, game, composer, note, genre, duration, href }) {
  const playButton = href ? (
    <a className="track-play" href={href} aria-label={`Preview ${title}`}>
      <span aria-hidden="true">▶</span>
    </a>
  ) : (
    <span className="track-play" aria-hidden="true">
      ▶
    </span>
  );

  return (
    <article className="track-row">
      {playButton}
      <div className="track-name">
        <strong>{title}</strong>
        <span>
          {game} · {composer}
        </span>
      </div>
      <p className="track-note">{note}</p>
      <span className="track-genre">{genre}</span>
      <span className="track-duration">{duration}</span>
    </article>
  );
}
