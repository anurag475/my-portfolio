import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Merges class-name lists the way shadcn/Aceternity-style components
// expect: clsx() to handle conditionals/arrays, twMerge() to resolve
// conflicting Tailwind utilities (e.g. a passed-in `p-0` correctly wins
// over a default `py-20`) instead of both ending up in the class list.
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Rotating set of the site's own accent/neutral tones — used for the
// initials-avatar placeholders below, so they read as intentional
// placeholders rather than random color noise.
const AVATAR_COLORS = ["#4338ca", "#0d9488", "#d97706", "#34405c", "#4f46e5"];

/** Generates a simple "initials on a color circle" placeholder photo as an
 * inline SVG data URI — used for testimonial/person photos that don't have
 * a real headshot yet. No stock photos of unrelated people get used as
 * stand-ins for real (if illustrative) names; swap in a real image path
 * once one is available. */
export function initialsAvatar(initials, seed = 0) {
  const bg = AVATAR_COLORS[Math.abs(seed) % AVATAR_COLORS.length];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500"><rect width="500" height="500" fill="${bg}"/><text x="50%" y="52%" font-family="Georgia, 'Iowan Old Style', serif" font-size="180" font-weight="600" fill="#ffffff" text-anchor="middle" dominant-baseline="middle">${initials}</text></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
