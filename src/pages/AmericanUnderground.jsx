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
          <p className="au__eyebrow">Weird × American Underground</p>
          <h1>American<br />Underground</h1>
          <p className="au__hero-sub">Decor Proposal — March 7, 2026</p>
          <p className="au__hero-byline">Lindsay &amp; Mark</p>
        </div>
      </section>

      {/* Mission */}
      <section className="au__mission">
        <div className="au__mission-inner">
          <p className="au__section-label">AU Mission</p>
          <p className="au__mission-text">Inspired by Durham's century-old entrepreneurial legacy, the American Underground (AU) was originally crafted as the counter-story to Silicon Valley. A diverse startup scene that is rich in innovative ideas and deep with civic engagement.</p>
        </div>
      </section>

      {/* Goal */}
      <section className="au__goal">
        <div className="au__goal-inner">
          <p className="au__section-label">Goal</p>
          <h2 className="au__goal-text">Transform the new AU into a space that feels warm, lived-in, and local, through curated art, lighting, and decor.</h2>
        </div>
      </section>

      {/* Inspiration */}
      <section className="au__section au__inspiration">
        <div className="au__section-inner">
          <p className="au__section-label">Inspiration</p>
          <div className="au__inspiration-grid">
            <img src="/images/au/p4_0.png" alt="Inspiration" className="au__inspiration-main" />
            <div className="au__inspiration-small">
              <img src="/images/au/p4_1.png" alt="Inspiration" />
              <img src="/images/au/p4_2.jpeg" alt="Inspiration" />
              <img src="/images/au/p4_3.png" alt="Inspiration" />
              <img src="/images/au/p4_4.png" alt="Inspiration" />
              <img src="/images/au/p4_5.png" alt="Inspiration" />
              <img src="/images/au/p4_6.png" alt="Inspiration" />
            </div>
          </div>
        </div>
      </section>

      {/* Scope of Work */}
      <section className="au__section au__scope">
        <div className="au__section-inner">
          <p className="au__section-label">Scope of Work</p>
          <h2 className="au__section-title">Interior decorating for the following spaces</h2>
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
                <tr><td>AU Yearbook Room</td><td>Plants, Art, Objects</td><td>1st Floor</td><td>TBD</td><td><span className="au__badge au__badge--1">1</span></td></tr>
                <tr><td>Assigned Desks</td><td>Art, Lights</td><td>1st Floor</td><td>TBD</td><td><span className="au__badge au__badge--1">1</span></td></tr>
                <tr><td>Coworking Space</td><td>Rugs, Plants, Lights, Art, Furniture, Objects</td><td>2nd Floor</td><td>TBD</td><td><span className="au__badge au__badge--1">1</span></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* The HUB: Lounge */}
      <section className="au__section au__space">
        <div className="au__section-inner">
          <div className="au__space-header">
            <h2 className="au__space-name">The HUB: Lounge</h2>
            <p className="au__space-desc">1st Floor</p>
          </div>
          <img src="/images/au/p6_0.png" alt="The HUB Lounge" className="au__space-hero-img" />
          <div className="au__space-body">
            <div className="au__space-col">
              <h3 className="au__col-title">Budget</h3>
              <div className="au__table-wrap">
                <table className="au__table">
                  <thead><tr><th>Item</th><th>Notes</th><th>Qty</th></tr></thead>
                  <tbody>
                    <tr><td>Area Rug</td><td>9' x 12'</td><td>1</td></tr>
                    <tr><td>Runner for Front Door</td><td>14' thrifted oriental rug</td><td>1</td></tr>
                    <tr><td>Plants</td><td>Misc. plants and pots</td><td>2</td></tr>
                    <tr><td>Floor Lamps &amp; Spotlights</td><td>Clamp light spotlight and 2 floor lamps</td><td>3</td></tr>
                    <tr><td>Additional Tables</td><td>Thrifted bistro style tables</td><td>2</td></tr>
                    <tr><td>Leather Accent Chair</td><td>Thrifted</td><td>1</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="au__space-col">
              <h3 className="au__col-title">Art Selection</h3>
              <div className="au__table-wrap">
                <table className="au__table au__art-table">
                  <thead><tr><th></th><th>Art</th><th>Notes</th><th>Qty</th></tr></thead>
                  <tbody>
                    <tr><td><img src="/images/au/p8_1.png" alt="" className="au__art-thumb" /></td><td>Bright Orange Abstract Painting</td><td>Coming from old AU space</td><td>1</td></tr>
                    <tr><td><img src="/images/au/p8_0.png" alt="" className="au__art-thumb" /></td><td>Custom Mural by Christian Smith</td><td>Custom piece</td><td>1</td></tr>
                    <tr><td><img src="/images/au/p8_2.png" alt="" className="au__art-thumb" /></td><td>Road Sign Sculpture</td><td>Coming from old AU space</td><td>1</td></tr>
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
            <h2 className="au__space-name">The HUB: Coworking</h2>
            <p className="au__space-desc">1st Floor</p>
          </div>
          <img src="/images/au/p9_0.png" alt="The HUB Coworking 1st Floor" className="au__space-hero-img" />
          <div className="au__space-body">
            <div className="au__space-col">
              <h3 className="au__col-title">Budget</h3>
              <div className="au__table-wrap">
                <table className="au__table">
                  <thead><tr><th>Item</th><th>Notes</th><th>Qty</th></tr></thead>
                  <tbody>
                    <tr><td>Credenzas</td><td>Thrifted room dividers between cafe and coworking spaces</td><td>3</td></tr>
                    <tr><td>Runner for Hallway</td><td>14' thrifted oriental rug</td><td>1</td></tr>
                    <tr><td>Plants</td><td>Misc. plants and pots</td><td>4</td></tr>
                    <tr><td>Table Lamps &amp; Spotlights</td><td>Clamp light spotlight and 2 floor lamps</td><td>8</td></tr>
                    <tr><td>Wall Mural Panels</td><td>Custom 4' x 8' graphic wall murals</td><td>2</td></tr>
                    <tr><td>Misc. Decor</td><td>Books, objects, vases, risers — for the top of the room dividers</td><td>—</td></tr>
                    <tr><td>Custom Mural for Hallway</td><td>Custom mural by Weird</td><td>1</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="au__space-col">
              <h3 className="au__col-title">Art Selection</h3>
              <div className="au__table-wrap">
                <table className="au__table au__art-table">
                  <thead><tr><th></th><th>Art</th><th>Notes</th><th>Qty</th></tr></thead>
                  <tbody>
                    <tr><td><img src="/images/au/p11_0.jpeg" alt="" className="au__art-thumb" /></td><td>Flags (Durham, Pride, Vote, +2 more)</td><td>Coming from old AU space</td><td>5</td></tr>
                    <tr><td><img src="/images/au/p11_2.png" alt="" className="au__art-thumb" /></td><td>Custom Panels by Weird</td><td>Custom piece</td><td>2</td></tr>
                    <tr><td><img src="/images/au/p11_1.png" alt="" className="au__art-thumb" /></td><td>Custom Mural by Weird</td><td>Custom piece</td><td>1</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coworking 2nd Floor */}
      <section className="au__section au__space">
        <div className="au__section-inner">
          <div className="au__space-header">
            <h2 className="au__space-name">Coworking Space</h2>
            <p className="au__space-desc">2nd Floor</p>
          </div>
          <img src="/images/au/p12_0.png" alt="Coworking 2nd Floor" className="au__space-hero-img" />
          <div className="au__space-body">
            <div className="au__space-col">
              <h3 className="au__col-title">Budget</h3>
              <div className="au__table-wrap">
                <table className="au__table">
                  <thead><tr><th>Item</th><th>Notes</th><th>Qty</th></tr></thead>
                  <tbody>
                    <tr><td>Room Dividers</td><td>Thrifted room dividers between offices and coworking spaces</td><td>4</td></tr>
                    <tr><td>Rugs</td><td>9' x 12' oriental rugs</td><td>2</td></tr>
                    <tr><td>Plants</td><td>Misc. plants and pots</td><td>4</td></tr>
                    <tr><td>Table Lamps &amp; Spotlights</td><td>Clamp light spotlight and 2 floor lamps</td><td>8</td></tr>
                    <tr><td>Misc. Decor</td><td>Books, objects, vases, risers — for the room dividers</td><td>—</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="au__space-col">
              <h3 className="au__col-title">Art Selection</h3>
              <div className="au__table-wrap">
                <table className="au__table au__art-table">
                  <thead><tr><th></th><th>Art</th><th>Notes</th><th>Qty</th></tr></thead>
                  <tbody>
                    <tr><td><img src="/images/au/p14_0.png" alt="" className="au__art-thumb" /></td><td>Custom Paintings by Zeus Alexander</td><td>Custom pieces</td><td>2</td></tr>
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
            <h2 className="au__space-name">AU Yearbook Room</h2>
            <p className="au__space-desc">1st Floor</p>
          </div>
          <img src="/images/au/p15_0.png" alt="AU Yearbook Room" className="au__space-hero-img" />
          <div className="au__space-body">
            <div className="au__space-col">
              <h3 className="au__col-title">Allowance</h3>
              <div className="au__table-wrap">
                <table className="au__table">
                  <thead><tr><th>Item</th><th>Notes</th><th>Qty</th></tr></thead>
                  <tbody>
                    <tr><td>Large Hutch</td><td>Thrifted hutch for displaying decorative elements</td><td>1</td></tr>
                    <tr><td>Area Rug</td><td>Thrifted 8' x 10' oriental rug for floor</td><td>1</td></tr>
                    <tr><td>Floor Lamp &amp; Spotlights</td><td>Clamp light spotlight and 2 floor lamps</td><td>3</td></tr>
                    <tr><td>Misc. Decor</td><td>Books, objects, vases, risers for bookshelves, hutch, and coffee table</td><td>—</td></tr>
                    <tr><td>Coffee Table</td><td>Thrifted wood coffee table for beside sofa</td><td>1</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="au__space-col">
              <h3 className="au__col-title">Art Selection</h3>
              <div className="au__table-wrap">
                <table className="au__table au__art-table">
                  <thead><tr><th></th><th>Art</th><th>Notes</th><th>Qty</th></tr></thead>
                  <tbody>
                    <tr><td><img src="/images/au/p17_0.png" alt="" className="au__art-thumb" /></td><td>Keith Haring Print</td><td>Need to source from vault</td><td>1</td></tr>
                    <tr><td><img src="/images/au/p17_1.png" alt="" className="au__art-thumb" /></td><td>Michael Rosenburg Photograph</td><td>Coming from old AU space</td><td>1</td></tr>
                    <tr><td><img src="/images/au/p17_2.png" alt="" className="au__art-thumb" /></td><td>Lego Skyline</td><td>Coming from old AU space</td><td>1</td></tr>
                    <tr><td><img src="/images/au/p17_5.png" alt="" className="au__art-thumb" /></td><td>Star Wars Sculpture</td><td>Coming from old AU space</td><td>1</td></tr>
                    <tr><td><img src="/images/au/p17_4.png" alt="" className="au__art-thumb" /></td><td>Boxer Oil Painting by HT Johnson</td><td>Need to source from vault</td><td>1</td></tr>
                    <tr><td><img src="/images/au/p17_3.png" alt="" className="au__art-thumb" /></td><td>Metal Numbers</td><td>Coming from old AU space</td><td>2</td></tr>
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
            <h2 className="au__space-name">Assigned Desks</h2>
            <p className="au__space-desc">1st Floor</p>
          </div>
          <img src="/images/au/p18_0.png" alt="Assigned Desks" className="au__space-hero-img" />
          <div className="au__space-body">
            <div className="au__space-col">
              <h3 className="au__col-title">Art Selection</h3>
              <div className="au__table-wrap">
                <table className="au__table au__art-table">
                  <thead><tr><th></th><th>Art</th><th>Notes</th><th>Qty</th></tr></thead>
                  <tbody>
                    <tr><td></td><td>White Abstract Framed Piece</td><td>Coming from old AU space</td><td>1</td></tr>
                    <tr><td></td><td>Face in Direction Print</td><td>Coming from old AU space</td><td>1</td></tr>
                    <tr><td><img src="/images/au/p19_3.png" alt="" className="au__art-thumb" /></td><td>4 Horsemen</td><td>Need to source from vault</td><td>1</td></tr>
                    <tr><td><img src="/images/au/p19_0.png" alt="" className="au__art-thumb" /></td><td>Custom Painting by McKayla Walker</td><td>Custom piece</td><td>1</td></tr>
                    <tr><td><img src="/images/au/p19_1.png" alt="" className="au__art-thumb" /></td><td>Series of Paintings by Reneesha</td><td>Custom pieces</td><td>4</td></tr>
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
                  <thead><tr><th></th><th>Art</th><th>Notes</th><th>Qty</th></tr></thead>
                  <tbody>
                    <tr><td><img src="/images/au/p20_1.png" alt="" className="au__art-thumb" /></td><td>Red Abstract Painting</td><td>Coming from old AU space</td><td>1</td></tr>
                    <tr><td><img src="/images/au/p20_2.png" alt="" className="au__art-thumb" /></td><td>Large Multi Color Abstract</td><td>Coming from old AU space</td><td>1</td></tr>
                    <tr><td><img src="/images/au/p20_3.png" alt="" className="au__art-thumb" /></td><td>Rothko Print &amp; Small Prints</td><td>Coming from old AU space</td><td>3</td></tr>
                    <tr><td><img src="/images/au/p20_4.png" alt="" className="au__art-thumb" /></td><td>Abstract Multi Color</td><td>Coming from old AU space</td><td>1</td></tr>
                    <tr><td><img src="/images/au/p20_5.png" alt="" className="au__art-thumb" /></td><td>Black &amp; White Landscapes</td><td>Coming from old AU space</td><td>2</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Foundation */}
      <section className="au__section au__creative">
        <div className="au__section-inner">
          <p className="au__section-label">Creative Foundation</p>
          <h2 className="au__section-title">A playful, eclectic approach using thrifted finds, vintage pieces, and creative reuse.</h2>
          <div className="au__creative-grid">
            <div className="au__creative-col">
              <h3 className="au__col-title">What's Included</h3>
              <ul className="au__creative-list">
                <li>Creative vision and design direction for the overall environment</li>
                <li>Styling and design for 5 core spaces</li>
                <li>Sourcing vintage and character pieces for furniture and decor</li>
                <li>Layered styling — rugs, lighting, plants, and objects</li>
                <li>Curation of existing art collection</li>
                <li>3–5 commissioned artworks from local artists</li>
                <li>Artist coordination and installation</li>
              </ul>
            </div>
            <div className="au__creative-col">
              <h3 className="au__col-title">Space Breakdown</h3>
              <ul className="au__creative-list au__creative-list--spaces">
                <li><strong>The HUB Lounge</strong> — area rug, runner, plants/pots (2), lighting (3), bistro tables (2), accent chair (1)</li>
                <li><strong>The HUB Coworking</strong> — credenzas (3), runner, plants/pots, lighting (8), styling layer</li>
                <li><strong>AU Yearbook Room</strong> — hutch, area rug, lighting (3), coffee table, styling layer</li>
                <li><strong>Assigned Desks</strong> — spotlights (3)</li>
                <li><strong>Coworking Space</strong> — room dividers (4), rugs (2), plants/pots, lighting (8), styling layer</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Path */}
      <section className="au__section au__implementation">
        <div className="au__section-inner">
          <p className="au__section-label">Implementation Path</p>
          <div className="au__impl-card">
            <div className="au__impl-badge">Tier 1</div>
            <div className="au__impl-grid">
              <div className="au__impl-item">
                <span className="au__impl-label">Spaces</span>
                <span className="au__impl-value">The HUB Lounge, The HUB Coworking, AU Yearbook Room, Assigned Desks, Coworking Space</span>
              </div>
              <div className="au__impl-item">
                <span className="au__impl-label">Design</span>
                <span className="au__impl-value">Foundation styling + curated art</span>
              </div>
              <div className="au__impl-item">
                <span className="au__impl-label">Commissioned Art</span>
                <span className="au__impl-value">3–5 pieces from local artists</span>
              </div>
              <div className="au__impl-item">
                <span className="au__impl-label">Art Budget</span>
                <span className="au__impl-value">$3K – $5K</span>
              </div>
              <div className="au__impl-item au__impl-item--total">
                <span className="au__impl-label">Estimated Investment</span>
                <span className="au__impl-value au__impl-total">~ $45K</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
