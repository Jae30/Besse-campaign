"use client";
import { useState } from "react";
import storeItems from "../data/store.json";
import config from "../data/config.json";

export default function Store() {
  const [selectedSize, setSelectedSize] = useState({});
  const [showBack, setShowBack] = useState(false);

  return (
    <section id="store" className="bg-white">
      <div className="section">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="h-section">Rep the Movement</h2>
          <p className="mt-4 text-lg opacity-90">
            Donate $30 or more and get an official Besse campaign t-shirt. Wear it proud — show the Virgin Islands you stand for real change.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-10 max-w-4xl mx-auto items-center">
          {storeItems.map((item) => (
            <div key={item.id} className="relative">
              {/* Shirt image with flip */}
              <div className="w-full aspect-square rounded-xl overflow-hidden bg-cream flex items-center justify-center relative">
                <img
                  src={showBack ? "/store/back.png" : "/store/front.png"}
                  alt={showBack ? "Shirt back - Time to Guide Our Youth Forward" : "Shirt front - Jose Besse Gonzalez for Senate"}
                  className="w-full h-full object-contain p-4"
                />
                {/* Badge */}
                <span className="absolute top-4 right-4 bg-gold text-navy font-extrabold text-xs uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg">
                  {item.tag}
                </span>
              </div>
              {/* Front/Back toggle */}
              <div className="flex justify-center gap-2 mt-4">
                <button
                  onClick={() => setShowBack(false)}
                  className={`px-5 py-2 rounded-md text-sm font-bold transition ${
                    !showBack ? "bg-navy text-white" : "bg-navy/10 text-navy hover:bg-navy/20"
                  }`}
                >
                  Front
                </button>
                <button
                  onClick={() => setShowBack(true)}
                  className={`px-5 py-2 rounded-md text-sm font-bold transition ${
                    showBack ? "bg-navy text-white" : "bg-navy/10 text-navy hover:bg-navy/20"
                  }`}
                >
                  Back
                </button>
              </div>
            </div>
          ))}

          {storeItems.map((item) => (
            <div key={`details-${item.id}`} className="text-center md:text-left">
              <h3 className="text-2xl font-extrabold text-navy">{item.name}</h3>
              <p className="mt-3 text-lg opacity-90">{item.description}</p>

              {/* Size selector */}
              <div className="mt-6">
                <p className="text-sm font-bold uppercase tracking-wider mb-3">Select Size</p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {item.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize((prev) => ({ ...prev, [item.id]: size }))}
                      className={`w-12 h-12 rounded-md border-2 font-bold text-sm transition ${
                        selectedSize[item.id] === size
                          ? "border-gold bg-gold text-navy"
                          : "border-carolina/20 hover:border-gold"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <a
                href={`${config.venmo}?txn=pay&amount=30&note=Besse%20Campaign%20Tee%20-%20${selectedSize[item.id] || "M"}`}
                className="btn-primary mt-8 inline-block"
              >
                Donate $30+ &amp; Claim Your Shirt
              </a>
              <p className="mt-3 text-sm opacity-70">
                After donating, you'll receive a confirmation to pick up or ship your tee.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
