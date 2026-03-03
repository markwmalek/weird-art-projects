import { useState } from 'react';
import './AmericanUnderground.css';

const PASSWORD = 'AU2026';
const STORAGE_KEY = 'au_unlocked';

export default function AmericanUnderground() {
  const [unlocked, setUnlocked] = useState(() => {
    try { return sessionStorage.getItem(STORAGE_KEY) === 'true'; } catch { return false; }
  });
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, 'true');
      setUnlocked(true);
    } else {
      setError(true);
      setInput('');
      setTimeout(() => setError(false), 2000);
    }
  };

  if (!unlocked) {
    return (
      <div className="au-gate">
        <div className="au-gate__inner">
          <h1 className="au-gate__title">American Underground</h1>
          <p className="au-gate__sub">This page is private. Enter the password to continue.</p>
          <form className="au-gate__form" onSubmit={handleSubmit}>
            <input
              type="password"
              className={`au-gate__input ${error ? 'au-gate__input--error' : ''}`}
              placeholder="Password"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              autoFocus
            />
            <button type="submit" className="au-gate__btn">Enter</button>
          </form>
          {error && <p className="au-gate__error">Incorrect password</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="au">

      {/* Hero */}
      <section className="au__hero">
        <div className="au__hero-text">
          <p className="au__eyebrow">Weird Art Projects ✕ American Underground</p>
          <h1>American<br />Underground</h1>
          <p className="au__hero-sub">Decor Proposal — March 7</p>
        </div>
      </section>

      {/* Goal */}
      <section className="au__goal">
        <div className="au__goal-inner">
          <p className="au__section-label">Goal</p>
          <h2 className="au__goal-text">Transform the new AU into a space that feels warm, lived-in, and local — through curated bold art, lighting, and decor.</h2>
        </div>
      </section>

      {/* Inspiration */}
      <section className="au__section au__inspiration">
        <div className="au__section-inner">
          <p className="au__section-label">Inspiration</p>
          <div className="au__inspiration-grid">
            <img src="/images/au/p3_0.png" alt="Inspiration" className="au__inspiration-main" />
            <div className="au__inspiration-small">
              <img src="/images/au/p3_1.png" alt="Inspiration" />
              <img src="/images/au/p3_2.png" alt="Inspiration" />
              <img src="/images/au/p3_3.jpeg" alt="Inspiration" />
              <img src="/images/au/p3_4.png" alt="Inspiration" />
              <img src="/images/au/p3_5.png" alt="Inspiration" />
            </div>
          </div>
        </div>
      </section>

      {/* Scope of Work */}
      <section className="au__section au__scope">
        <div className="au__section-inner">
          <p className="au__section-label">Scope of Work</p>
          <h2 className="au__section-title">Interior Decorating for the Following Spaces</h2>
          <div className="au__table-wrap">
            <table className="au__table">
              <thead>
                <tr>
                  <th>Space</th>
                  <th>Decor</th>
                  <th>Floor</th>
                  <th>Install</th>
                  <th>Priority</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>The HUB Lounge</td><td>Rugs, Plants, Lights, Art, Furniture, Objects</td><td>1st Floor</td><td>TBD</td><td><span className="au__badge au__badge--1">1</span></td></tr>
                <tr><td>The HUB Coworking</td><td>Rugs, Plants, Lights, Art, Objects</td><td>1st Floor</td><td>TBD</td><td><span className="au__badge au__badge--1">1</span></td></tr>
                <tr><td>Botanical Library</td><td>Plants, Art, Objects</td><td>1st Floor</td><td>—</td><td><span className="au__badge au__badge--2">2</span></td></tr>
                <tr><td>AU Yearbook Room</td><td>Plants, Art, Objects</td><td>1st Floor</td><td>TBD</td><td><span className="au__badge au__badge--1">1</span></td></tr>
                <tr><td>Swings/Hammocks</td><td>Rugs, Art, Objects</td><td>1st Floor</td><td>—</td><td><span className="au__badge au__badge--2">2</span></td></tr>
                <tr><td>Vestibule</td><td>Rugs, Art, Objects</td><td>1st Floor</td><td>—</td><td><span className="au__badge au__badge--2">2</span></td></tr>
                <tr><td>Assigned Desks</td><td>Art, Lights</td><td>1st Floor</td><td>TBD</td><td><span className="au__badge au__badge--1">1</span></td></tr>
                <tr><td>Coworking Space</td><td>Rugs, Plants, Lights, Art, Furniture, Objects</td><td>2nd Floor</td><td>TBD</td><td><span className="au__badge au__badge--1">1</span></td></tr>
                <tr><td>Community Garden</td><td>Rugs, Art</td><td>2nd Floor</td><td>—</td><td><span className="au__badge au__badge--2">2</span></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* The HUB: Lounge 1st Floor */}
      <section className="au__section au__space">
        <div className="au__section-inner">
          <div className="au__space-header">
            <p className="au__section-label">The HUB: Lounge — 1st Floor</p>
            <h2 className="au__section-title">A layered industrial-modern retreat blending expressive art, sculptural seating, and warm brick textures.</h2>
          </div>
          <img src="/images/au/p5_0.png" alt="The HUB Lounge" className="au__space-hero-img" />
          <div className="au__space-body">
            <div className="au__space-col">
              <h3 className="au__col-title">Budget</h3>
              <div className="au__table-wrap">
                <table className="au__table">
                  <thead><tr><th>Item</th><th>Notes</th><th>Qty</th><th>Est. Cost</th></tr></thead>
                  <tbody>
                    <tr><td>Area Rug</td><td>9' x 12'</td><td>1</td><td>$1,200</td></tr>
                    <tr><td>Runner for Front Door</td><td>14' thrifted oriental rug</td><td>1</td><td>$800</td></tr>
                    <tr><td>Plants</td><td>Misc. plants and pots</td><td>2</td><td>$300</td></tr>
                    <tr><td>Floor Lamps & Spotlights</td><td>Clamp light spotlight and 2 floor lamps</td><td>3</td><td>$400</td></tr>
                    <tr><td>Additional Tables</td><td>Thrifted bistro style tables</td><td>2</td><td>$500</td></tr>
                    <tr><td>Leather Accent Chair</td><td>Thrifted</td><td>1</td><td>$1,200</td></tr>
                    <tr><td>Delivery & Install</td><td>20% of Material Cost</td><td>—</td><td>$880</td></tr>
                    <tr className="au__table-total"><td colSpan="3"><strong>Est. Total</strong></td><td><strong>$5,280</strong></td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="au__space-col">
              <h3 className="au__col-title">Art Selection</h3>
              <div className="au__art-grid">
                <div className="au__art-item">
                  <img src="/images/au/p7_0.png" alt="Bright orange abstract painting" />
                  <p className="au__art-label">Bright Orange Abstract Painting <span>Coming from old AU space</span></p>
                </div>
                <div className="au__art-item">
                  <img src="/images/au/p7_1.png" alt="Custom mural reference by Christian Smith" />
                  <p className="au__art-label">Custom Mural by Christian Smith <span>Custom piece</span></p>
                </div>
                <div className="au__art-item">
                  <img src="/images/au/p7_2.png" alt="Road sign sculpture" />
                  <p className="au__art-label">Road Sign Sculpture <span>Coming from old AU space</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The HUB: Coworking 1st Floor */}
      <section className="au__section au__space au__space--alt">
        <div className="au__section-inner">
          <div className="au__space-header">
            <p className="au__section-label">The HUB: Coworking — 1st Floor</p>
          </div>
          <img src="/images/au/p8_0.png" alt="The HUB Coworking 1st Floor" className="au__space-hero-img" />
          <div className="au__space-body">
            <div className="au__space-col">
              <h3 className="au__col-title">Budget</h3>
              <div className="au__table-wrap">
                <table className="au__table">
                  <thead><tr><th>Item</th><th>Notes</th><th>Qty</th><th>Est. Cost</th></tr></thead>
                  <tbody>
                    <tr><td>Credenzas</td><td>Thrifted room dividers between cafe and coworking</td><td>3</td><td>$3,000</td></tr>
                    <tr><td>Runner for Hallway</td><td>14' thrifted oriental rug</td><td>1</td><td>$800</td></tr>
                    <tr><td>Plants</td><td>Misc. plants and pots</td><td>4</td><td>$300</td></tr>
                    <tr><td>Table Lamps & Spotlights</td><td>Clamp light spotlight and 2 floor lamps</td><td>8</td><td>$1,000</td></tr>
                    <tr><td>Wall Mural Panels</td><td>Custom 4' x 8' graphic wall murals</td><td>2</td><td>$500</td></tr>
                    <tr><td>Misc. Decor</td><td>Books, objects, vases, risers</td><td>—</td><td>$500</td></tr>
                    <tr><td>Custom Mural for Hallway</td><td>Custom mural by Weird</td><td>1</td><td>$1,000</td></tr>
                    <tr><td>Delivery & Install</td><td>20% of Material Cost</td><td>—</td><td>$1,420</td></tr>
                    <tr className="au__table-total"><td colSpan="3"><strong>Est. Total</strong></td><td><strong>$8,520</strong></td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="au__space-col">
              <h3 className="au__col-title">Art Selection</h3>
              <div className="au__art-grid">
                <div className="au__art-item">
                  <img src="/images/au/p10_0.png" alt="Flags" />
                  <p className="au__art-label">Flags (Durham, Pride, Vote, +2 more) <span>Coming from old AU space — Qty: 5</span></p>
                </div>
                <div className="au__art-item">
                  <img src="/images/au/p10_1.jpeg" alt="Custom panels reference" />
                  <p className="au__art-label">Custom Panels by Weird <span>Custom piece — Qty: 2</span></p>
                </div>
                <div className="au__art-item">
                  <img src="/images/au/p10_2.png" alt="Custom mural reference" />
                  <p className="au__art-label">Custom Mural by Weird <span>Custom piece — Qty: 1</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The HUB: Coworking 2nd Floor */}
      <section className="au__section au__space">
        <div className="au__section-inner">
          <div className="au__space-header">
            <p className="au__section-label">The HUB: Coworking — 2nd Floor</p>
          </div>
          <img src="/images/au/p11_0.png" alt="The HUB Coworking 2nd Floor" className="au__space-hero-img" />
          <div className="au__space-body">
            <div className="au__space-col">
              <h3 className="au__col-title">Budget</h3>
              <div className="au__table-wrap">
                <table className="au__table">
                  <thead><tr><th>Item</th><th>Notes</th><th>Qty</th><th>Est. Cost</th></tr></thead>
                  <tbody>
                    <tr><td>Credenzas</td><td>Thrifted room dividers</td><td>3</td><td>$3,000</td></tr>
                    <tr><td>Runner for Hallway</td><td>14' thrifted oriental rug</td><td>1</td><td>$800</td></tr>
                    <tr><td>Plants</td><td>Misc. plants and pots</td><td>4</td><td>$300</td></tr>
                    <tr><td>Table Lamps & Spotlights</td><td>Clamp light spotlight and 2 floor lamps</td><td>8</td><td>$1,000</td></tr>
                    <tr><td>Wall Mural Panels</td><td>Custom 4' x 8' graphic wall murals</td><td>2</td><td>$500</td></tr>
                    <tr><td>Misc. Decor</td><td>Books, objects, vases, risers</td><td>—</td><td>$500</td></tr>
                    <tr className="au__table-total"><td colSpan="3"><strong>Est. Total</strong></td><td><strong>$6,100</strong></td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="au__space-col">
              <h3 className="au__col-title">Art Selection</h3>
              <div className="au__art-grid">
                <div className="au__art-item">
                  <img src="/images/au/p13_0.png" alt="Custom paintings" />
                  <p className="au__art-label">2 Custom Paintings <span>Custom pieces</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AU Yearbook Room */}
      <section className="au__section au__space au__space--alt">
        <div className="au__section-inner">
          <div className="au__space-header">
            <p className="au__section-label">AU Yearbook Room — 1st Floor</p>
          </div>
          <img src="/images/au/p14_0.png" alt="AU Yearbook Room" className="au__space-hero-img" />
          <div className="au__space-body">
            <div className="au__space-col">
              <h3 className="au__col-title">Allowance</h3>
              <div className="au__table-wrap">
                <table className="au__table">
                  <thead><tr><th>Item</th><th>Notes</th><th>Qty</th><th>Est. Cost</th></tr></thead>
                  <tbody>
                    <tr><td>Large Hutch</td><td>Thrifted hutch for displaying decorative elements</td><td>1</td><td>$2,000</td></tr>
                    <tr><td>Area Rug</td><td>Thrifted 8'x10' oriental rug</td><td>1</td><td>$800</td></tr>
                    <tr><td>Floor Lamp & Spotlights</td><td>Clamp light spotlight and 2 floor lamps</td><td>3</td><td>$300</td></tr>
                    <tr><td>Misc. Decor</td><td>Books, objects, vases, risers for shelves & coffee table</td><td>—</td><td>$500</td></tr>
                    <tr><td>Coffee Table</td><td>Thrifted wood coffee table</td><td>1</td><td>$500</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="au__space-col">
              <h3 className="au__col-title">Art Selection</h3>
              <div className="au__art-grid au__art-grid--sm">
                <div className="au__art-item">
                  <img src="/images/au/p16_0.png" alt="Keith Haring Print" />
                  <p className="au__art-label">Keith Haring Print <span>Source from vault</span></p>
                </div>
                <div className="au__art-item">
                  <img src="/images/au/p16_1.png" alt="Michael Rosenburg Photograph" />
                  <p className="au__art-label">Michael Rosenburg Photograph <span>From old AU space</span></p>
                </div>
                <div className="au__art-item">
                  <img src="/images/au/p16_2.png" alt="Lego Skyline" />
                  <p className="au__art-label">Lego Skyline <span>From old AU space</span></p>
                </div>
                <div className="au__art-item">
                  <img src="/images/au/p16_3.png" alt="Boxer Oil Painting by HT Johnson" />
                  <p className="au__art-label">Boxer Oil Painting by HT Johnson <span>Source from vault</span></p>
                </div>
                <div className="au__art-item">
                  <img src="/images/au/p16_4.png" alt="Metal Numbers" />
                  <p className="au__art-label">Metal Numbers <span>From old AU space — Qty: 2</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assigned Desks */}
      <section className="au__section au__space">
        <div className="au__section-inner">
          <div className="au__space-header">
            <p className="au__section-label">Assigned Desks — 1st Floor</p>
          </div>
          <img src="/images/au/p17_0.png" alt="Assigned Desks" className="au__space-hero-img" />
          <div className="au__space-body">
            <div className="au__space-col au__space-col--full">
              <h3 className="au__col-title">Art Selection</h3>
              <div className="au__art-grid au__art-grid--wide">
                <div className="au__art-item">
                  <img src="/images/au/p18_0.png" alt="White abstract framed piece" />
                  <p className="au__art-label">White Abstract Framed Piece <span>From old AU space</span></p>
                </div>
                <div className="au__art-item">
                  <img src="/images/au/p18_1.png" alt="Face in Direction Print" />
                  <p className="au__art-label">Face in Direction Print <span>From old AU space</span></p>
                </div>
                <div className="au__art-item">
                  <img src="/images/au/p18_2.png" alt="4 Horsemen" />
                  <p className="au__art-label">4 Horsemen <span>Source from vault</span></p>
                </div>
                <div className="au__art-item">
                  <img src="/images/au/p18_3.png" alt="Custom Painting by McKayla Walker" />
                  <p className="au__art-label">Custom Painting by McKayla Walker <span>Custom piece</span></p>
                </div>
              </div>
              <p className="au__art-note">+ Series of 4 paintings by Reneesha (custom pieces)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Misc Hallways */}
      <section className="au__section au__space au__space--alt">
        <div className="au__section-inner">
          <div className="au__space-header">
            <p className="au__section-label">Misc Hallways</p>
          </div>
          <div className="au__space-body">
            <div className="au__space-col au__space-col--full">
              <h3 className="au__col-title">Art Selection</h3>
              <div className="au__art-grid au__art-grid--wide">
                <div className="au__art-item">
                  <img src="/images/au/p19_0.png" alt="Red abstract painting" />
                  <p className="au__art-label">Red Abstract Painting <span>From old AU space</span></p>
                </div>
                <div className="au__art-item">
                  <img src="/images/au/p19_1.png" alt="Large multi color abstract" />
                  <p className="au__art-label">Large Multi Color Abstract <span>From old AU space</span></p>
                </div>
                <div className="au__art-item">
                  <img src="/images/au/p19_2.png" alt="Rothko print" />
                  <p className="au__art-label">Rothko Print + Small Prints <span>From old AU space — Qty: 3</span></p>
                </div>
                <div className="au__art-item">
                  <img src="/images/au/p19_3.png" alt="Abstract multi color" />
                  <p className="au__art-label">Abstract Multi Color <span>From old AU space</span></p>
                </div>
                <div className="au__art-item">
                  <img src="/images/au/p19_4.png" alt="Black and white landscapes" />
                  <p className="au__art-label">Black & White Landscapes <span>From old AU space — Qty: 2</span></p>
                </div>
                <div className="au__art-item">
                  <img src="/images/au/p19_5.png" alt="Hallway art" />
                  <p className="au__art-label">Hallway Art <span>From old AU space</span></p>
                </div>
                <div className="au__art-item">
                  <img src="/images/au/p19_6.png" alt="Hallway art" />
                  <p className="au__art-label">Hallway Art <span>From old AU space</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
