import AppLink from '../components/AppLink';
import HeroSvg from '../components/HeroSvg';
import './Home.css';

const projects = [
  {
    title: 'Weird Pot Party',
    date: 'MAY 15, 2026',
    venue: 'CCB Plaza, Downtown Durham',
    image: '/images/pot-party/Hero Image.png',
    link: '/weird-pot-party',
  },
  {
    title: 'Parties on Parrish',
    date: 'FEB 1 – 28, 2026',
    venue: 'Black Wall Street',
    image: '/images/parrish/live-painting.png',
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

      {/* Featured photo */}
      <section className="featured">
        <AppLink to={projects[0].link} className="featured__link">
          <img
            src={projects[0].image}
            alt={projects[0].title}
            className="featured__img"
          />
        </AppLink>
        <p className="featured__caption">
          Bringing Durham's creative community together through collaborative events &amp; public art.
        </p>
      </section>

      {/* Projects grid */}
      <section className="projects">
        <h2 className="projects__heading">Our Projects</h2>
        <div className="projects__grid">
          {projects.map((project) => (
            <AppLink to={project.link} className="project-card" key={project.title}>
              <div className="project-card__img-wrap">
                <img src={project.image} alt={project.title} className="project-card__img" />
              </div>
              <div className="project-card__info">
                <h3 className="project-card__title">{project.title}</h3>
                <span className="project-card__meta">{project.venue} — {project.date}</span>
              </div>
            </AppLink>
          ))}
        </div>
      </section>
    </div>
  );
}
