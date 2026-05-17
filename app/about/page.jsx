import DonateButtons from "../../components/DonateButtons";

export default function About() {
  return (
    <>
      <section className="section max-w-3xl">
        <p className="uppercase tracking-widest text-sm font-bold text-gold mb-6">About Besse</p>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          A Lifetime of Service to the Virgin Islands
        </h1>
        <div className="mt-10 space-y-6 text-lg leading-relaxed">
          <p>Jose “Besse” Gonzalez isn’t new to serving this community—he’s been doing it for over 30+ years.</p>
          <p>As the founder of a youth-focused nonprofit, Besse has dedicated his life to creating opportunities for young people across the Virgin Islands. Through sports, mentorship, and life skills development, his work has helped shape confident, disciplined, and motivated individuals who carry those lessons into adulthood.</p>
          <p className="font-bold">His impact isn’t measured in promises—it’s measured in people.</p>
          <p>Generations of young Virgin Islanders have come through his programs, gaining not just skills, but direction, purpose, and belief in themselves.</p>
          <p>Now, Besse is stepping forward to bring that same commitment, leadership, and results-driven mindset to a larger stage.</p>
          <p>Because the future of the Virgin Islands starts with the strength of its people—and especially its youth.</p>
        </div>
      </section>
      <section className="bg-navy text-cream">
        <div className="section text-center">
          <h2 className="h-section">Stand With Besse</h2>
          <div className="mt-10"><DonateButtons /></div>
        </div>
      </section>
    </>
  );
}
