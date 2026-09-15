import Image from "next/image";

// Renders a fake "browser window" for project visuals. Two modes:
//   - `blocks` (CSS placeholder content) — used for the illustrative example
//     projects, which have no real site to screenshot.
//   - `screenshot` (a real image) — used for real, live projects. Still
//     framed in the same browser-chrome bar so it sits visually consistent
//     next to the illustrative cards.
//
// `blocks` entries are { type, width? } descriptors:
//   pill   — small rounded accent bar
//   line   — a text-line placeholder, width 40/60/80 (%)
//   block  — a large accent block
//   cards  — a row of three small cards
function Block({ block }, i) {
  switch (block.type) {
    case "pill":
      return <div className="mock-pill" key={i} />;
    case "line":
      return <div className={`mock-line w-${block.width || 60}`} key={i} />;
    case "block":
      return <div className="mock-block" key={i} />;
    case "cards":
      return (
        <div className="mock-cards" key={i}>
          <div />
          <div />
          <div />
        </div>
      );
    default:
      return null;
  }
}

export default function BrowserMockup({ blocks = [], screenshot, variant = "browser", className = "", style }) {
  // "app" variant is for mobile app screenshots (portrait, no address
  // bar) — skips the browser-chrome dots/URL bar and lets the screenshot
  // keep its native portrait aspect ratio instead of being squeezed into
  // the wide browser-window shape.
  const isApp = variant === "app";
  return (
    <div className={`browser-card main ${isApp ? "is-app" : ""} ${className}`} style={style}>
      {!isApp && (
        <div className="browser-chrome" aria-hidden="true">
          <i />
          <i />
          <i />
          <div className="url" />
        </div>
      )}
      {screenshot ? (
        <Image
          src={screenshot.src}
          alt={screenshot.alt}
          // `screenshot.width`/`height` let a project override the aspect
          // ratio hint (e.g. an app screenshot cropped to a non-standard
          // height) — falls back to sane defaults for each variant.
          width={screenshot.width || (isApp ? 562 : 1672)}
          height={screenshot.height || (isApp ? 810 : 941)}
          className="browser-screenshot"
          sizes={isApp ? "(max-width: 860px) 60vw, 260px" : "(max-width: 860px) 100vw, 50vw"}
        />
      ) : (
        <div className="browser-body" aria-hidden="true">
          {blocks.map((block, i) => (
            <Block block={block} key={i} />
          ))}
        </div>
      )}
    </div>
  );
}
