import { imageSet } from "@/lib/images";

/**
 * Responsive <img> backed by the pre-generated WebP set in lib/images.js.
 * Lazy by default; pass `priority` for above-the-fold images (LCP).
 * width/height carry the intrinsic ratio so nothing shifts while loading.
 */
export default function Img({ name, alt, sizes = "100vw", priority = false, className, style }) {
  const img = imageSet(name);
  return (
    <img
      src={img.src}
      srcSet={img.srcSet}
      sizes={sizes}
      width={img.w}
      height={img.h}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      className={className}
      style={style}
    />
  );
}
