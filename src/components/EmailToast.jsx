import { useState, useEffect } from 'react';
import './EmailToast.css';

const TOAST_DELAY = 5000; // 5 seconds (for testing)
const STORAGE_KEY = 'emailToastDismissed';

// Mailerlite account and form IDs
const ML_ACCOUNT_ID = '1110032';
const ML_FORM_ID = '178957425260364838';

export default function EmailToast() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  useEffect(() => {
    // Check if user has already dismissed or subscribed
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (dismissed) return;

    const timer = setTimeout(() => {
      setVisible(true);
    }, TOAST_DELAY);

    return () => clearTimeout(timer);
  }, []);

  // Load Mailerlite script when toast becomes visible
  useEffect(() => {
    if (!visible) return;

    // Check if script already loaded
    if (window.ml) return;

    const script = document.createElement('script');
    script.src = 'https://assets.mailerlite.com/js/universal.js';
    script.async = true;
    script.onload = () => {
      if (window.ml) {
        window.ml('account', ML_ACCOUNT_ID);
      }
    };
    document.head.appendChild(script);
  }, [visible]);

  const handleDismiss = () => {
    setVisible(false);
    localStorage.setItem(STORAGE_KEY, 'true');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || status === 'loading') return;

    setStatus('loading');

    try {
      // Submit via Mailerlite's API endpoint
      const response = await fetch(`https://assets.mailerlite.com/jsonp/${ML_ACCOUNT_ID}/forms/${ML_FORM_ID}/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          'fields[email]': email,
        }),
        mode: 'no-cors',
      });

      // With no-cors we can't read response, assume success
      setStatus('success');
      localStorage.setItem(STORAGE_KEY, 'subscribed');
      setTimeout(() => setVisible(false), 2000);
    } catch (err) {
      setStatus('error');
    }
  };

  if (!visible) return null;

  return (
    <div className="email-toast">
      <button className="email-toast__close" onClick={handleDismiss} aria-label="Close">
        ×
      </button>

      {status === 'success' ? (
        <div className="email-toast__success">
          <span className="email-toast__check">✓</span>
          <span>You're on the list!</span>
        </div>
      ) : (
        <>
          <p className="email-toast__text">Stay weird — get updates on our next project</p>
          <form className="email-toast__form" onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="email-toast__input"
              required
            />
            <button
              type="submit"
              className="email-toast__btn"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? '...' : 'Subscribe'}
            </button>
          </form>
          {status === 'error' && (
            <p className="email-toast__error">Something went wrong. Try again!</p>
          )}
        </>
      )}
    </div>
  );
}
