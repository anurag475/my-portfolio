import { MacbookScroll } from "@/components/ui/macbook-scroll";

// Scroll-driven MacBook mockup showing a real project screenshot, placed
// right after Featured Work as a visual "here's what it looks like in the
// browser" beat. The site has no dark-mode toggle (see app/globals.css),
// so this stays on the light look the rest of the page uses rather than
// the upstream component's `dark:` variants.
export default function MacbookScrollDemo() {
  return (
    <section className="bleed-soft macbook-section" style={{ overflow: "hidden" }}>
      <div className="w-full overflow-hidden bg-white">
        <MacbookScroll
          title={
            <span>
              Real projects, built and shipped. <br /> Not just mockups.
            </span>
          }
          src="/work/rainbow-dhamma-foundation.webp"
          showGradient={false}
        />
      </div>
    </section>
  );
}
