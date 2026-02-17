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
    <header className="nav">
      <div className="nav__inner">
        {/* Desktop: logo + nav */}
        <AppLink to="/" className="nav__logo">
          Weird Art Projects
        </AppLink>

        <nav className="nav__menu">
          <AppLink to="/" className="nav__link">Home</AppLink>

          <div className="nav__dropdown" ref={projectsRef}>
            <button
              className={`nav__link ${isProjectsPage || projectsOpen ? 'nav__link--active' : ''}`}
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
  );
}
