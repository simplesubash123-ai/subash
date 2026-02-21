export default function ContactPage() {
  return (
    <section className="section narrow">
      <p className="eyebrow">Contact</p>
      <h1>Let&apos;s create something beautiful.</h1>
      <p>
        Share your event details and we&apos;ll get back to you with availability and package options.
      </p>

      <form className="contact-form" aria-label="Contact form">
        <label htmlFor="name">
          Name
          <input id="name" name="name" type="text" placeholder="Your name" required />
        </label>

        <label htmlFor="email">
          Email
          <input id="email" name="email" type="email" placeholder="you@example.com" required />
        </label>

        <label htmlFor="service">
          Service Needed
          <select id="service" name="service" defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            <option>Photography</option>
            <option>Videography</option>
            <option>Both Photography & Videography</option>
          </select>
        </label>

        <label htmlFor="message">
          Project Details
          <textarea id="message" name="message" rows={5} placeholder="Date, location, and vision" />
        </label>

        <button type="submit" className="btn btn-primary">
          Send Inquiry
        </button>
      </form>
    </section>
  );
}
