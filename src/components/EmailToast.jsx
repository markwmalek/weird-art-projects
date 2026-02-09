import { useState, useEffect, useRef } from 'react';
import './EmailToast.css';

const STORAGE_KEY = 'emailToastDismissed';

// Mailerlite account and form IDs
const ML_ACCOUNT_ID = '1110032';
const ML_FORM_ID = '178957425260364838';

export default function EmailToast() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const lastScrollY = useRef(0);
  const hasSubscribed = useRef(false);

  useEffect(() => {
    // Check if user has already subscribed
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (dismissed === 'subscribed') {
      hasSubscribed.current = true;
      return;
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const isNearBottom = currentScrollY + windowHeight >= documentHeight - 100;

      // Scrolling down - show toast
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setVisible(true);
      }
      // Scrolling up - hide toast (unless subscribed or near bottom of page)
      else if (currentScrollY < lastScrollY.current && !hasSubscribed.current && !isNearBottom) {
        setVisible(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
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
      hasSubscribed.current = true;
      localStorage.setItem(STORAGE_KEY, 'subscribed');
      setTimeout(() => setVisible(false), 1500);
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className={`email-toast ${visible ? 'email-toast--visible' : ''}`}>
      <button className="email-toast__close" onClick={handleDismiss} aria-label="Close">
        ×
      </button>

      {status === 'success' ? (
        <div className="email-toast__success">
          <span>You're on the list!</span>
        </div>
      ) : (
        <>
          <p className="email-toast__text">Get updates on our next project</p>
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
