import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

  return (
    <header className="nav">
      <div className="nav__inner">
        <Link to="/" className="nav__logo">
          Weird Art Projects
        </Link>

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
          <Link to="/" className="nav__link" onClick={closeMobile}>Home</Link>

          <div className="nav__dropdown" ref={projectsRef}>
            <button
              className="nav__link"
              onClick={() => setProjectsOpen(!projectsOpen)}
            >
              Projects <span className="nav__arrow">&#9662;</span>
            </button>
            {projectsOpen && (
              <div className="nav__dropdown-menu">
                <Link to="/parrish" onClick={() => { setProjectsOpen(false); closeMobile(); }}>Parties on Parrish</Link>
                <Link to="/windows" onClick={() => { setProjectsOpen(false); closeMobile(); }}>Weird Windows</Link>
              </div>
            )}
          </div>

          <Link to="/team" className="nav__link" onClick={closeMobile}>Team</Link>
        </nav>
      </div>
    </header>
  );
}
