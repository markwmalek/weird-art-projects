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
            <h2 className="au__space-name">The HUB: Lounge — 1st Floor</h2>
            <p className="au__space-desc">A layered industrial-modern retreat blending expressive art, sculptural seating, and warm brick textures.</p>
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
              <div className="au__table-wrap">
                <table className="au__table au__art-table">
                  <thead><tr><th></th><th>Art</th><th>Source</th><th>Qty</th></tr></thead>
                  <tbody>
                    <tr><td><img src="/images/au/p7_0.png" alt="" className="au__art-thumb" /></td><td>Bright Orange Abstract Painting</td><td>Coming from old AU space</td><td>1</td></tr>
                    <tr><td><img src="/images/au/p7_1.png" alt="" className="au__art-thumb" /></td><td>Custom Mural by Christian Smith</td><td>Custom piece</td><td>1</td></tr>
                    <tr><td><img src="/images/au/p7_2.png" alt="" className="au__art-thumb" /></td><td>Road Sign Sculpture</td><td>Coming from old AU space</td><td>1</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The HUB: Coworking 1st Floor */}
      <section className="au__section au__space au__space--alt">
        <div className="au__section-inner">
          <div className="au__space-header">
            <h2 className="au__space-name">The HUB: Coworking — 1st Floor</h2>
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
              <div className="au__table-wrap">
                <table className="au__table au__art-table">
                  <thead><tr><th></th><th>Art</th><th>Source</th><th>Qty</th></tr></thead>
                  <tbody>
                    <tr><td><img src="/images/au/p10_0.png" alt="" className="au__art-thumb" /></td><td>Flags (Durham, Pride, Vote, +2 more)</td><td>Coming from old AU space</td><td>5</td></tr>
                    <tr><td><img src="/images/au/p10_1.jpeg" alt="" className="au__art-thumb" /></td><td>Custom Panels by Weird</td><td>Custom piece</td><td>2</td></tr>
                    <tr><td><img src="/images/au/p10_2.png" alt="" className="au__art-thumb" /></td><td>Custom Mural by Weird</td><td>Custom piece</td><td>1</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The HUB: Coworking 2nd Floor */}
      <section className="au__section au__space">
        <div className="au__section-inner">
          <div className="au__space-header">
            <h2 className="au__space-name">The HUB: Coworking — 2nd Floor</h2>
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
              <div className="au__table-wrap">
                <table className="au__table au__art-table">
                  <thead><tr><th></th><th>Art</th><th>Source</th><th>Qty</th></tr></thead>
                  <tbody>
                    <tr><td><img src="/images/au/p13_0.png" alt="" className="au__art-thumb" /></td><td>Custom Paintings</td><td>Custom pieces</td><td>2</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AU Yearbook Room */}
      <section className="au__section au__space au__space--alt">
        <div className="au__section-inner">
          <div className="au__space-header">
            <h2 className="au__space-name">AU Yearbook Room — 1st Floor</h2>
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
              <div className="au__table-wrap">
                <table className="au__table au__art-table">
                  <thead><tr><th></th><th>Art</th><th>Source</th><th>Qty</th></tr></thead>
                  <tbody>
                    <tr><td><img src="/images/au/p16_0.png" alt="" className="au__art-thumb" /></td><td>Keith Haring Print</td><td>Source from vault</td><td>1</td></tr>
                    <tr><td><img src="/images/au/p16_1.png" alt="" className="au__art-thumb" /></td><td>Michael Rosenburg Photograph</td><td>From old AU space</td><td>1</td></tr>
                    <tr><td><img src="/images/au/p16_2.png" alt="" className="au__art-thumb" /></td><td>Lego Skyline</td><td>From old AU space</td><td>1</td></tr>
                    <tr><td><img src="/images/au/p16_3.png" alt="" className="au__art-thumb" /></td><td>Boxer Oil Painting by HT Johnson</td><td>Source from vault</td><td>1</td></tr>
                    <tr><td><img src="/images/au/p16_4.png" alt="" className="au__art-thumb" /></td><td>Metal Numbers</td><td>From old AU space</td><td>2</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assigned Desks */}
      <section className="au__section au__space">
        <div className="au__section-inner">
          <div className="au__space-header">
            <h2 className="au__space-name">Assigned Desks — 1st Floor</h2>
          </div>
          <img src="/images/au/p17_0.png" alt="Assigned Desks" className="au__space-hero-img" />
          <div className="au__space-body">
            <div className="au__space-col">
              <h3 className="au__col-title">Art Selection</h3>
              <div className="au__table-wrap">
                <table className="au__table au__art-table">
                  <thead><tr><th></th><th>Art</th><th>Source</th><th>Qty</th></tr></thead>
                  <tbody>
                    <tr><td><img src="/images/au/p18_0.png" alt="" className="au__art-thumb" /></td><td>White Abstract Framed Piece</td><td>From old AU space</td><td>1</td></tr>
                    <tr><td><img src="/images/au/p18_1.png" alt="" className="au__art-thumb" /></td><td>Face in Direction Print</td><td>From old AU space</td><td>1</td></tr>
                    <tr><td><img src="/images/au/p18_2.png" alt="" className="au__art-thumb" /></td><td>4 Horsemen</td><td>Source from vault</td><td>1</td></tr>
                    <tr><td><img src="/images/au/p18_3.png" alt="" className="au__art-thumb" /></td><td>Custom Painting by McKayla Walker</td><td>Custom piece</td><td>1</td></tr>
                    <tr><td></td><td>Series of Paintings by Reneesha</td><td>Custom pieces</td><td>4</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misc Hallways */}
      <section className="au__section au__space au__space--alt">
        <div className="au__section-inner">
          <div className="au__space-header">
            <h2 className="au__space-name">Misc Hallways</h2>
          </div>
          <div className="au__space-body">
            <div className="au__space-col">
              <h3 className="au__col-title">Art Selection</h3>
              <div className="au__table-wrap">
                <table className="au__table au__art-table">
                  <thead><tr><th></th><th>Art</th><th>Source</th><th>Qty</th></tr></thead>
                  <tbody>
                    <tr><td><img src="/images/au/p19_0.png" alt="" className="au__art-thumb" /></td><td>Red Abstract Painting</td><td>From old AU space</td><td>1</td></tr>
                    <tr><td><img src="/images/au/p19_1.png" alt="" className="au__art-thumb" /></td><td>Large Multi Color Abstract</td><td>From old AU space</td><td>1</td></tr>
                    <tr><td><img src="/images/au/p19_2.png" alt="" className="au__art-thumb" /></td><td>Rothko Print + Small Prints</td><td>From old AU space</td><td>3</td></tr>
                    <tr><td><img src="/images/au/p19_3.png" alt="" className="au__art-thumb" /></td><td>Abstract Multi Color</td><td>From old AU space</td><td>1</td></tr>
                    <tr><td><img src="/images/au/p19_4.png" alt="" className="au__art-thumb" /></td><td>Black & White Landscapes</td><td>From old AU space</td><td>2</td></tr>
                    <tr><td><img src="/images/au/p19_5.png" alt="" className="au__art-thumb" /></td><td>Hallway Art</td><td>From old AU space</td><td>1</td></tr>
                    <tr><td><img src="/images/au/p19_6.png" alt="" className="au__art-thumb" /></td><td>Hallway Art</td><td>From old AU space</td><td>1</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
