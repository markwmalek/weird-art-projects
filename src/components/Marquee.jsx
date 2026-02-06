import './Marquee.css';

export default function Marquee({ items, dark = false, speed = 30, separatorIcon }) {
  const style = { '--marquee-speed': `${speed}s` };

  const sep = separatorIcon
    ? <img src={separatorIcon} alt="" className="marquee__icon" />
    : null;

  const content = items.map((item, i) => (
    <span key={i}>
      {sep || ' \u2727 '}
      {item}
    </span>
  ));

  return (
    <div className={`marquee ${dark ? 'marquee--dark' : ''}`} style={style}>
      <div className="marquee__track">
        <span className="marquee__content">{content}{sep || ' \u2727 '}</span>
        <span className="marquee__content">{content}{sep || ' \u2727 '}</span>
        <span className="marquee__content">{content}{sep || ' \u2727 '}</span>
      </div>
    </div>
  );
}
