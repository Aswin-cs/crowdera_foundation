import { useState } from "react";

/**
 * AnimatedHandshakeIcon
 *
 * Props:
 *   size       {number}  — width & height in px         (default: 80)
 *   colorLeft  {string}  — color for left hand           (default: "#1d4ed8")
 *   colorRight {string}  — color for right hand          (default: "#7e22ce")
 *   duration   {string}  — CSS animation duration        (default: "2.6s")
 *   className  {string}  — extra classes on <svg>        (default: "")
 */
export default function AnimatedHandshakeIcon({
  size = 80,
  colorLeft = "#1d4ed8",
  colorRight = "#7e22ce",
  duration = "2.6s",
  className = "",
}) {
  const uid = `hs-${size}`;

  const styleTag = `
    @keyframes hsSlideLeft {
      0%   { transform: translateX(-160px); opacity: 0; }
      18%  { transform: translateX(-160px); opacity: 0; }
      42%  { transform: translateX(0px);    opacity: 1; }
      55%  { transform: translateX(8px);    opacity: 1; }
      68%  { transform: translateX(0px);    opacity: 1; }
      72%  { transform: translateX(-5px) rotate(-1deg); }
      76%  { transform: translateX(5px)  rotate(1deg); }
      80%  { transform: translateX(-3px); }
      84%  { transform: translateX(3px); }
      88%  { transform: translateX(0px); opacity: 1; }
      92%  { transform: translateX(0px); opacity: 1; }
      100% { transform: translateX(-160px); opacity: 0; }
    }
    @keyframes hsSlideRight {
      0%   { transform: translateX(160px);  opacity: 0; }
      18%  { transform: translateX(160px);  opacity: 0; }
      42%  { transform: translateX(0px);    opacity: 1; }
      55%  { transform: translateX(-8px);   opacity: 1; }
      68%  { transform: translateX(0px);    opacity: 1; }
      72%  { transform: translateX(5px)  rotate(1deg); }
      76%  { transform: translateX(-5px) rotate(-1deg); }
      80%  { transform: translateX(3px); }
      84%  { transform: translateX(-3px); }
      88%  { transform: translateX(0px); opacity: 1; }
      92%  { transform: translateX(0px); opacity: 1; }
      100% { transform: translateX(160px);  opacity: 0; }
    }
    @keyframes hsOuter {
      0%,40% { opacity: 0; }
      52%    { opacity: 1; }
      90%    { opacity: 1; }
      100%   { opacity: 0; }
    }
    @keyframes hsGlow {
      0%,45% { opacity: 0; }
      55%    { opacity: 0.18; }
      70%    { opacity: 0.08; }
      88%    { opacity: 0.12; }
      100%   { opacity: 0; }
    }
    @keyframes hsSpark {
      0%,62%  { opacity: 0; transform: var(--spark-r, rotate(0deg)) translateY(0px) scale(0); }
      65%     { opacity: 1; transform: var(--spark-r, rotate(0deg)) translateY(-80px) scale(1); }
      80%     { opacity: 0; transform: var(--spark-r, rotate(0deg)) translateY(-130px) scale(0.4); }
      100%    { opacity: 0; }
    }

    .hs-svg-${uid}:hover .hs-glow, .group:hover .hs-glow, .group\\/sidebar:hover .hs-glow {
      animation: hsGlow ${duration} ease-out infinite;
    }
    .hs-svg-${uid}:hover .hs-outer, .group:hover .hs-outer, .group\\/sidebar:hover .hs-outer {
      animation: hsOuter ${duration} ease-in-out infinite;
    }
    .hs-svg-${uid}:hover .hs-left, .group:hover .hs-left, .group\\/sidebar:hover .hs-left {
      animation: hsSlideLeft ${duration} cubic-bezier(.22,.68,0,1.2) infinite;
    }
    .hs-svg-${uid}:hover .hs-right, .group:hover .hs-right, .group\\/sidebar:hover .hs-right {
      animation: hsSlideRight ${duration} cubic-bezier(.22,.68,0,1.2) infinite;
    }
    .hs-svg-${uid}:hover .hs-spark, .group:hover .hs-spark, .group\\/sidebar:hover .hs-spark {
      animation: hsSpark ${duration} ease-out infinite;
    }
  `;

  const leftPath = `M282.110382,322.609100
    C253.409988,353.771606 240.856369,390.380981 245.190414,432.604218
    C248.591629,465.739441 262.909058,493.633972 286.139954,517.218994
    C333.267059,565.064575 380.332153,612.971252 427.471680,660.804504
    C452.969635,686.677673 478.631378,712.389771 504.049591,738.340698
    C507.630890,741.996948 509.932495,741.922119 513.319763,738.293091
    C519.570557,731.596191 526.251038,725.302490 532.659668,718.750061
    C536.048523,715.285156 539.023071,711.504395 540.705566,706.834900
    C545.547180,693.397461 541.213562,682.365479 531.741760,672.752625
    C522.501526,663.374634 513.014282,654.238037 503.856689,644.781250
    C490.857391,631.357300 495.153534,609.264282 512.038696,602.312317
    C523.747375,597.491638 533.968018,600.485840 542.691895,609.043396
    C552.683899,618.845032 562.354858,628.973206 572.287170,638.836792
    C580.357544,646.851379 590.214905,649.054199 600.871521,645.847412
    C620.446838,639.956848 627.547791,615.458069 614.404358,599.560425
    C610.487854,594.823242 605.924622,590.617065 601.614807,586.209534
    C594.859253,579.300903 587.654663,572.779785 581.399597,565.446838
    C574.258667,557.075439 572.311523,547.297302 577.498169,537.067017
    C582.568359,527.066528 590.807129,522.324219 602.208496,522.514709
    C610.956543,522.660828 617.390869,526.835938 623.150269,532.685547
    C632.151733,541.828003 641.053162,551.069092 650.069763,560.196411
    C656.345886,566.549683 663.975098,570.210510 672.954285,569.225342
    C685.364929,567.863647 693.730652,560.859985 697.904297,549.075012
    C702.115967,537.182678 698.427795,526.900513 690.194336,518.369751
    C673.877686,501.463959 657.279785,484.819763 640.471863,468.401459
    C629.658691,457.838959 616.214661,452.794037 601.155151,452.365753
    C583.527771,451.864380 568.593262,458.388153 556.225220,470.718353
    C543.008606,483.894440 530.070129,497.349060 516.935852,510.608337
    C499.063141,528.651062 477.700775,538.494873 451.984650,537.312195
    C421.250153,535.898743 397.198242,522.393860 381.793976,495.614594
    C362.170929,461.501312 368.031708,422.257660 395.822205,394.248352
    C419.179352,370.707306 442.451843,347.082306 465.745392,323.478271
    C470.451813,318.709076 470.385132,318.202179 465.233856,313.760986
    C442.927887,294.529907 417.012848,283.301697 387.730194,281.576324
    C346.816589,279.165619 311.437927,292.498108 282.110382,322.609100 Z`;

  const rightPath = `M660.830078,283.748566
    C654.062012,282.959167 647.302673,281.578033 640.524414,281.477966
    C601.394287,280.900177 567.893860,294.458099 540.319153,322.324463
    C524.260437,338.553070 508.309418,354.888214 492.299744,371.165375
    C471.849823,391.956970 451.224731,412.579742 431.004852,433.592560
    C421.183228,443.799377 420.511444,459.211884 428.424591,470.956909
    C439.669708,487.647339 463.252655,489.914551 478.069855,475.387695
    C491.991760,461.738617 505.467957,447.636230 519.273193,433.866577
    C541.439941,411.756897 568.360535,400.261108 599.556885,400.083801
    C626.807922,399.928894 651.304993,408.935059 672.250854,426.472290
    C687.855835,439.537781 701.330383,454.864655 715.724548,469.212189
    C723.860107,477.321381 732.272705,485.206940 739.268433,494.374359
    C743.250183,499.592163 743.839539,499.726685 747.479126,494.040497
    C767.674438,462.489105 774.579407,428.324829 767.775269,391.395996
    C757.786133,337.180664 715.391357,294.208252 660.830078,283.748566 Z`;

  const outerPath = `M624.711609,229.636322
    C655.148315,227.389038 684.084167,232.133224 711.314575,244.627594
    C772.505005,272.704193 808.980164,320.553436 820.163086,386.690033
    C830.305298,446.671234 813.726501,499.706085 774.172302,545.659485
    C768.092163,552.723267 761.824768,559.703735 755.003357,566.032227
    C746.107727,574.285156 740.030334,584.715881 732.192078,593.763672
    C718.173828,609.945129 700.176147,618.371216 679.327881,621.148926
    C674.987488,621.727234 673.664001,623.324158 673.188843,627.665894
    C669.542664,660.985901 642.470093,694.278320 604.310425,698.413452
    C595.436462,699.375061 595.722961,699.444519 594.182129,708.666626
    C591.281494,726.027649 583.918579,741.397095 571.640930,754.068909
    C557.147827,769.027344 542.332153,783.674988 527.570007,798.370605
    C516.026672,809.862122 500.016418,809.721924 488.506348,798.053955
    C452.229370,761.278992 415.983765,724.473022 379.744446,687.660950
    C334.971252,642.180054 289.972290,596.917847 245.539215,551.106934
    C215.611130,520.250793 197.800461,483.056488 192.928162,440.307007
    C183.764999,359.909424 224.500641,282.097839 298.943665,246.531448
    C319.679840,236.624390 341.675903,231.053772 364.755310,229.540146
    C416.892242,226.120804 462.586090,241.662415 502.118439,275.535309
    C506.158997,278.997437 508.811859,278.975189 512.691040,275.544220
    C543.020081,248.719391 578.836121,234.482117 618.755676,229.857330
    C620.570435,229.647095 622.417358,229.714203 624.711609,229.636322 Z`;

  const sparkAngles = [0, 45, 90, 135, 200, 270];
  const sparkDelays = [0, 0.06, 0.12, 0.08, 0.04, 0.1];

  return (
    <>
      <style>{styleTag}</style>
      <svg
        width={size}
        height={size}
        viewBox="0 0 1024 1024"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Animated handshake icon"
        role="img"
        className={`${className} hs-svg-${uid}`}
        style={{ overflow: "visible" }}
      >
        <defs>
          <filter id={`glow-${uid}`}>
            <feGaussianBlur stdDeviation="28" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Glow burst at clasp */}
        <circle
          cx="512" cy="512" r="80"
          fill={colorLeft}
          filter={`url(#glow-${uid})`}
          className="hs-glow"
          style={{ opacity: 0 }}
        />

        {/* Outer connecting silhouette */}
        <g className="hs-outer" style={{ transformOrigin: "512px 512px" }}>
          <path fill={colorLeft} opacity="0.35" d={outerPath} />
        </g>

        {/* LEFT hand */}
        <g className="hs-left" style={{ transformOrigin: "512px 512px" }}>
          <path fill={colorLeft} d={leftPath} />
        </g>

        {/* RIGHT hand */}
        <g className="hs-right" style={{ transformOrigin: "512px 512px" }}>
          <path fill={colorRight} d={rightPath} />
        </g>

        {/* Spark particles */}
        {sparkAngles.map((angle, i) => (
          <g
            key={i}
            style={{
              transformOrigin: "512px 512px",
              transform: `rotate(${angle}deg)`,
              animationDelay: `${sparkDelays[i]}s`,
              opacity: 0,
            }}
            className="hs-spark"
          >
            <circle
              cx="512" cy="420" r="14"
              fill={i % 2 === 0 ? colorLeft : colorRight}
            />
          </g>
        ))}
      </svg>
    </>
  );
}


/* ── Demo page ── */
function App() {
  const [speed, setSpeed] = useState(3);
  const [themeIdx, setThemeIdx] = useState(0);

  const speedMap = { 1: "4.5s", 2: "3.2s", 3: "2.6s", 4: "1.8s", 5: "1.1s" };

  const themes = [
    { c1: "#1d4ed8", c2: "#7e22ce", label: "Blue-Purple" },
    { c1: "#0f766e", c2: "#15803d", label: "Teal-Green" },
    { c1: "#b45309", c2: "#c2410c", label: "Amber-Orange" },
    { c1: "#be185d", c2: "#9f1239", label: "Pink-Rose" },
    { c1: "#111827", c2: "#374151", label: "Mono" },
  ];

  const { c1, c2 } = themes[themeIdx];
  const dur = speedMap[speed];

  return (
    <div className="min-h-screen bg-neutral-100 flex flex-col items-center justify-center gap-10 p-10">
      <h1 className="text-xl font-semibold tracking-tight text-neutral-700">
        Animated Handshake Icon
      </h1>

      {/* Hero */}
      <div className="relative flex items-center justify-center w-48 h-48">
        <div className="absolute inset-0 rounded-full border-2 animate-ping opacity-20" style={{ borderColor: c1 }} />
        <AnimatedHandshakeIcon size={160} colorLeft={c1} colorRight={c2} duration={dur} />
      </div>

      {/* Speed */}
      <div className="flex items-center gap-3">
        <span className="text-sm text-neutral-500">Speed</span>
        <input type="range" min={1} max={5} value={speed} onChange={e => setSpeed(+e.target.value)} className="w-32" />
        <span className="text-sm font-medium text-neutral-700 w-6">{speed}×</span>
      </div>

      {/* Color theme */}
      <div className="flex flex-col items-center gap-3">
        <p className="text-xs uppercase tracking-widest text-neutral-400 font-medium">Color</p>
        <div className="flex gap-3">
          {themes.map((t, i) => (
            <button
              key={i}
              onClick={() => setThemeIdx(i)}
              className={`w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 ${themeIdx === i ? "scale-110 border-neutral-700" : "border-transparent"}`}
              style={{ background: `linear-gradient(135deg, ${t.c1} 50%, ${t.c2} 50%)` }}
              title={t.label}
            />
          ))}
        </div>
      </div>

      {/* Size scale */}
      <div className="flex flex-col items-center gap-3">
        <p className="text-xs uppercase tracking-widest text-neutral-400 font-medium">Sizes</p>
        <div className="flex items-end gap-5">
          {[20, 36, 56, 80].map(s => (
            <div key={s} className="flex flex-col items-center gap-2">
              <AnimatedHandshakeIcon size={s} colorLeft={c1} colorRight={c2} duration={dur} />
              <span className="text-[10px] text-neutral-400">{s}px</span>
            </div>
          ))}
        </div>
      </div>

      {/* Usage */}
      <pre className="bg-neutral-800 text-emerald-400 text-xs rounded-xl p-4 max-w-sm w-full overflow-x-auto leading-relaxed">
{`<AnimatedHandshakeIcon
  size={80}
  colorLeft="#1d4ed8"
  colorRight="#7e22ce"
  duration="2.6s"
/>`}
      </pre>
    </div>
  );
}

export { App };
