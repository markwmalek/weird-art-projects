import { useState } from 'react';
import Marquee from '../components/Marquee';
import ContactCard from '../components/ContactCard';
import './Parrish.css';

const events = [
  { day: 6, title: 'Launch Party', time: '6 PM - 9 PM', admission: 'Free', description: '"painting (v), paintings (n), puppets, popcorn, bubbly" with vinyl by Alison Matney (Bull City Vintage), featuring Jeghetto, Greta Boney, and the Weirdos.', link: null },
  { day: 8, title: "Crowded Table Club: Galentine's Day x Black History Month Paint n Sip", time: '2 PM - 4 PM', admission: '$35', description: 'Led by artist and stylist Sabrina Servance.', link: 'https://www.eventbrite.com/e/crowded-table-club-galentines-day-x-black-history-month-paint-n-sip-tickets-1980640527134' },
  { day: 8, title: 'Music Video Shoot', time: '6 PM - 9 PM', admission: null, description: 'With Hugh Swaso and Irene Hui of Jade Rabbit Co.', link: 'https://www.instagram.com/hughswaso/' },
  { day: 10, title: 'In TRUE Form Podcast LIVE', time: '8 PM - 9 PM', admission: 'Free', description: 'Host Corey Truesdale interviewing Amos Cooper Jr. of Black Robin Ventures. YouTube premiere and streaming audio.', link: 'https://www.instagram.com/intrueform_' },
  { day: 12, title: 'Consumer Mastermind 1.0: Homebuying Hacks & Using Credit Wisely', time: '9 AM - 11 AM', admission: 'Free', description: 'Jessica Davis of the PEER Center at Pinnacle Financial Partners discusses homebuying tips and credit strategies.', link: 'https://www.eventbrite.com/e/consumer-mastermind-10-homebuying-hacks-using-credit-wisely-tickets-1982250505623' },
  { day: 13, title: 'Black Velvet: Photographs by Chris Facey', time: '6 PM - 8 PM', admission: 'Free', description: 'Exhibition and artist conversation with photographers Chris Facey and Samantha Everette.', link: 'https://www.instagram.com/coco.butter.shutter/' },
  { day: 14, title: 'Durham Civil Rights History Tour', time: '12 PM - 1 PM', admission: '$15', description: "Triangle Walking Tours explores Durham's civil rights activism from the 1920s through the 1970s.", link: 'https://trianglewalkingtours.com/durhamcivilrights' },
  { day: 14, title: "Bridgertine's: A Carousel Curation", time: '8 PM - 12 AM', admission: '$0-$20', description: 'Regency-inspired Valentine\'s evening with live music, themed food, best-dressed award, and "Diamond of the Evening" crown.', link: null },
  { day: 15, title: "Saints & Ain'ts: A Good Word", time: '5 PM - 7 PM', admission: '$7', description: 'Immersive pop-up performance by Dasan Ahanu featuring poetry, music, movement, and community focus.', link: 'https://agoodwordpopup.eventbrite.com' },
  { day: 18, title: 'Sip & Connect Community Night', time: '6 PM - 9 PM', admission: 'Free', description: 'Hosted by Shaun Gill of Alston Real Estate Group. Local business owners and neighbors connect and build with LEGOs. RSVP required.', link: null },
  { day: 19, title: 'Make & Release: The Afterlife of Art', time: '6 PM - 9 PM', admission: 'Free', description: 'Artist at Law Whitney Stanley leads a hands-on creative session where participants decide whether to keep, trade, or release their work.', link: null },
  { day: 20, title: 'Black Cinema in the Bull City', time: '6 PM - 9 PM', admission: 'Free', description: 'Panel by Alece Oxendine and Penelope Bartlett of Film Durham on creative pathways for Black filmmakers in NC, plus short film screening.', link: 'https://www.instagram.com/film_durham/' },
  { day: 21, title: 'Behind the Data: Scientific Data as Art and Conversation', time: '12 PM - 2 PM', admission: 'Free', description: 'Chantell Evans, PhD of the Evans Lab at Duke University uses scientific data to explore researcher journeys and the human stories behind the research.', link: 'https://www.evansresearchlab.com/' },
  { day: 22, title: 'The Burning House: Conversations with Joshuas', time: '3 PM - 5 PM', admission: 'Free', description: 'The Joshuas Movement panel on community-owned health and social systems, moderated by Dr. Terrance Ruth.', link: null },
  { day: 22, title: 'Sound Experience', time: '7 PM - 9 PM', admission: null, description: 'An immersive audio experience.', link: null },
  { day: 24, title: "Writin' Dirty: Southern Slang", time: '7:30 PM - 9:30 PM', admission: '$7', description: "Generative poetry workshop using Beyoncé's Lemonade and pop culture artifacts as inspiration for narrative poetry.", link: 'https://southernslangpoetryworkshopfeb2026.eventbrite.com' },
  { day: 25, title: 'Open Mic with Azul', time: '5:30 PM - 10 PM', admission: 'Free', description: 'Open mic for the girls, gays, theys, and anyone else who wanders in. Sign-ups at 5:30 PM, start at 6 PM.', link: 'https://www.instagram.com/azulmzapata/' },
  { day: 26, title: 'Joy By Any Means', time: '6 PM - 10 PM', admission: 'Free', description: 'Candy Carver & Friends host a joy playlist and hip-hop trivia game night with artwork, refreshments, and merchandise.', link: 'https://www.eventbrite.com/e/joy-by-any-means-tickets-1981594769298' },
  { day: 27, title: 'Fashion + Music Industry Game Night', time: '7 PM', admission: null, description: 'Hosted by Mo Dollaz and Mr. Cliché of Needle & Thread Co.', link: 'https://www.instagram.com/needlethreadco/' },
  { day: 28, title: 'Durham Civil Rights History Tour', time: '12 PM - 1 PM', admission: '$15', description: "Triangle Walking Tours explores Durham's civil rights history from the 1920s through the 1970s.", link: 'https://trianglewalkingtours.com/durhamcivilrights' },
  { day: 28, title: 'Closing Party - I ❤ DRM', time: 'TBD', admission: 'Free', description: 'With DJ HP Fangs.', link: 'https://www.instagram.com/hpfangs/' },
];

const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
// Feb 2026 starts on Sunday (day 0), 28 days
const FEB_START_DAY = 0;
const FEB_DAYS = 28;

function getEventsForDay(day) {
  return events.filter(e => e.day === day);
}

const categories = [
  { label: 'Live Painting', image: '/images/parrish/live-painting.jpg' },
  { label: 'Music', image: '/images/parrish/music.jpg' },
  { label: 'Poetry', image: '/images/parrish/poetry.jpg' },
];

const sponsors = [
  { name: 'Black Robin Ventures', logo: '/images/sponsors/black-robin.webp' },
  { name: 'Whitney D. Stanley', logo: '/images/sponsors/whitney-logo.png' },
  { name: 'Downtown Durham Inc', logo: '/images/sponsors/ddi-logo.webp' },
  { name: 'Durham Arts Council', logo: '/images/sponsors/durham-arts-council.png' },
];

export default function Parrish() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [viewMode, setViewMode] = useState('calendar');
  const selectedEvents = selectedDay ? getEventsForDay(selectedDay) : [];

  function getDayOfWeek(day) {
    return (FEB_START_DAY + day - 1) % 7; // 0=Sun, 1=Mon, ...
  }

  function isOpen(day) {
    const dow = getDayOfWeek(day);
    return dow !== 1; // closed on Mondays
  }

  // Build calendar cells
  const cells = [];
  for (let i = 0; i < FEB_START_DAY; i++) {
    cells.push(null); // empty cells before month starts
  }
  for (let d = 1; d <= FEB_DAYS; d++) {
    cells.push(d);
  }

  return (
    <div className="parrish">
      <section className="parrish__hero">
        <div className="parrish__hero-text">
          <div className="parrish__hero-top">
            <h1>Parties on<br />Parrish</h1>
            <h2 className="parrish__date">February 1 - 28 2026</h2>
          </div>
          <p className="parrish__desc">
            For the month of February on historic Black Wall Street, Durham creatives take over{' '}
            <a href="https://maps.google.com/?q=104+W+Parrish+St+Durham+NC" target="_blank" rel="noopener noreferrer">
              104 W Parrish St
            </a>
            , using art, poetry, puppetry, storytelling, food, music, and science to tell the city's
            stories through collaborative events and activations.{' '}
            <strong>Open Tuesday - Sunday</strong> with individual events and programming throughout the month.
          </p>
        </div>
        <div className="parrish__hero-graphic">
          <img
            src="/images/parrish/parrish-poster.png"
            alt="Parties on Parrish graphic"
            className="parrish__poster-img"
          />
        </div>
      </section>

      <Marquee
        items={['MONTH LONG', 'FEBRUARY 2026', 'PARTY WITH US']}
        dark={false}
        speed={25}
        separatorIcon="/images/lindsay.svg"
      />

      <section className="parrish__calendar">
        <div className="parrish__calendar-header">
          <h2 className="parrish__section-title">February 2026</h2>
          <div className="parrish__view-toggle">
            <button
              className={`parrish__view-btn${viewMode === 'calendar' ? ' parrish__view-btn--active' : ''}`}
              onClick={() => setViewMode('calendar')}
            >
              Calendar
            </button>
            <button
              className={`parrish__view-btn${viewMode === 'list' ? ' parrish__view-btn--active' : ''}`}
              onClick={() => setViewMode('list')}
            >
              List
            </button>
          </div>
        </div>

        {viewMode === 'calendar' ? (
        <div className="parrish__cal-layout">
          <div className="parrish__cal">
            <div className="parrish__cal-header">
              {DAYS_OF_WEEK.map(d => (
                <div key={d} className="parrish__cal-dow">{d}</div>
              ))}
            </div>

            <div className="parrish__cal-grid">
              {cells.map((day, i) => {
                if (day === null) {
                  return <div key={`empty-${i}`} className="parrish__cal-cell parrish__cal-cell--empty" />;
                }
                const dayEvents = getEventsForDay(day);
                const hasEvents = dayEvents.length > 0;
                const isSelected = selectedDay === day;
                const open = isOpen(day);
                const clickable = hasEvents || open;
                return (
                  <button
                    key={day}
                    className={`parrish__cal-cell${open ? ' parrish__cal-cell--open' : ''}${isSelected ? ' parrish__cal-cell--selected' : ''}`}
                    onClick={() => clickable && setSelectedDay(isSelected ? null : day)}
                    disabled={!clickable}
                  >
                    <span className="parrish__cal-day">{day}</span>
                    {hasEvents ? (
                      <span className="parrish__cal-event-count">
                        {dayEvents.length} {dayEvents.length === 1 ? 'Event' : 'Events'}
                      </span>
                    ) : open ? (
                      <span className="parrish__cal-open-label">Open</span>
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="parrish__cal-detail-wrapper">
            {selectedDay ? (
              <div className="parrish__cal-detail">
                <h3 className="parrish__cal-detail-date">February {selectedDay}</h3>
                {selectedEvents.length > 0 ? (
                  <>
                    <div className="parrish__cal-open-hours">
                      Open 10 AM – 3 PM
                    </div>
                    {selectedEvents.map((event, i) => (
                      <div key={i} className="parrish__cal-event">
                        <h4>{event.title}</h4>
                        <p className="parrish__cal-event-time">
                          {event.time}
                          {event.admission && <span className="parrish__cal-event-admission">{event.admission}</span>}
                        </p>
                        <p className="parrish__cal-event-desc">{event.description}</p>
                        {event.link && (
                          <a href={event.link} target="_blank" rel="noopener noreferrer" className="parrish__cal-event-link">
                            More Info →
                          </a>
                        )}
                      </div>
                    ))}
                  </>
                ) : isOpen(selectedDay) ? (
                  <div className="parrish__cal-open-hours">
                    Open 10 AM – 3 PM
                    <p className="parrish__cal-event-desc" style={{ marginTop: '0.5rem' }}>
                      Stop by to explore the space — no special programming today, but you're always welcome.
                    </p>
                  </div>
                ) : null}
              </div>
            ) : (
              <div className="parrish__cal-detail parrish__cal-detail--empty">
                <p className="parrish__cal-detail-hint">Select a day to see details</p>
              </div>
            )}
          </div>
        </div>
        ) : (
        <div className="parrish__list">
          {events.map((event, i) => {
            const dow = DAYS_OF_WEEK[getDayOfWeek(event.day)];
            return (
              <div key={i} className="parrish__list-item">
                <div className="parrish__list-date">
                  <span className="parrish__list-dow">{dow}</span>
                  <span className="parrish__list-day">Feb {event.day}</span>
                </div>
                <div className="parrish__list-info">
                  <h4>{event.title}</h4>
                  <p className="parrish__list-meta">
                    {event.time}
                    {event.admission && <span className="parrish__cal-event-admission">{event.admission}</span>}
                  </p>
                  <p className="parrish__cal-event-desc">{event.description}</p>
                  {event.link && (
                    <a href={event.link} target="_blank" rel="noopener noreferrer" className="parrish__cal-event-link">
                      More Info →
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        )}
      </section>

      <section className="parrish__categories">
        {categories.map((cat, i) => (
          <div className="parrish__category" key={i}>
            <img src={cat.image} alt={cat.label} />
            <span className="parrish__category-label">{cat.label}</span>
          </div>
        ))}
      </section>

      <Marquee
        items={[
          'A collaboration between Weird Productions and Amos Cooper Jr. of Black Robin Ventures',
          'Honoring Black Wall Street'
        ]}
        dark={true}
        speed={35}
        separatorIcon="/images/lindsay.svg"
      />

      <section className="parrish__sponsors">
        <h2>Our Sponsors</h2>
        <div className="parrish__sponsor-logos">
          {sponsors.map((sponsor, i) => (
            <div className="parrish__sponsor" key={i}>
              <img src={sponsor.logo} alt={sponsor.name} />
            </div>
          ))}
        </div>
      </section>

      <ContactCard />
    </div>
  );
}
