import AppLink from '../components/AppLink';
import HeroSvg from '../components/HeroSvg';
import './Home.css';

const upcomingEvents = [
  {
    title: 'Parties on Parrish',
    date: 'FEB 1 - 28, 2026',
    venue: 'Black Wall Street',
    image: '/images/home/hero-event.jpg',
    link: '/parrish',
  },
  {
    title: 'Weird Windows',
    date: 'DEC 2025',
    venue: 'Downtown Durham',
    image: '/images/home/windows-event.png',
    link: '/windows',
  },
];

export default function Home() {
  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero__svg">
          <HeroSvg />
        </div>
      </section>

      {/* Stats row */}
      <section className="stats">
        <div className="stats__item">
          <span className="stats__num">501(c)(3)</span>
          <span className="stats__label">Nonprofit</span>
        </div>
        <div className="stats__item">
          <span className="stats__num">Durham</span>
          <span className="stats__label">North Carolina</span>
        </div>
      </section>

      {/* Events tiles */}
      <section className="tiles">
        <h2 className="tiles__heading">Our Projects</h2>
        <div className="tiles__grid">
          <AppLink to={upcomingEvents[0].link} className="tile tile--lg">
            <img src={upcomingEvents[0].image} alt={upcomingEvents[0].title} className="tile__img" />
            <div className="tile__content">
              <span className="tile__date">{upcomingEvents[0].date}</span>
              <h3 className="tile__title">{upcomingEvents[0].title}</h3>
              <span className="tile__cta">{upcomingEvents[0].venue} &rarr;</span>
            </div>
          </AppLink>

          <AppLink to={upcomingEvents[1].link} className="tile tile--sm">
            <img src={upcomingEvents[1].image} alt={upcomingEvents[1].title} className="tile__img" />
            <div className="tile__content">
              <span className="tile__date">{upcomingEvents[1].date}</span>
              <h3 className="tile__title">{upcomingEvents[1].title}</h3>
              <span className="tile__cta">{upcomingEvents[1].venue} &rarr;</span>
            </div>
          </AppLink>
        </div>
      </section>

      {/* About + sticker row */}
      <section className="tiles">
        <div className="tiles__grid">
          <div className="tile tile--text">
            <h2 className="tile__text-title">About Weird</h2>
            <p className="tile__text-body">
              Weird Art Projects brings together Durham's creative community through
              collaborative events, immersive experiences, and public art activations.
              We believe in the power of art to connect people and transform spaces.
            </p>
            <AppLink to="/team" className="tile__link">Meet the Team &rarr;</AppLink>
          </div>

          <div className="tile tile--sticker">
            <img src="/images/home/logo-sticker.png" alt="Weird Art Projects" />
          </div>
        </div>
      </section>

      {/* Donate row - hidden until donation system is ready
      <section className="tiles">
        <div className="tile tile--dark tile--full">
          <h2 className="tile__dark-title">Support Art for All</h2>
          <p className="tile__dark-body">
            Your support helps us create free public programming and uplift local artists.
          </p>
          <a href="#donate" className="tile__btn">Donate &rarr;</a>
        </div>
      </section>
      */}
    </div>
  );
}
