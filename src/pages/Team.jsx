import { useState } from 'react';
import './Team.css';

const team = [
  {
    name: 'Lindsay Hebert',
    role: 'Executive Director',
    bio: "Lindsay is the founder of Weird Productions and Weird Projects, bringing together a lifetime of curiosity, global experience, and a conviction that you don't need permission to make things happen. She's drawn to passionate people, unusual paths, and the kind of community that forms when people are invited to get creative.",
    linkText: "Lindsay's Work",
    linkUrl: '#',
    image: '/images/team/lindsay-hebert.png',
  },
  {
    name: 'Mark Wilson Malek',
    role: 'Creative Director, Board Member',
    bio: 'Mark is the co-founder of Weird Productions and the creative vision behind the Weird brands. An artist with a background in product and graphic design, he brings an intuitive approach to art curation, branding, and immersive experiences.',
    linkText: "Mark's Work",
    linkUrl: '#',
    image: '/images/team/mark-malek.jpeg',
  },
  {
    name: 'Jonathan Collins',
    role: 'Board Chair',
    bio: 'Jonathan is an entrepreneur and small business advocate with lived experience building and selling local businesses. He now works closely with entrepreneurs across Durham, bringing a practical, community-centered perspective to supporting small businesses at every stage.',
    linkText: "Jon's Work",
    linkUrl: '#',
    image: '/images/team/jon-collins.png',
  },
  {
    name: 'Jes Averhart',
    role: 'Board Member',
    bio: "Jes brings a combination of excellence, generosity, and momentum. With experience across entrepreneurship, corporate leadership, and nonprofit work, she's known for showing up supportive, game for anything, and deeply invested in helping ideas and people reach their potential.",
    linkText: "Jes's Work",
    linkUrl: '#',
    image: '/images/team/jes-averhart.jpg',
  },
  {
    name: 'Jill Lederer-Hicks',
    role: 'Board Treasurer',
    bio: "Formerly known as the \"Pizza Queen\" for her Domino's Pizza empire, Jill began her journey managing the UNC-Chapel Hill store where she made pies for a young Michael Jordan. She later served 11 years as CEO of the Greater Conejo Valley Chamber of Commerce in California. Jill brings a career spent scaling businesses alongside community leadership.",
    linkText: null,
    linkUrl: null,
    image: '/images/team/jill-hicks.png',
  },
  {
    name: 'Joel Tesch',
    role: 'Board Secretary',
    bio: "Joel has been a Weird favorite since day one. He's a full-time painter who understands the artist journey, having made the leap from creating alongside a corporate career to sustaining a full-time art practice. He brings that perspective to the board through ongoing volunteer leadership in the local arts community.",
    linkText: "Joel's Work",
    linkUrl: '#',
    image: '/images/team/joel-tesch.png',
  },
  {
    name: 'Shelley McPhatter',
    role: 'Board Member',
    bio: 'Shelley brings decades of experience leading complex commercial construction projects across the Triangle, including healthcare, labs, offices, and major renovations. After founding and growing BridgePoint, she offers a grounded perspective on how ideas come to life and how creativity shows up beyond where we usually expect it.',
    linkText: "Shelley's Work",
    linkUrl: '#',
    image: '/images/team/shelley-mcphatter.jpg',
  },
];

export default function Team() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Website Contact: ${form.firstName} ${form.lastName}`);
    const body = encodeURIComponent(
      `Name: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\nPhone: ${form.phone || 'N/A'}\n\n${form.message}`
    );
    window.location.href = `mailto:lindsay@weirdproductions.art?subject=${subject}&body=${body}`;
  };

  return (
    <div className="team">
      <section className="team__header">
        <h1>The Weird Team</h1>
      </section>

      <section className="team__members">
        {team.map((member, i) => (
          <div className="team__member" key={i}>
            <div className="team__member-image">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="team__member-info">
              <h2>{member.name}</h2>
              <h3 className="team__member-role">{member.role}</h3>
              <p className="team__member-bio">{member.bio}</p>
              {member.linkText && (
                <a href={member.linkUrl} className="team__member-link">
                  {member.linkText} &rarr;
                </a>
              )}
            </div>
          </div>
        ))}
      </section>

      <section className="team__contact">
        <div className="team__contact-inner">
          <div className="team__contact-left">
            <h2>Contact Us</h2>
            <div className="team__faces">
              <img
                src="/images/team/faces.png"
                alt="Face illustrations"
                className="team__faces-img"
              />
            </div>
          </div>
          <form className="team__form" onSubmit={handleSubmit}>
            <div className="team__form-row">
              <div className="team__form-field">
                <label>First Name <span>(required)</span></label>
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="team__form-field">
                <label>Last Name <span>(required)</span></label>
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="team__form-field">
              <label>Email <span>(required)</span></label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="team__form-field">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
              />
            </div>
            <div className="team__form-field">
              <label>Message <span>(required)</span></label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                required
              />
            </div>
            <button type="submit" className="team__form-submit">SUBMIT</button>
          </form>
        </div>
      </section>
    </div>
  );
}
