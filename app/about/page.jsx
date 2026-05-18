import DonateButtons from "../../components/DonateButtons";

export default function About() {
  return (
    <>
      <section className="section max-w-3xl">
        <p className="uppercase tracking-widest text-sm font-bold text-gold mb-6">About Besse</p>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          A Lifetime of Service to the Virgin Islands
        </h1>
        <div className=”mt-10 space-y-6 text-lg leading-relaxed”>
          <p>Jose “Besse” Gonzalez was raised in Harbor View, St. Croix, where he learned early the value of hard work, community, and looking out for one another.</p>
          <p>For 25 years, he worked as a correctional officer in both the Adult Correctional Facility and the Youth Rehabilitation Center. That experience showed him what happens when support comes too late, especially for young people who needed guidance, structure, and opportunity earlier in life.</p>
          <p>For more than 30 years, Besse has mentored youth in the community. Through Positive Guidance Youth Club, he has used sports as a way to reach young people, build their confidence, encourage discipline, and help them stay focused in school and in life.</p>
          <p>His work has always gone beyond basketball. Besse has checked on students’ grades, encouraged good conduct, required accountability, and created opportunities for youth to travel, compete, and represent St. Croix with pride.</p>
          <p>His commitment to mental health care is deeply personal. After losing his mother to mental illness, Besse understands the pain families carry when the right support is not available. Too often, loved ones must be sent off-island for care, leaving families separated during some of their hardest moments.</p>
          <p className=”font-bold”>Besse is running to strengthen policies that support youth, expand mental health services, protect seniors, and build stronger systems for families. Our community deserves real solutions, not the same cycle.</p>
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
