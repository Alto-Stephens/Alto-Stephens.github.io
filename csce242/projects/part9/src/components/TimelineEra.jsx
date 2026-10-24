export function TimelineEra({ id, title, years, description, events }) {
  return (
    <section className="timeline-era" id={id}>
      <h2>{title}</h2>
      <p className="timeline-intro">
        {years}
        <br />
        {description}
      </p>
      <div className="timeline-list">
        {events.map(({ year, title: eventTitle, description: eventDescription }) => (
          <article className="timeline-event" key={`${year}-${eventTitle}`}>
            <span className="timeline-year">{year}</span>
            <div>
              <h3>{eventTitle}</h3>
              <p className="timeline-intro">{eventDescription}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
