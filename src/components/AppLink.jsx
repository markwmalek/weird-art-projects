import { Link, useNavigate } from 'react-router-dom';

// Check if running as iOS PWA (standalone mode)
const isIOSPWA = () =>
  typeof window !== 'undefined' && window.navigator.standalone === true;

/**
 * AppLink - A Link component that works correctly in iOS PWA mode
 * Prevents Safari from opening when navigating within the app
 */
export default function AppLink({ to, children, onClick, ...props }) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (isIOSPWA()) {
      e.preventDefault();
      navigate(to);
    }
    if (onClick) onClick(e);
  };

  return (
    <Link to={to} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
