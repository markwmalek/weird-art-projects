import './ContactCard.css';

export default function ContactCard() {
  return (
    <section className="contact-card-section">
      <div className="contact-card">
        <div className="contact-card__sticker">
          <img
            src="/images/team/Logo Sticker.svg"
            alt="Weird Art Projects sticker"
            className="contact-card__sticker-img"
          />
        </div>
        <h2>Get in Touch</h2>
        <p>Have a weird idea? Want to collaborate? We'd love to hear from you.</p>
        <a
          href="mailto:lindsay@weirdproductions.art"
          className="contact-card__btn"
        >
          Say Hello &rarr;
        </a>
      </div>
    </section>
  );
}
