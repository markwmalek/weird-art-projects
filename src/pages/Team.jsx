import ContactCard from '../components/ContactCard';
import './Team.css';

const team = [
  {
    name: 'Lindsay Hebert',
    role: 'Executive Director',
    bio: "Lindsay is the founder of Weird Productions and Weird Projects, bringing together a lifetime of curiosity, global experience, and a conviction that you don't need permission to make things happen.",
    linkText: "Lindsay's Work",
    linkUrl: '#',
    image: '/images/team/lindsay-hebert.png',
  },
  {
    name: 'Mark Wilson Malek',
    role: 'Creative Director, Board Member',
    bio: 'Mark is the co-founder of Weird Productions and the creative vision behind the Weird brands. An artist with a background in product and graphic design.',
    linkText: "Mark's Work",
    linkUrl: '#',
    image: '/images/team/mark-malek.jpeg',
  },
  {
    name: 'Jonathan Collins',
    role: 'Board Chair',
    bio: 'Jonathan is an entrepreneur and small business advocate with lived experience building and selling local businesses in Durham.',
    linkText: "Jon's Work",
    linkUrl: '#',
    image: '/images/team/jon-collins.png',
  },
  {
    name: 'Jes Averhart',
    role: 'Board Member',
    bio: "Jes brings a combination of excellence, generosity, and momentum. She's known for showing up supportive and deeply invested in helping ideas reach their potential.",
    linkText: "Jes's Work",
    linkUrl: '#',
    image: '/images/team/jes-averhart.jpg',
  },
  {
    name: 'Jill Lederer-Hicks',
    role: 'Board Treasurer',
    bio: "Formerly known as the \"Pizza Queen\" for her Domino's Pizza empire. Jill brings a career spent scaling businesses alongside community leadership.",
    linkText: null,
    linkUrl: null,
    image: '/images/team/jill-hicks.png',
  },
  {
    name: 'Joel Tesch',
    role: 'Board Secretary',
    bio: "Joel is a full-time painter who understands the artist journey, having made the leap from corporate career to sustaining a full-time art practice.",
    linkText: "Joel's Work",
    linkUrl: '#',
    image: '/images/team/joel-tesch.png',
  },
  {
    name: 'Shelley McPhatter',
    role: 'Board Member',
    bio: 'Shelley brings decades of experience leading complex commercial construction projects across the Triangle.',
    linkText: "Shelley's Work",
    linkUrl: '#',
    image: '/images/team/shelley-mcphatter.jpg',
  },
];

export default function Team() {
  return (
    <div className="team">
      <section className="team__header">
        <h1>The Weird Team</h1>
        <p>The people behind Weird Art Projects</p>
      </section>

      <section className="team__masonry">
        {team.map((member, i) => (
          <div className="team__card" key={i}>
            <div className="team__card-image">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="team__card-info">
              <h3 className="team__card-name">{member.name}</h3>
              <span className="team__card-role">{member.role}</span>
              <p className="team__card-bio">{member.bio}</p>
              {member.linkText && (
                <a href={member.linkUrl} className="team__card-link">
                  {member.linkText} &rarr;
                </a>
              )}
            </div>
          </div>
        ))}
      </section>

      <ContactCard />
    </div>
  );
}
