"use client";

import { useEffect, useState } from "react";

/** Renders the current year client-side, so a static export doesn't freeze
 * the footer's copyright year at build time. */
export default function CurrentYear() {
  const [year, setYear] = useState(null);
  useEffect(() => setYear(new Date().getFullYear()), []);
  // Reasonable fallback for the pre-hydration/no-JS render.
  return <>{year ?? new Date().getFullYear()}</>;
}
