// Genuine product screenshots used on the marketing site. Every file under
// /public/demo is a capture of the live Kenvio demo environment (Northgate
// Retrofit & Mechanical Ltd, a fictional company). Nothing here is a mock-up.
//
// REPLACE POINT: when the final Northgate Demo captures are ready, drop the
// new files into public/demo/ and update the paths below. Each entry serves
// WebP with a PNG fallback; both must exist.
export const SCREENSHOTS = {
  home: {
    src: "/demo/home",
    alt: "Kenvio Home: operational focus rail, attention strip, work status and compliance signals",
    caption: "The Kenvio Home view in the live demo environment. Northgate Retrofit & Mechanical Ltd is a fictional company.",
  },
  healthSafety: {
    src: "/demo/health-safety",
    alt: "Kenvio Health & Safety hub with attention counts per module",
    caption: "Health & Safety hub in the live demo environment.",
  },
  organisations: {
    src: "/demo/organisations",
    alt: "Kenvio Organisations hub: organisations, contacts, sites and projects",
    caption: "Organisations hub in the live demo environment.",
  },
};

export function Screenshot({ shot, className = "", frame = true }) {
  const img = (
    <picture>
      <source srcSet={`${shot.src}.webp`} type="image/webp" />
      <img src={`${shot.src}.png`} alt={shot.alt} className="w-full h-auto block" loading="lazy" decoding="async" />
    </picture>
  );
  if (!frame) return <div className={className}>{img}</div>;
  return (
    <figure className={className} data-screenshot={shot.src}>
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-2 md:p-3 shadow-2xl">
        <div className="flex items-center gap-1.5 px-2 pb-2">
          <span className="w-2 h-2 rounded-full bg-white/15" />
          <span className="w-2 h-2 rounded-full bg-white/15" />
          <span className="w-2 h-2 rounded-full bg-white/15" />
        </div>
        <div className="rounded-lg overflow-hidden border border-white/10 bg-[#f4f3ef]">{img}</div>
      </div>
      <figcaption className="mt-3 text-xs text-white/40 text-center">{shot.caption}</figcaption>
    </figure>
  );
}
