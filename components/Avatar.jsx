import Image from "next/image";

/** Circular cropped headshot used as the brand mark in the navbar and
 * footer — ties the site's chrome back to the same portrait used in the
 * hero, instead of a generic initials monogram. */
export default function Avatar({ size = 36, className = "" }) {
  return (
    <span className={`brand-mark ${className}`} style={{ width: size, height: size }} aria-hidden="true">
      <Image src="/hero/avatar.webp" alt="" width={size * 2} height={size * 2} className="brand-avatar-img" />
    </span>
  );
}
