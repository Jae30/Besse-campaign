import Link from "next/link";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-navy/10">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        <Link href="/" className="font-extrabold text-xl text-navy">
          BESSE<span className="text-gold">.</span>
        </Link>
        <nav className="hidden md:flex gap-8 text-sm font-semibold">
          <Link href="/#plan">Plan</Link>
          <Link href="/about">About</Link>
          <Link href="/#events">Events</Link>
          <Link href="/#join">Join</Link>
        </nav>
        <Link href="/#donate" className="btn-primary !py-2 !px-5 text-sm">Donate</Link>
      </div>
    </header>
  );
}
