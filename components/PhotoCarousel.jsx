"use client";
import { useRef, useState, useEffect } from "react";

/* List all media in order — add new entries here when you drop files in /public/photos/ */
const MEDIA = [
  { src: "/photos/1.jpg", type: "image" },
  { src: "/photos/2.jpg", type: "image" },
  { src: "/photos/4.jpg", type: "image" },
  { src: "/photos/5.mp4", type: "video" },
  { src: "/photos/6.jpg", type: "image" },
  { src: "/photos/7.jpg", type: "image" },
  { src: "/photos/8.jpg", type: "image" },
  { src: "/photos/9.jpg", type: "image" },
  { src: "/photos/10.jpg", type: "image" },
  { src: "/photos/12.jpg", type: "image" },
  { src: "/photos/13.jpg", type: "image" },
  { src: "/photos/14.jpg", type: "image" },
  { src: "/photos/15.jpg", type: "image" },
];

export default function PhotoCarousel() {
  const track = useRef(null);
  const [idx, setIdx] = useState(0);
  const total = MEDIA.length;

  const scroll = (dir) => {
    if (!track.current) return;
    const card = track.current.querySelector("div");
    if (!card) return;
    const w = card.offsetWidth + 16;
    const next = dir === "next" ? idx + 1 : idx - 1;
    const clamped = Math.max(0, Math.min(next, total - 1));
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
        <h2 className="h-section text-center">Building a Better Future for Our Youth Since 2006</h2>

        {/* carousel wrapper */}
        <div className="relative mt-12">
          {/* prev / next buttons */}
          <button
            onClick={() => scroll("prev")}
            aria-label="Previous"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-navy/80 hover:bg-navy text-cream w-10 h-10 rounded-full flex items-center justify-center transition"
          >
            &#8249;
          </button>
          <button
            onClick={() => scroll("next")}
            aria-label="Next"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-navy/80 hover:bg-navy text-cream w-10 h-10 rounded-full flex items-center justify-center transition"
          >
            &#8250;
          </button>

          {/* scrollable track */}
          <div
            ref={track}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 px-8 hide-scrollbar"
          >
            {MEDIA.map((item, i) => (
              <div
                key={i}
                className="snap-center shrink-0 w-[280px] md:w-[360px] aspect-[4/3] rounded-xl overflow-hidden bg-navy/5 relative photo-enhance"
              >
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={item.src}
                    alt={`Besse in the community – ${i + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.parentElement.classList.add("placeholder-card");
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* dot indicators */}
          <div className="flex justify-center gap-1.5 mt-6">
            {MEDIA.map((_, i) => (
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
