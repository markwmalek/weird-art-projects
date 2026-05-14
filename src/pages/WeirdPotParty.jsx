import ContactCard from '../components/ContactCard';
import Marquee from '../components/Marquee';
import './WeirdPotParty.css';

const schedule = [
  { label: 'Painting Hours', date: 'Friday, May 15', time: '2 PM – 9 PM' },
  { label: 'Third Friday Event', date: 'Friday, May 15', time: '6 PM – 9 PM' },
];

export default function WeirdPotParty() {
  return (
    <div className="wpp">

      {/* Hero */}
      <section className="wpp__hero">
        <div className="wpp__hero-text">
          <p className="wpp__eyebrow">Third Friday — May 15, 2026</p>
          <h1>Weird<br />Pot<br />Party</h1>
          <p className="wpp__hero-sub">CCB Plaza, Downtown Durham</p>
        </div>
        <div className="wpp__hero-img-wrap">
          <img
            src="/images/pot-party/Event Poster.png"
            alt="Weird Pot Party poster"
            className="wpp__hero-img"
          />
        </div>
      </section>

      {/* Marquee */}
      <Marquee
        items={['LIVE PAINTING', 'PLEIN AIR', 'DOWNTOWN DURHAM', 'THIRD FRIDAY']}
        dark={false}
        speed={28}
        separatorIcon="/images/lindsay.svg"
      />

      {/* About */}
      <section className="wpp__about">
        <div className="wpp__section-inner">
          <p className="wpp__section-label">About</p>
          <p className="wpp__about-text">
            Ten artists set up at select planters around CCB Plaza and paint the city as it happens around them — plein air style. That means capturing the moment, the people, the light, the energy of a downtown Durham Friday.
          </p>
        </div>
      </section>

      {/* Schedule */}
      <section className="wpp__schedule">
        <div className="wpp__section-inner">
          <p className="wpp__section-label">Schedule</p>
          <div className="wpp__schedule-grid">
            {schedule.map((item, i) => (
              <div className="wpp__schedule-item" key={i}>
                <span className="wpp__schedule-label">{item.label}</span>
                <span className="wpp__schedule-date">{item.date}</span>
                {item.time && <span className="wpp__schedule-time">{item.time}</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Direction */}
      <section className="wpp__creative">
        <div className="wpp__section-inner">
          <p className="wpp__section-label">Creative Direction</p>
          <h2 className="wpp__creative-title">Plein air–inspired: your surroundings, your interpretation of the moment.</h2>
          <div className="wpp__creative-grid">
            <div className="wpp__creative-col">
              <h3 className="wpp__col-title">Direction</h3>
              <ul className="wpp__list">
                <li>Plein air–inspired — your surroundings, your interpretation of the moment, or whatever catches your eye as the evening unfolds</li>
                <li>This is a live, public-facing experience — creative ideas and crowd interaction encouraged</li>
                <li>Be in it with the city; capture the energy of a downtown Durham Friday</li>
              </ul>
            </div>
            <div className="wpp__creative-col">
              <h3 className="wpp__col-title">Paint Surface</h3>
              <div className="wpp__surface-card">
                <img
                  src="/images/pot-party/Pot Size.png"
                  alt="Pot size diagram — 115 inches around, 18.5 inch paintable area"
                  className="wpp__surface-diagram"
                />
                <p className="wpp__surface-note">Paint the flat middle section only. Skip the molding and ridges unless you're feeling ambitious.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="wpp__materials">
        <div className="wpp__section-inner">
          <p className="wpp__section-label">Materials</p>
          <div className="wpp__materials-grid">
            <div className="wpp__materials-col">
              <h3 className="wpp__col-title">We Provide</h3>
              <ul className="wpp__list">
                <li>Paint (color palette selected for cohesion and durability outdoors)</li>
              </ul>
            </div>
            <div className="wpp__materials-col">
              <h3 className="wpp__col-title">You Bring</h3>
              <ul className="wpp__list">
                <li>Brushes and painting tools</li>
                <li>Stool or seating</li>
                <li>Tarp or drop cloth</li>
                <li>Anything else you need to work</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Color Palette */}
      <section className="wpp__palette">
        <div className="wpp__section-inner">
          <p className="wpp__section-label">Color Palette</p>
          <p className="wpp__palette-note">Selected for cohesion and to age well outdoors. You do not need to use every color.</p>
          <img
            src="/images/pot-party/Pot Palette.png"
            alt="Pot Paint Palette — Caviar SW 6990, Forestwood SW 1730, Turkish Coffee SW 6076, Rockwood Red SW 2802, Turkish Tile SW 7610, Bosc Pear SW 6390, Tony Taupe SW 7038"
            className="wpp__palette-img"
          />
        </div>
      </section>

      {/* Marquee */}
      <Marquee
        items={['CCB PLAZA', 'DOWNTOWN DURHAM', '10 ARTISTS', 'THIRD FRIDAY MAY 15']}
        dark={true}
        speed={30}
        separatorIcon="/images/lindsay.svg"
      />

      <ContactCard />
    </div>
  );
}
