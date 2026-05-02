import './DonationBanner.css';

const DONATE_URL = 'https://fa7b88-3.myshopify.com/products/dianne-hebert-memorial-fund';

export default function DonationBanner() {
  return (
    <div className="donation-banner">
      <a
        href={DONATE_URL}
        className="donation-banner__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="donation-banner__text">
          In honor of Dianne Hebert — support Weird Art Projects
        </span>
        <span className="donation-banner__cta">Donate &rarr;</span>
      </a>
    </div>
  );
}
