"use client";
import { useRef, useState, useEffect } from "react";

const TOTAL = 20;

export default function PhotoCarousel() {
  const track = useRef(null);
  const [idx, setIdx] = useState(0);

  /* build array of 20 image paths — drop real photos into /public/photos/ as 1.jpg … 20.jpg */
  const photos = Array.from({ length: TOTAL }, (_, i) => ({
    src: `/photos/${i + 1}.jpg`,
    alt: `Besse in the community – photo ${i + 1}`,
  }));

  const scroll = (dir) => {
    if (!track.current) return;
    const card = track.current.querySelector("div");
    if (!card) return;
    const w = card.offsetWidth + 16; // card width + gap
    const next = dir === "next" ? idx + 1 : idx - 1;
    const clamped = Math.max(0, Math.min(next, TOTAL - 1));
    setIdx(clamped);
    track.current.scrollTo({ left: w * clamped, behavior: "smooth" });
  };

  /* sync index when user manually scrolls */
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    let timer;
    const onScroll = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const card = el.querySelector("div");
        if (card) setIdx(Math.round(el.scrollLeft / (card.offsetWidth + 16)));
      }, 120);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="h-section text-center">Building a Better Future for Our Youth Since 2009</h2>

        {/* carousel wrapper */}
        <div className="relative mt-12">
          {/* prev / next buttons */}
          <button
            onClick={() => scroll("prev")}
            aria-label="Previous photo"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-navy/80 hover:bg-navy text-cream w-10 h-10 rounded-full flex items-center justify-center transition"
          >
            ‹
          </button>
          <button
            onClick={() => scroll("next")}
            aria-label="Next photo"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-navy/80 hover:bg-navy text-cream w-10 h-10 rounded-full flex items-center justify-center transition"
          >
            ›
          </button>

          {/* scrollable track */}
          <div
            ref={track}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 px-8 hide-scrollbar"
          >
            {photos.map((p, i) => (
              <div
                key={i}
                className="snap-center shrink-0 w-[280px] md:w-[360px] aspect-[4/3] rounded-xl overflow-hidden bg-navy/5 relative photo-enhance"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.src}
                  alt={p.alt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    /* show placeholder if image not yet added */
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement.classList.add("placeholder-card");
                  }}
                />
                <div className="placeholder-overlay absolute inset-0 flex items-center justify-center text-navy/30 font-bold text-lg pointer-events-none">
                  Photo {i + 1}
                </div>
              </div>
            ))}
          </div>

          {/* dot indicators */}
          <div className="flex justify-center gap-1.5 mt-6">
            {photos.map((_, i) => (
              <span
                key={i}
                className={`block w-2 h-2 rounded-full transition-all ${
                  i === idx ? "bg-gold w-6" : "bg-navy/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
