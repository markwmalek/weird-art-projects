import { useState } from 'react';
import Marquee from '../components/Marquee';
import ContactCard from '../components/ContactCard';
import './Parrish.css';

const events = [
  { day: 6, title: 'Launch Party', time: '6 PM - 9 PM', admission: 'Free', description: 'In no particular order: painting (v), paintings (n), puppets, popcorn, bubbly. Vinyl curated by Alison Matney of Bull City Vintage, featuring Jeghetto, Greta Boney, and the Weirdos. Casual and fun. Come by, say hey.', link: null },
  { day: 8, title: "Crowded Table Club: Galentine's Day x Black History Month Paint n Sip", time: '2 PM - 4 PM', admission: '$35', description: 'Led by local artist, stylist and all around icon, Sabrina Servance.', link: 'https://www.eventbrite.com/e/crowded-table-club-galentines-day-x-black-history-month-paint-n-sip-tickets-1980640527134' },
  { day: 8, title: 'Music Video Shoot', time: '6 PM - 9 PM', admission: null, description: 'With Hugh Swaso and Irene Hui of Jade Rabbit Co.', link: 'https://www.instagram.com/hughswaso/' },
  { day: 10, title: 'In TRUE Form Podcast LIVE', time: '8 PM - 9 PM', admission: 'Free', description: 'Live recording featuring host Corey Truesdale and guest Amos Cooper Jr. of Black Robin Ventures. The episode will premiere on YouTube with audio available on streaming platforms.', link: 'https://www.instagram.com/intrueform_' },
  { day: 12, title: 'Consumer Mastermind 1.0: Homebuying Hacks & Using Credit Wisely', time: '9 AM - 11 AM', admission: 'Free', description: "Join Jessica Davis of Durham's new PEER Center at Pinnacle Financial Partners for a fun, informal session on homebuying tips and smart credit use. Come learn, chat, and master the secrets to making your dream home a reality.", link: 'https://www.eventbrite.com/e/consumer-mastermind-10-homebuying-hacks-using-credit-wisely-tickets-1982250505623' },
  { day: 13, title: 'Black Velvet: Photographs by Chris Facey', time: '6 PM - 8 PM', admission: 'Free', description: 'Exhibition and artist conversation with photographers Chris Facey and Samantha Everette.', link: 'https://www.instagram.com/coco.butter.shutter/' },
  { day: 14, title: "Bridgertine's: A Carousel Curation", time: '8 PM - 12 AM', admission: '$0-$20', description: 'An intimate, Regency-inspired Valentine\'s evening featuring live music, themed bites, best-dressed award, and crowning of the Diamond of the Evening.', link: null },
  { day: 15, title: "Saints & Ain'ts: A Good Word", time: '5 PM - 7 PM', admission: '$7', description: 'An immersive pop-up performance experience inspired by the stage play created by Dasan Ahanu. There will be poetry, music, movement, and joy (always joy). Dasan and special guests will take the audience on an arts journey centered on community and truth.', link: 'https://agoodwordpopup.eventbrite.com' },
  { day: 18, title: 'Sip & Connect Community Night', time: '6 PM - 9 PM', admission: 'Free', description: "Hosted by Shaun Gill of the Alston Real Estate Group, this follow-up to last year's event brings local business owners and neighbors back together to connect, mingle, and build something new - this time, with LEGOs!", link: null },
  { day: 19, title: 'Make & Release: The Afterlife of Art', time: '6 PM - 9 PM', admission: 'Free', description: 'Hosted by Artist at Law Whitney Stanley, this casual, hands-on art night invites guests to create small works using provided materials, then decide what happens next: keep it, trade it, or let it go. A relaxed, come-and-go gathering centered on making, conversation, and some creative risk.', link: null },
  { day: 20, title: 'Black Cinema in the Bull City', time: '6 PM - 9 PM', admission: 'Free', description: 'Presented by Alece Oxendine and Penelope Bartlett of Film Durham, this panel explores creative pathways and challenges for Black filmmakers in Durham and North Carolina, followed by a short film screening.', link: 'https://www.instagram.com/film_durham/' },
  { day: 21, title: 'Behind the Data: Scientific Data as Art and Conversation', time: '12 PM - 2 PM', admission: 'Free', description: "Presented by Chantell Evans, PhD, of the Evans Lab at Duke University, this event uses scientific data as art to open conversations about scientists' journeys, curiosity, and the human stories behind research. No science background required - we welcome everyone to engage, ask questions, and explore how science actually happens.", link: 'https://www.evansresearchlab.com/' },
  { day: 22, title: 'The Burning House: Conversations with Joshuas', time: '3 PM - 5 PM', admission: 'Free', description: "The Joshuas Movement panel reimagines Dr. King's 'burning house' as a call to build community-owned health and social systems, exploring what's failing, what's emerging, and what's possible. Moderated by Dr. Terrance Ruth.", link: null },
{ day: 24, title: "Writin' Dirty: Southern Slang", time: '7:30 PM - 9:30 PM', admission: '$7', description: "\"Sipping tea,\" Beyoncé's Lemonade, and double cups of lean serve as inspiration for narrative poetry in this generative workshop. Drawing from pop culture artifacts, participants will explore distinct storytelling perspectives and leave with new work.", link: 'https://southernslangpoetryworkshopfeb2026.eventbrite.com' },
  { day: 25, title: 'Open Mic with Azul', time: '5:30 PM - 10 PM', admission: 'Free', description: 'An open mic for the girls, gays, theys, and anyone else who wanders in. Music, poetry, spoken word welcome. Sign up at 5:30 PM, start at 6 PM.', link: 'https://www.instagram.com/azulmzapata/' },
  { day: 26, title: 'Joy By Any Means', time: '6 PM - 10 PM', admission: 'Free', description: 'Join Candy Carver & Friends for JOY By Any Means: An energizing, Joy Playlist followed by a hip hop trivia game night. Enjoy the walls full of artwork, light refreshments and grab some JOY inspired merch or prints.', link: 'https://www.eventbrite.com/e/joy-by-any-means-tickets-1981594769298' },
  { day: 27, title: 'Fashion + Music Industry Game Night', time: '6 PM', admission: null, description: 'Hosted by Mo Dollaz & Mr. Cliché of Needle & Thread Co.', link: 'https://www.instagram.com/needlethreadco/' },
  { day: 28, title: 'Closing Party - I ❤ DRM', time: '3 PM', admission: 'Free', description: 'Closing party!! HP Fangs partners up with Weird Projects to bring his Keith Haring celebration. Tons of Keith Haring inspired art, live painting, interactive doodle station! Hot dogs, popcorn, and bubbles.', link: 'https://www.instagram.com/hpfangs/' },
];

const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
// Feb 2026 starts on Sunday (day 0), 28 days
const FEB_START_DAY = 0;
const FEB_DAYS = 28;

function getEventsForDay(day) {
  return events.filter(e => e.day === day);
}

const categories = [
  { label: 'Live Painting', image: '/images/parrish/live-painting.png' },
  { label: 'Puppetry', image: '/images/parrish/puppetry.png' },
  { label: 'Art', image: '/images/parrish/art-category.png' },
];

const artworks = [
  { title: 'Protection', artist: 'Gemynii', image: '/images/parrish/art/protection-gemynii.jpg', link: 'https://fa7b88-3.myshopify.com/products/protection-by-gemynii' },
  { title: 'The Bluez', artist: 'Gemynii', image: '/images/parrish/art/the-bluez-gemynii.jpg', link: 'https://fa7b88-3.myshopify.com/products/the-bluez-by-gemynii' },
  { title: 'We Been Here', artist: 'Gemynii', image: '/images/parrish/art/we-been-here-gemynii.jpg', link: 'https://fa7b88-3.myshopify.com/products/we-been-here-by-gemynii' },
  { title: 'Open', artist: 'Gemynii', image: '/images/parrish/art/open-gemynii.jpg', link: 'https://fa7b88-3.myshopify.com/products/open-by-gemynii' },
  { title: 'Mayowa', artist: 'Gemynii', image: '/images/parrish/art/mayowa-gemynii.jpg', link: 'https://fa7b88-3.myshopify.com/products/mayowa-by-gemynii' },
  { title: 'Aurora', artist: 'Zeus Alexander', image: '/images/parrish/art/aurora-zeus-alexander.jpg', link: 'https://fa7b88-3.myshopify.com/products/aurora-by-zeus-alexander' },
  { title: 'Sanctum', artist: 'Zeus Alexander', image: '/images/parrish/art/sanctum-zeus-alexander.jpg', link: 'https://fa7b88-3.myshopify.com/products/sanctum-by-zeus-alexander' },
  { title: 'Growth', artist: 'Zeus Alexander', image: '/images/parrish/art/growth-zeus-alexander.jpg', link: 'https://fa7b88-3.myshopify.com/products/growth-by-zeus-alexander' },
  { title: 'Veilform', artist: 'Zeus Alexander', image: '/images/parrish/art/veilform-zeus-alexander.jpg', link: 'https://fa7b88-3.myshopify.com/products/veilform-by-zeus-alexander' },
  { title: 'Verdant Ascension', artist: 'Zeus Alexander', image: '/images/parrish/art/verdant-ascension-zeus-alexander.jpg', link: 'https://fa7b88-3.myshopify.com/products/verdant-ascension-by-zeus-alexander' },
  { title: 'Open Water', artist: 'Reneesha Mccoy', image: '/images/parrish/art/open-water-reneesha-mccoy.png', link: 'https://fa7b88-3.myshopify.com/products/open-water-by-reneesha-mccoy' },
  { title: 'Bloom', artist: 'Reneesha Mccoy', image: '/images/parrish/art/bloom-reneesha-mccoy.png', link: 'https://fa7b88-3.myshopify.com/products/bloom-by-reneesha-mccoy' },
  { title: 'Cluster', artist: 'Reneesha Mccoy', image: '/images/parrish/art/cluster-reneesha-mccoy.png', link: 'https://fa7b88-3.myshopify.com/products/cluster-by-reneesha-mccoy' },
  { title: 'Submerging', artist: 'LARA', image: '/images/parrish/art/submerging-lara.jpg', link: 'https://fa7b88-3.myshopify.com/products/submerging-by-lara' },
  { title: 'Headphone Toad', artist: 'Myles Brown', image: '/images/parrish/art/headphone-toad-myles-brown.jpg', link: 'https://fa7b88-3.myshopify.com/products/headphone-toad-by-myles-brown' },
  { title: 'Loon', artist: 'Sabrina Servance', image: '/images/parrish/art/patin-sabrina-servance.jpg', link: 'https://fa7b88-3.myshopify.com/products/patin-by-sabrina-servance' },
  { title: 'The Void', artist: 'Dawn R. Taylor', image: '/images/parrish/art/the-void-dawn-taylor.jpg', link: 'https://fa7b88-3.myshopify.com/products/the-void-by-dawn-r-taylor' },
  { title: 'Yin and Yang before Zen', artist: 'Dawn R. Taylor', image: '/images/parrish/art/yin-yang-zen-dawn-taylor.jpg', link: 'https://fa7b88-3.myshopify.com/products/yin-and-yang-before-zen-by-dawn-r-taylor' },
  { title: 'Loves Me Not', artist: 'IZA', image: '/images/parrish/art/loves-me-not-iza.jpg', link: 'https://fa7b88-3.myshopify.com/products/loves-me-not-by-iza' },
];

const sponsors = [
  { name: 'Black Robin Ventures', logo: '/images/sponsors/black-robin.webp' },
  { name: 'Whitney D. Stanley', logo: '/images/sponsors/whitney-logo.png' },
  { name: 'Downtown Durham Inc', logo: '/images/sponsors/ddi-logo.webp' },
  { name: 'Durham Arts Council', logo: '/images/sponsors/durham-arts-council.png' },
];

function getTodayInFeb2026() {
  const now = new Date();
  if (now.getFullYear() === 2026 && now.getMonth() === 1) {
    return now.getDate();
  }
  return null;
}

export default function Parrish() {
  const [selectedDay, setSelectedDay] = useState(getTodayInFeb2026);
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
          <h1>Parties on<br />Parrish</h1>
          <h2 className="parrish__date">February 1 - 28 2026</h2>
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

      <section className="parrish__metrics">
        <div className="parrish__metrics-intro">
          <h2 className="parrish__metrics-heading">One month.<br />One block.<br />A lot of weird.</h2>
          <p className="parrish__metrics-sub">Here's what Durham showed up for at 104 W Parrish St this February.</p>
        </div>
        <div className="parrish__metrics-stats">
          <div className="parrish__metric">
            <span className="parrish__metric-num">19</span>
            <span className="parrish__metric-label">Parties</span>
            <span className="parrish__metric-desc">From live podcast recordings to poetry workshops, paint nights to puppet shows — Durham creatives filled every week.</span>
          </div>
          <div className="parrish__metric">
            <span className="parrish__metric-num">25+</span>
            <span className="parrish__metric-label">Artists</span>
            <span className="parrish__metric-desc">Painters, photographers, poets, musicians, filmmakers, and more — all rooted in Durham's creative community.</span>
          </div>
          <div className="parrish__metric">
            <span className="parrish__metric-num">6+</span>
            <span className="parrish__metric-label">Art Pieces Sold</span>
            <span className="parrish__metric-desc">Original works found new homes — and the month isn't even over yet.</span>
          </div>
        </div>
      </section>

      <section className="parrish__art-scroll">
        <h2 className="parrish__art-heading">Buy Art</h2>
        <div className="parrish__art-track">
          {artworks.map((art, i) => (
            <a href={art.link} target="_blank" rel="noopener noreferrer" className="parrish__art-item" key={i}>
              <img src={art.image} alt={art.title} />
              <div className="parrish__art-info">
                <span className="parrish__art-title">{art.title}</span>
                <span className="parrish__art-artist">by {art.artist}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

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
                return (
                  <button
                    key={day}
                    className={`parrish__cal-cell${open ? ' parrish__cal-cell--open' : ' parrish__cal-cell--closed'}${isSelected ? ' parrish__cal-cell--selected' : ''}`}
                    onClick={() => setSelectedDay(isSelected ? null : day)}
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
                      Stop by to explore the space and buy art! No special programming today, unless you have a great idea. Shoot us a DM to discuss!
                    </p>
                  </div>
                ) : (
                  <p className="parrish__cal-event-desc">
                    We're closed today, but{' '}
                    <a href="mailto:lindsay@weirdproductions.art">shoot us an email</a>{' '}
                    if you want to host an event!
                  </p>
                )}
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
