import { useState } from 'react';
import './AnnouncementBanner.css';

const STORAGE_KEY = 'announcementBannerDismissed';

const isAlreadyDismissed = () => {
  try {
    return !!localStorage.getItem(STORAGE_KEY);
  } catch {
    return false;
  }
};

export default function AnnouncementBanner() {
  const [dismissed, setDismissed] = useState(isAlreadyDismissed);

  if (dismissed) return null;

  const handleDismiss = () => {
    setDismissed(true);
    localStorage.setItem(STORAGE_KEY, 'dismissed');
  };

  return (
    <div className="announcement-banner">
      <div className="announcement-banner__inner">
        <span className="announcement-banner__text">
          Call for Art: Submit to our Keith Haring inspired event{' '}
          <a
            href="https://forms.gle/Aefren717C6AJb4z9"
            target="_blank"
            rel="noopener noreferrer"
            className="announcement-banner__link"
          >
            "I ❤️ DRM"
          </a>
        </span>
        <button className="announcement-banner__close" onClick={handleDismiss} aria-label="Close">
          ×
        </button>
      </div>
    </div>
  );
}
