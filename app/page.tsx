import Image from 'next/image';
import { Navbar } from '@/components/navbar';

const galleryItems = [
  {
    src: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80',
    title: 'Editorial Portraits'
  },
  {
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80',
    title: 'Landscape Stories'
  },
  {
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
    title: 'Cinematic Travel'
  },
  {
    src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=900&q=80',
    title: 'Wildlife Motion'
  },
  {
    src: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80',
    title: 'Wedding Films'
  },
  {
    src: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=900&q=80',
    title: 'Commercial Frames'
  }
];

export default function Home() {
  return (
    <main>
      <Navbar />

      <section id="home" className="relative isolate min-h-[85vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1800&q=80"
          alt="Photographer filming in natural landscape"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-center px-6 text-white">
          <p className="text-sm uppercase tracking-[0.38em] text-zinc-200">Photography + Videography</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
            Crafting timeless visuals for modern brands and human stories.
          </h1>
          <p className="mt-6 max-w-2xl text-base text-zinc-200 md:text-lg">
            Lumen Atelier creates cinematic stills and films with quiet elegance and emotional clarity.
          </p>
          <a
            href="#portfolio"
            className="mt-10 inline-flex w-fit rounded-full bg-white px-7 py-3 text-sm font-medium text-zinc-900 transition hover:translate-y-[-2px]"
          >
            View Portfolio
          </a>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">About</p>
        <div className="mt-5 grid gap-10 md:grid-cols-2">
          <h2 className="text-3xl font-semibold md:text-4xl">A minimalist approach to visual storytelling.</h2>
          <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
            With over a decade of experience across editorial, commercial, and event production, our studio blends
            intentional composition with cinematic motion to deliver premium content that feels effortless.
          </p>
        </div>
      </section>

      <section id="portfolio" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Portfolio</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Selected Work</h2>
          </div>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-soft transition hover:-translate-y-1 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <p className="px-5 py-4 text-sm font-medium text-zinc-700 dark:text-zinc-300">{item.title}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-zinc-200 bg-white py-24 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Contact</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Let&apos;s build your next visual campaign.</h2>
            <p className="mt-5 text-zinc-600 dark:text-zinc-300">
              Available worldwide for brand films, weddings, portraits, and destination stories.
            </p>
          </div>
          <form className="space-y-4 rounded-3xl border border-zinc-200 bg-surface-light p-6 dark:border-zinc-700 dark:bg-zinc-900">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-300 dark:border-zinc-700 dark:bg-zinc-950 dark:focus:ring-zinc-600"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-300 dark:border-zinc-700 dark:bg-zinc-950 dark:focus:ring-zinc-600"
            />
            <textarea
              placeholder="Tell us about your project"
              rows={5}
              className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-300 dark:border-zinc-700 dark:bg-zinc-950 dark:focus:ring-zinc-600"
            />
            <button
              type="button"
              className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:opacity-90 dark:bg-zinc-100 dark:text-zinc-900"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
