// Responsive image manifest. The static export can't use Next's image
// optimizer, so every photo/screenshot is pre-generated as WebP at a few
// widths under /public/img (see README → "Images"). `widths` lists the files
// that exist on disk: `${base}-${width}.webp`. `w`/`h` are the source
// dimensions, used for the aspect-ratio hint that prevents layout shift.
export const IMAGES = {
  "work/astorea": { w: 1312, h: 1199, widths: [480, 960, 1312] },
  "work/auraweb-ai-school": { w: 1536, h: 1024, widths: [480, 960, 1536] },
  "work/bavanya": { w: 1536, h: 1024, widths: [480, 960, 1536] },
  "work/hindustan-water-solution": { w: 1024, h: 1536, widths: [480, 960, 1024] },
  "work/normal-school-sootea": { w: 1080, h: 591, widths: [480, 960, 1080] },
  "work/nyayadarpan-ai": { w: 1011, h: 665, widths: [480, 960, 1011] },
  "work/outfyle": { w: 1365, h: 618, widths: [480, 960, 1365] },
  "work/rabal": { w: 562, h: 810, widths: [480, 562] },
  "work/rainbow-dhamma-foundation": { w: 1672, h: 941, widths: [480, 960, 1600] },
  "work/rk-international-school": { w: 1672, h: 941, widths: [480, 960, 1600] },
  "work/rv-organica": { w: 1672, h: 941, widths: [480, 960, 1600] },
  "work/vibegifts": { w: 1536, h: 1024, widths: [480, 960, 1536] },
  "me/portrait": { w: 812, h: 1254, widths: [400, 812] },
  "me/avatar": { w: 192, h: 192, widths: [96, 192] },
  "brand/auraweb-logo": { w: 1254, h: 1254, widths: [160, 320] },
  "brand/jatinga-logo": { w: 718, h: 478, widths: [160, 320] },
  "brand/ad-mark-dark": { w: 186, h: 128, widths: [93, 186] },
  "brand/ad-mark-light": { w: 186, h: 128, widths: [93, 186] },
  "brand/ad-lockup-light": { w: 640, h: 497, widths: [320, 640] },
  "brand/wooobi-logo": { w: 1600, h: 800, widths: [160, 320] },
  "people/hardik-arora": { w: 192, h: 192, widths: [96, 192] },
  "people/jitu-barman": { w: 192, h: 192, widths: [96, 192] },
};

export function imageSet(key) {
  const meta = IMAGES[key];
  if (!meta) throw new Error(`Unknown image "${key}" — add it to lib/images.js`);
  const url = (w) => `/img/${key}-${w}.webp`;
  return {
    ...meta,
    src: url(meta.widths[meta.widths.length - 1]),
    srcSet: meta.widths.map((w) => `${url(w)} ${w}w`).join(", "),
  };
}
