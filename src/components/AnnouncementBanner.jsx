import { useState } from 'react';
import './AnnouncementBanner.css';

const STORAGE_KEY = 'announcementBannerDismissed2';

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
          Come to the Closing Party for Parties on Parrish — This Saturday at 3PM
        </span>
        <button className="announcement-banner__close" onClick={handleDismiss} aria-label="Close">
          ×
        </button>
      </div>
    </div>
  );
}
