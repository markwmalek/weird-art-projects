import { useState } from 'react';
import './EmailBanner.css';

const STORAGE_KEY = 'emailBannerDismissed';
const ML_ACCOUNT_ID = '1110032';
const ML_FORM_ID = '178957425260364838';

// Check if already dismissed before component renders
const isAlreadyDismissed = () => {
  try {
    return !!localStorage.getItem(STORAGE_KEY);
  } catch {
    return false;
  }
};

export default function EmailBanner() {
  const [dismissed, setDismissed] = useState(isAlreadyDismissed);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  // Keep a tiny spacer so Safari tab bar samples the right color
  if (dismissed) return <div className="email-banner__spacer" />;

  const handleDismiss = () => {
    setDismissed(true);
    localStorage.setItem(STORAGE_KEY, 'dismissed');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || status === 'loading') return;

    setStatus('loading');

    try {
      await fetch(`https://assets.mailerlite.com/jsonp/${ML_ACCOUNT_ID}/forms/${ML_FORM_ID}/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ 'fields[email]': email }),
        mode: 'no-cors',
      });

      setStatus('success');
      localStorage.setItem(STORAGE_KEY, 'subscribed');
      setTimeout(() => setDismissed(true), 1500);
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="email-banner">
      <div className="email-banner__inner">
        {status === 'success' ? (
          <span className="email-banner__success">You're on the list!</span>
        ) : (
          <>
            <span className="email-banner__text">Get updates on our next project</span>
            <form className="email-banner__form" onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="email-banner__input"
                required
              />
              <button
                type="submit"
                className="email-banner__btn"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? '...' : 'Subscribe'}
              </button>
            </form>
            {status === 'error' && (
              <span className="email-banner__error">Error, try again</span>
            )}
          </>
        )}
        <button className="email-banner__close" onClick={handleDismiss} aria-label="Close">
          ×
        </button>
      </div>
    </div>
  );
}
