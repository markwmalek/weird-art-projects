import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AppLink from './AppLink';
import './Nav.css';

export default function Nav() {
  const [projectsOpen, setProjectsOpen] = useState(false);
  const projectsRef = useRef(null);
  const location = useLocation();

  const isProjectsPage = location.pathname === '/parrish' || location.pathname === '/windows';

  useEffect(() => {
    function handleClick(e) {
      if (projectsRef.current && !projectsRef.current.contains(e.target)) setProjectsOpen(false);
    }
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const handleProjectClick = () => {
    setProjectsOpen(false);
  };

  return (
    <>
      {/* Top header */}
      <header className="nav">
        <div className="nav__inner">
          <AppLink to="/" className="nav__logo">
            Weird Art Projects
          </AppLink>

          {/* Desktop nav */}
          <nav className="nav__menu nav__menu--desktop">
            <AppLink to="/" className="nav__link">Home</AppLink>

            <div className="nav__dropdown" ref={projectsRef}>
              <button
                className="nav__link"
                onClick={() => setProjectsOpen(!projectsOpen)}
              >
                Projects <span className="nav__arrow">&#9662;</span>
              </button>
              {projectsOpen && (
                <div className="nav__dropdown-menu">
                  <AppLink to="/windows" onClick={handleProjectClick}>Weird Windows</AppLink>
                  <AppLink to="/parrish" onClick={handleProjectClick}>Parties on Parrish</AppLink>
                </div>
              )}
            </div>

            <AppLink to="/team" className="nav__link">Team</AppLink>
          </nav>
        </div>
      </header>

      {/* Mobile bottom nav */}
      <nav className="nav__mobile-bar">
        <AppLink to="/" className="nav__mobile-link">Home</AppLink>

        <div className="nav__mobile-dropdown" ref={projectsRef}>
          <button
            className={`nav__mobile-link ${isProjectsPage || projectsOpen ? 'nav__mobile-link--active' : ''}`}
            onClick={() => setProjectsOpen(!projectsOpen)}
          >
            Projects
          </button>
          {projectsOpen && (
            <div className="nav__mobile-dropdown-menu">
              <AppLink to="/windows" onClick={handleProjectClick}>Weird Windows</AppLink>
              <AppLink to="/parrish" onClick={handleProjectClick}>Parties on Parrish</AppLink>
            </div>
          )}
        </div>

        <AppLink to="/team" className="nav__mobile-link">Team</AppLink>
      </nav>
    </>
  );
}
