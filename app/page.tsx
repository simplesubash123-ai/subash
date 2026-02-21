import Link from 'next/link';

const showcase = [
  {
    title: 'Wedding Stories',
    description: 'Cinematic moments that preserve emotion, laughter, and timeless memories.'
  },
  {
    title: 'Portrait Sessions',
    description: 'Natural-light portraits crafted with a clean, editorial-inspired look.'
  },
  {
    title: 'Event Highlights',
    description: 'Fast-paced edits and engaging visuals perfect for social media and reels.'
  }
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <p className="eyebrow">Photography & Videography</p>
        <h1>Premium visuals for your most meaningful moments.</h1>
        <p className="hero-copy">
          Inspired by modern minimalist brands, Anbu Creation blends storytelling, color, and detail to
          create memorable photography and video experiences.
        </p>
        <div className="hero-cta">
          <Link href="/contact" className="btn btn-primary">
            Book a Shoot
          </Link>
          <a
            href="https://www.instagram.com/anbu.creation26/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            View Instagram
          </a>
        </div>
      </section>

      <section className="section">
        <h2>Featured Services</h2>
        <div className="card-grid">
          {showcase.map((item) => (
            <article key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <h2>Why clients choose Anbu Creation</h2>
        <ul className="checks">
          <li>Clean and modern visual style inspired by top global creative brands.</li>
          <li>Flexible packages for hobby projects, personal events, and part-time business needs.</li>
          <li>Quick delivery for social-ready content and high-resolution memories.</li>
        </ul>
      </section>
    </>
  );
}
