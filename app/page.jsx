import DonateButtons from "../components/DonateButtons";
import platform from "../data/platform.json";
import testimonials from "../data/testimonials.json";
import events from "../data/events.json";
import config from "../data/config.json";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="px-6 md:px-12 pt-16 pb-24 max-w-6xl mx-auto text-center">
        <p className="uppercase tracking-widest text-sm font-bold text-gold mb-6">
          Jose “Besse” Gonzalez · Democrat for the Virgin Islands
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight">
          Creating Positive Change <br />
          <span className="text-gold">for Everyone</span>
        </h1>
        <p className="mt-8 text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
          For over 15 years, Jose “Besse” Gonzalez has invested in the future of the Virgin Islands—building stronger young leaders, safer communities, and real opportunity that lasts.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="#donate" className="btn-primary">Donate Now</a>
          <a href="#join" className="btn-secondary">Join the Movement</a>
        </div>
      </section>

      {/* DONATION STRIP */}
      <section id="donate" className="bg-navy text-cream">
        <div className="section text-center">
          <h2 className="h-section">Support Real Change Today</h2>
          <p className="mt-4 text-lg opacity-90 max-w-2xl mx-auto">
            Every dollar helps us reach more families, more youth, and more communities across the Virgin Islands.
          </p>
          <div className="mt-10"><DonateButtons /></div>
          <p className="mt-6 text-sm opacity-80">Most supporters give $25 · Every contribution matters</p>
        </div>
      </section>

      {/* VIDEO */}
      <section className="section text-center">
        <h2 className="h-section">Meet Jose “Besse” Gonzalez</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto opacity-90">
          This campaign isn’t about politics—it’s about people. Hear directly from Besse about why he’s running and what’s at stake for our future.
        </p>
        <div className="mt-10 aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl">
          <iframe
            className="w-full h-full"
            src={config.videoUrl}
            title="Meet Besse"
            allowFullScreen
          />
        </div>
      </section>

      {/* PLAN */}
      <section id="plan" className="bg-white">
        <div className="section">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="h-section">A Plan Rooted in Community</h2>
            <p className="mt-4 text-lg opacity-90">
              This isn’t theory. This is a plan built from 15 years of real work, real relationships, and real results in our community.
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
          Besse Gonzalez doesn’t just talk about change—he’s been building it for over a decade.
        </p>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-navy text-cream">
        <div className="section">
          <h2 className="h-section text-center">“I’m Voting for Besse Because…”</h2>
          <div className="mt-10 flex gap-6 overflow-x-auto pb-4 snap-x">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="snap-center min-w-[280px] md:min-w-[360px] bg-cream/10 backdrop-blur p-8 rounded-xl border border-cream/20"
              >
                <p className="text-lg italic">“{t.quote}”</p>
                <p className="mt-4 text-sm uppercase tracking-wider text-gold font-bold">
                  — {t.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="section">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="h-section">Join Us in the Community</h2>
          <p className="mt-4 text-lg opacity-90">
            Be part of the movement. Show up. Get involved. Help us build the future together.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {events.map((e) => (
            <div key={e.title} className="border border-navy/15 rounded-xl p-6 bg-white">
              <p className="text-sm font-bold text-gold uppercase">
                {new Date(e.date).toLocaleDateString("en-US", { month: "long", day: "numeric" })} · {e.time}
              </p>
              <h3 className="mt-2 text-xl font-extrabold">{e.title}</h3>
              <p className="mt-2 text-sm opacity-80">{e.location}</p>
              <p className="mt-3 text-sm">{e.description}</p>
            </div>
          ))}
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
            We’re building something real—and we need you with us. Every contribution helps us reach more people and create lasting change.
          </p>
          <div className="mt-10"><DonateButtons /></div>
        </div>
      </section>
    </>
  );
}
