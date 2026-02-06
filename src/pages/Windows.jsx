import Marquee from '../components/Marquee';
import ContactCard from '../components/ContactCard';
import WindowsMap from '../components/WindowsMap';
import './Windows.css';

const windows = [
  {
    title: 'A Reclaimed Christmas by Ali Waller',
    location: '121 Market St, Durham, NC',
    handle: '@alicekayw',
    description:
      'Honors those who remake old traditions for themselves. Ali Waller began showing art at 18 in Glasgow and has worked as a sculptor on the east coast for eight years, now based in Durham. Her work confronts trauma with hyperreal life casts and her own illustrative symbols.',
    image: '/images/windows/artist-ali-waller.jpg',
  },
  {
    title: 'Carnival of Dogs by Christian Smith',
    location: '307 West Main St, Durham, NC',
    handle: '@goodchristianartpage',
    description:
      'Inspired by vintage toy and pet store displays. Christian is a Raleigh artist influenced by vintage comics, westerns, and clowns. He mainly paints clothing and hand-cuts wood.',
    image: '/images/windows/artist-christian-smith.jpg',
  },
  {
    title: 'Window Shopping in an Alternate Reality by Jeghetto',
    location: '407 E Chapel Hill St, Durham, NC',
    handle: '@jeghettos_puppets',
    description:
      'A sci-fi holiday season where robots and humans shop together. Tarish "Jeghetto" Pipkins is a master puppeteer who\'s built recycled, found-material puppets for 20+ years.',
    image: '/images/windows/artist-jeghetto.png',
  },
  {
    title: 'The Holiday Party by Jordan Grace Owens',
    location: '309 E Chapel Hill St, Durham, NC',
    handle: '@jordangraceowens',
    description:
      'Plays on the voyeurism of peeking into a strange office holiday party. Jordan Grace Owens is a Durham artist creating colorful, semi-sculptural figures and abstract paintings.',
    image: '/images/windows/artist-jordan-owens.png',
  },
  {
    title: "Santa's Werkshop by Jason Lord",
    location: '204 Rigsbee Ave, Durham, NC',
    handle: '@jasonearllord',
    description:
      'A public-facing intervention that activates curiosity outside of the white cube gallery space. Jason Lord is an interdisciplinary artist in Durham who stacks objects, takes photo walks, draws, and runs material experiments.',
    image: '/images/windows/artist-jason-lord.png',
  },
  {
    title: 'A Holiday Under the Sea by Bob Ostrom',
    location: '107 E Chapel Hill St, Durham, NC',
    handle: '@bobostromstudio',
    description:
      'An undersea holiday with mermaids and their underwater friends. Bob spent about thirty years drawing children\'s books and loved it.',
    image: '/images/windows/artist-bob-ostrom.png',
  },
  {
    title: 'Be Audacious by Sabrina Servance',
    location: '212 W Main St, Durham, NC',
    handle: '@sabrinastyled',
    description:
      'Bringing joy and color where things stay traditional. Sabrina Servance is a mixed-media artist exploring identity, memory, and transformation through layered visuals.',
    image: '/images/windows/artist-sabrina-servance.png',
  },
];

const highlights = [
  { label: 'Walking Tour', image: '/images/windows/highlight-walking-tour.png' },
  { label: 'Artist Talk', image: '/images/windows/highlight-artist-talk.png' },
  { label: '7 Unique Displays', image: '/images/windows/highlight-displays.png' },
];

const sponsors = [
  { name: 'Downtown Durham Inc', logo: '/images/sponsors/ddi-logo.webp' },
  { name: 'Durham Arts Council', logo: '/images/sponsors/durham-arts-council.png' },
];

export default function Windows() {
  return (
    <div className="windows">
      <section className="windows__hero">
        <div className="windows__hero-text">
          <h1>Weird<br />Windows</h1>
          <h2 className="windows__date">December 2025</h2>
          <div className="windows__desc">
            <p><strong>Our Weird spin on Macy's holiday windows!</strong></p>
            <p>
              Weird artists transform downtown Durham storefronts into holiday displays to be unveiled
              during Durham's annual tree lighting celebration. Check out our artists below!
            </p>
            <a href="#map" className="windows__map-link">Explore the Map</a>
          </div>
        </div>
        <div className="windows__hero-graphic">
          <img
            src="/images/windows/window-poster.png"
            alt="Weird Windows poster"
            className="windows__poster-img"
          />
        </div>
      </section>

      <Marquee
        items={['SEE THE WINDOWS', 'ALL MONTH LONG', 'DECEMBER 2025']}
        dark={false}
        speed={25}
        separatorIcon="/images/lindsay.svg"
      />

      <section className="windows__map-section" id="map">
        <div className="windows__map-content">
          <h2>Explore the Windows</h2>
          <p>
            All 7 displays are within walking distance in downtown Durham. Click a marker to see details and get directions.
          </p>
        </div>
        <WindowsMap />
      </section>

      <section className="windows__highlights">
        {highlights.map((h, i) => (
          <div className="windows__highlight" key={i}>
            <img src={h.image} alt={h.label} />
            <span className="windows__highlight-label">{h.label}</span>
          </div>
        ))}
      </section>

      <section className="windows__artists">
        <h2 className="windows__artists-title">The Windows</h2>
        <div className="windows__artist-grid">
          {windows.map((w, i) => (
            <div className={`windows__artist ${i % 2 === 0 ? '' : 'windows__artist--reverse'}`} key={i}>
              <div className="windows__artist-image">
                <img src={w.image} alt={w.title} />
              </div>
              <div className="windows__artist-info">
                <h3>{w.title}</h3>
                <p className="windows__artist-location">| {w.location} | {w.handle}</p>
                <p className="windows__artist-desc">{w.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Marquee
        items={[
          'Weird Windows is a collaboration between Weird Projects and Downtown Durham Inc.'
        ]}
        dark={true}
        speed={35}
        separatorIcon="/images/lindsay.svg"
      />

      <section className="windows__sponsors">
        <h2>Our Sponsors</h2>
        <div className="windows__sponsor-logos">
          {sponsors.map((sponsor, i) => (
            <div className="windows__sponsor" key={i}>
              <img src={sponsor.logo} alt={sponsor.name} />
            </div>
          ))}
        </div>
      </section>

      <ContactCard />
    </div>
  );
}
