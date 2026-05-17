import DonateButtons from "../components/DonateButtons";
import PhotoCarousel from "../components/PhotoCarousel";
import EventCalendar from "../components/EventCalendar";
import Store from "../components/Store";
import platform from "../data/platform.json";
import testimonials from "../data/testimonials.json";
import config from "../data/config.json";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="px-6 md:px-12 pt-16 pb-24 max-w-6xl mx-auto text-center">
        <p className="uppercase tracking-widest text-[19px] font-bold text-gold mb-6">
          <span className='text-[22px]'>Jose "Besse" Gonzalez</span><br />Democrat for the Virgin Islands
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-carolina">
          Creating Positive Change <br />
          <span className="text-gold">for Everyone</span>
        </h1>
        <p className="mt-8 text-xl md:text-2xl max-w-3xl mx-auto text-navy">
          For over 30 years, Jose "Besse" Gonzalez has invested in the future of the Virgin Islands—building stronger young leaders, safer communities, and real opportunity that lasts.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="#donate" className="btn-primary">Donate Now</a>
          <a href="#join" className="btn-secondary">Join the Movement</a>
        </div>
      </section>

      {/* EVENTS CALENDAR */}
      <EventCalendar />

      {/* PHOTO CAROUSEL */}
      <PhotoCarousel />

      {/* DONATION STRIP */}
      <section id="donate" className="bg-navy text-cream">
        <div className="px-6 md:px-12 py-10 max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Support Real Change Today</h2>
          <p className="mt-2 text-base opacity-90 max-w-2xl mx-auto">
            Every dollar helps us reach more families, more youth, and more communities across the Virgin Islands.
          </p>
          <div className="mt-6"><DonateButtons /></div>
          <p className="mt-4 text-sm opacity-80">Most supporters give $25 · Every contribution matters</p>
        </div>
      </section>

      {/* STORE */}
      <Store />

      {/* PLAN */}
      <section id="plan" className="bg-white">
        <div className="section">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="h-section">A Plan Rooted in Community</h2>
            <p className="mt-4 text-lg opacity-90">
              This isn't theory. This is a plan built from 15 years of real work, real relationships, and real results in our community.
            </p>
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platform.map((p) => (
              <div key={p.title} className="border-l-4 border-gold bg-cream p-6 rounded-r-lg">
                <h3 className="text-xl font-extrabold">{p.title}</h3>
                <p className="mt-3 opacity-90">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="section text-center">
        <h2 className="h-section">Proven Leadership. Real Impact.</h2>
        <ul className="mt-10 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">
          {[
            "15+ years serving the Virgin Islands community",
            "Hundreds of youth mentored through sports and life skills programs",
            "Multiple generations positively impacted",
            "Trusted leader with deep community roots",
          ].map((t) => (
            <li key={t} className="flex gap-3">
              <span className="text-gold font-extrabold text-2xl leading-none">✓</span>
              <span className="text-lg">{t}</span>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-xl font-bold max-w-2xl mx-auto">
          Besse Gonzalez doesn't just talk about change—he's been building it for over a decade.
        </p>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-navy text-cream">
        <div className="section">
          <h2 className="h-section text-center">"I'm Voting for Besse Because…"</h2>
          <div className="mt-10 flex gap-6 overflow-x-auto pb-4 snap-x">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="snap-center min-w-[280px] md:min-w-[360px] bg-cream/10 backdrop-blur p-8 rounded-xl border border-cream/20"
              >
                <p className="text-lg italic">"{t.quote}"</p>
                <p className="mt-4 text-sm uppercase tracking-wider text-gold font-bold">
                  — {t.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMAIL */}
      <section id="join" className="bg-cream border-y border-navy/10">
        <div className="section max-w-2xl text-center">
          <h2 className="h-section">Join the Movement</h2>
          <p className="mt-4 text-lg opacity-90">Stay connected. Get updates. Be part of something bigger.</p>
          <form className="mt-8 flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-5 py-4 rounded-md border border-navy/20 bg-white"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-5 py-4 rounded-md border border-navy/20 bg-white"
              required
            />
            <button type="submit" className="btn-primary">Sign Me Up</button>
          </form>
        </div>
      </section>

      {/* FINAL DONATION */}
      <section className="bg-navy text-cream">
        <div className="section text-center">
          <h2 className="h-section">This Campaign is Powered by People Like You</h2>
          <p className="mt-4 text-lg opacity-90 max-w-2xl mx-auto">
            We're building something real—and we need you with us. Every contribution helps us reach more people and create lasting change.
          </p>
          <div className="mt-10"><DonateButtons /></div>
        </div>
      </section>
    </>
  );
}
