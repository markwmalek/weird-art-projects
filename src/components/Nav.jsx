import { useState, useRef, useEffect } from 'react';
import AppLink from './AppLink';
import './Nav.css';

export default function Nav() {
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const projectsRef = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (projectsRef.current && !projectsRef.current.contains(e.target)) setProjectsOpen(false);
    }
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  const handleProjectClick = () => {
    setProjectsOpen(false);
    closeMobile();
  };

  return (
    <header className="nav">
      <div className="nav__inner">
        <AppLink to="/" className="nav__logo" onClick={closeMobile}>
          Weird Art Projects
        </AppLink>

        <button
          className={`nav__hamburger ${mobileOpen ? 'nav__hamburger--open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav__menu ${mobileOpen ? 'nav__menu--open' : ''}`}>
          <AppLink to="/" className="nav__link" onClick={closeMobile}>Home</AppLink>

          <div className="nav__dropdown" ref={projectsRef}>
            <button
              className="nav__link"
              onClick={() => setProjectsOpen(!projectsOpen)}
            >
              Projects <span className="nav__arrow">&#9662;</span>
            </button>
            {projectsOpen && (
              <div className="nav__dropdown-menu">
                <AppLink to="/parrish" onClick={handleProjectClick}>Parties on Parrish</AppLink>
                <AppLink to="/windows" onClick={handleProjectClick}>Weird Windows</AppLink>
              </div>
            )}
          </div>

          <AppLink to="/team" className="nav__link" onClick={closeMobile}>Team</AppLink>
        </nav>
      </div>
    </header>
  );
}
