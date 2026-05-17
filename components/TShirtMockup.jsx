"use client";

export default function TShirtMockup({ color = "#8bb8e0" }) {
  const navy = "#0a1f44";

  return (
    <div className="relative w-full aspect-square flex items-center justify-center"
      style={{ perspective: "800px" }}
    >
      {/* Shadow underneath */}
      <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[60%] h-[8%] bg-navy/10 rounded-[50%] blur-xl" />

      {/* T-shirt SVG with 3D tilt */}
      <div
        className="relative w-[85%] h-[85%]"
        style={{
          transform: "rotateY(-8deg) rotateX(2deg)",
          transformStyle: "preserve-3d",
        }}
      >
        <svg
          viewBox="0 0 400 450"
          className="w-full h-full drop-shadow-2xl"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="shirtGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity="1" />
              <stop offset="35%" stopColor={color} stopOpacity="0.95" />
              <stop offset="60%" stopColor={color} stopOpacity="0.88" />
              <stop offset="100%" stopColor={color} stopOpacity="0.78" />
            </linearGradient>
            <linearGradient id="sleeveL" x1="0" y1="0" x2="1" y2="0.5">
              <stop offset="0%" stopColor="#000" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#000" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="sleeveR" x1="1" y1="0" x2="0" y2="0.5">
              <stop offset="0%" stopColor="#000" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#000" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="collarShadow" cx="0.5" cy="0" r="0.5">
              <stop offset="0%" stopColor="#000" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#000" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="foldHighlight" x1="0.3" y1="0" x2="0.7" y2="1">
              <stop offset="0%" stopColor="#fff" stopOpacity="0.08" />
              <stop offset="50%" stopColor="#fff" stopOpacity="0" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0.05" />
            </linearGradient>
            {/* Banner ribbon gradient */}
            <linearGradient id="bannerGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor={navy} stopOpacity="0.9" />
              <stop offset="50%" stopColor={navy} stopOpacity="1" />
              <stop offset="100%" stopColor={navy} stopOpacity="0.9" />
            </linearGradient>
          </defs>

          {/* SHIRT BODY */}
          <path
            d="M90,80 L50,100 L20,160 L60,175 L80,130 L80,400 Q80,430 110,430 L290,430 Q320,430 320,400 L320,130 L340,175 L380,160 L350,100 L310,80 Q280,55 250,55 Q230,40 200,38 Q170,40 150,55 Q120,55 90,80 Z"
            fill="url(#shirtGrad)"
            stroke={color}
            strokeWidth="1"
            strokeOpacity="0.3"
          />

          {/* Sleeve shadows */}
          <path d="M90,80 L50,100 L20,160 L60,175 L80,130 L80,100 Q85,85 90,80 Z" fill="url(#sleeveL)" />
          <path d="M310,80 L350,100 L380,160 L340,175 L320,130 L320,100 Q315,85 310,80 Z" fill="url(#sleeveR)" />

          {/* Collar */}
          <path
            d="M150,55 Q170,40 200,38 Q230,40 250,55 Q240,75 200,78 Q160,75 150,55 Z"
            fill="url(#shirtGrad)"
            stroke={color}
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />
          <ellipse cx="200" cy="60" rx="35" ry="18" fill="url(#collarShadow)" />

          {/* Fabric fold lines */}
          <path d="M160,130 Q180,250 170,400" stroke="#fff" strokeWidth="0.8" strokeOpacity="0.08" fill="none" />
          <path d="M240,130 Q220,250 230,400" stroke="#000" strokeWidth="0.8" strokeOpacity="0.06" fill="none" />
          <path d="M200,80 Q195,200 200,400" stroke="#fff" strokeWidth="0.5" strokeOpacity="0.06" fill="none" />
          <path d="M80,130 L80,400 Q80,430 110,430 L290,430 Q320,430 320,400 L320,130 Z" fill="url(#foldHighlight)" />

          {/* === FRONT DESIGN — matching campaign artwork === */}

          {/* Simplified VI island outline behind text */}
          <path
            d="M140,155 L148,148 L160,145 L175,148 L180,152 L185,148 L195,145 L210,142 L225,144 L240,148 L255,152 L260,158 L258,162 L250,158 L240,155 L225,152 L210,150 L195,152 L185,156 L175,155 L165,152 L155,155 L145,160 Z"
            fill="none"
            stroke="#fff"
            strokeWidth="1.5"
            strokeOpacity="0.5"
          />

          {/* "JOSE" */}
          <text
            x="200" y="148"
            textAnchor="middle"
            fontFamily="Impact, Arial Black, sans-serif"
            fontWeight="900"
            fontSize="30"
            fill={navy}
            stroke="#fff"
            strokeWidth="1.2"
            paintOrder="stroke"
          >
            JOSE
          </text>

          {/* "BESSE" with quotes */}
          <text
            x="200" y="185"
            textAnchor="middle"
            fontFamily="Impact, Arial Black, sans-serif"
            fontWeight="900"
            fontSize="36"
            fill={navy}
            stroke="#fff"
            strokeWidth="1.5"
            paintOrder="stroke"
            fontStyle="italic"
          >
            {"“"}BESSE{"”"}
          </text>

          {/* "GONZALEZ" */}
          <text
            x="200" y="220"
            textAnchor="middle"
            fontFamily="Impact, Arial Black, sans-serif"
            fontWeight="900"
            fontSize="34"
            fill={navy}
            stroke="#fff"
            strokeWidth="1.5"
            paintOrder="stroke"
          >
            GONZALEZ
          </text>

          {/* Horizontal rules around "FOR" */}
          <line x1="120" y1="237" x2="172" y2="237" stroke={navy} strokeWidth="2" />
          <line x1="228" y1="237" x2="280" y2="237" stroke={navy} strokeWidth="2" />

          {/* "FOR" */}
          <text
            x="200" y="243"
            textAnchor="middle"
            fontFamily="Impact, Arial Black, sans-serif"
            fontWeight="900"
            fontSize="16"
            fill={navy}
          >
            FOR
          </text>

          {/* Navy banner ribbon */}
          <polygon
            points="105,255 295,255 300,272 295,289 105,289 100,272"
            fill="url(#bannerGrad)"
          />
          {/* Banner end folds */}
          <polygon points="100,255 105,255 105,260" fill={navy} fillOpacity="0.5" />
          <polygon points="300,255 295,255 295,260" fill={navy} fillOpacity="0.5" />

          {/* "SENATE" on banner */}
          <text
            x="200" y="280"
            textAnchor="middle"
            fontFamily="Impact, Arial Black, sans-serif"
            fontWeight="900"
            fontSize="28"
            fill="#fff"
            letterSpacing="4"
          >
            SENATE
          </text>

          {/* Wave decoration at bottom */}
          <path
            d="M130,310 Q160,300 200,308 Q240,316 270,306"
            fill="none"
            stroke="#fff"
            strokeWidth="3"
            strokeOpacity="0.7"
          />
          <path
            d="M125,318 Q160,308 200,316 Q240,324 275,314"
            fill="none"
            stroke={navy}
            strokeWidth="2.5"
            strokeOpacity="0.8"
          />
        </svg>
      </div>
    </div>
  );
}
