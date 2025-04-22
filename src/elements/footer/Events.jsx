import EventLogo from "@/assets/img-event-1.png";
import "@/styles/modules/footer/_footer_events.scss";

function Events() {
  return (
    <section
      className="footer-events__wrapper"
      aria-labelledby="events-heading"
    >
      <div className="footer-events__container">
        <div className="section-heading__container">
          <h2 id="events-heading" data-title>
            Upcoming Events
          </h2>
          <p id="events-description">
            Stay updated on the latest industry events, conferences, and
            exhibitions where we are showcasing innovative solutions and
            connecting with industry leaders.
          </p>
        </div>
        <div className="event-cards__container">
          <article className="event-card" aria-labelledby="event-1-name">
            <div className="image">
              <img src={EventLogo} alt="Event Image" />
            </div>
            <div className="content">
              <div className="name" id="event-1-name">
                <h3>Event Name:</h3>
                <p>Middle East Energy</p>
              </div>
              <div className="location">
                <h3>Event Location:</h3>
                <p>Business Bay, Dubai</p>
              </div>
              <div className="date">
                <h3>Event Date:</h3>
                <p>April 7-9, 2025</p>
              </div>
            </div>
          </article>

          <article className="event-card" aria-labelledby="event-2-name">
            <div className="image">
              <img src={EventLogo} alt="Event Image" />
            </div>
            <div className="content">
              <div className="name" id="event-2-name">
                <h3>Event Name:</h3>
                <p>Middle East Energy</p>
              </div>
              <div className="location">
                <h3>Event Location:</h3>
                <p>Business Bay, Dubai</p>
              </div>
              <div className="date">
                <h3>Event Date:</h3>
                <p>April 7-9, 2025</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Events;
