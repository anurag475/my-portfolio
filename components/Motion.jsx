"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * One small controller for every progressive-enhancement effect on the
 * site, instead of a client component per element. The markup is fully
 * readable without it — these only add motion on top:
 *
 *   [data-reveal]     fades/slides in once scrolled into view
 *   [data-parallax]   drifts slightly on scroll (value = strength, e.g. "0.06")
 *   [data-magnetic]   leans toward the pointer on hover (fine pointers only)
 *   [data-cursor]     shows the floating "View case study" label on hover
 *
 * Everything is skipped under prefers-reduced-motion. Re-runs on route
 * change so new pages get wired up too.
 */
export default function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const cleanups = [];

    // Reveal ------------------------------------------------------------
    const revealEls = document.querySelectorAll("[data-reveal]:not(.is-in)");
    if (reduced || !("IntersectionObserver" in window)) {
      revealEls.forEach((el) => el.classList.add("is-in"));
    } else {
      root.classList.add("motion-ready");
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("is-in");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
      );
      revealEls.forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());
    }

    if (reduced) return () => cleanups.forEach((fn) => fn());

    // Parallax (desktop only — not worth the work on small screens) ------
    const parallaxEls = [...document.querySelectorAll("[data-parallax]")];
    if (parallaxEls.length && window.matchMedia("(min-width: 900px)").matches) {
      let ticking = false;
      const update = () => {
        const vh = window.innerHeight;
        parallaxEls.forEach((el) => {
          const r = el.parentElement.getBoundingClientRect();
          if (r.bottom < 0 || r.top > vh) return;
          const offset = (r.top + r.height / 2 - vh / 2) * parseFloat(el.dataset.parallax || "0.06");
          el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
        });
        ticking = false;
      };
      const onScroll = () => {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(update);
        }
      };
      update();
      window.addEventListener("scroll", onScroll, { passive: true });
      cleanups.push(() => window.removeEventListener("scroll", onScroll));
    }

    if (!finePointer) return () => cleanups.forEach((fn) => fn());

    // Magnetic buttons ----------------------------------------------------
    document.querySelectorAll("[data-magnetic]").forEach((el) => {
      const move = (e) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * 0.18;
        const y = (e.clientY - r.top - r.height / 2) * 0.28;
        el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      };
      const leave = () => (el.style.transform = "");
      el.addEventListener("pointermove", move);
      el.addEventListener("pointerleave", leave);
      cleanups.push(() => {
        el.removeEventListener("pointermove", move);
        el.removeEventListener("pointerleave", leave);
      });
    });

    // Project cursor label -------------------------------------------------
    const cursor = document.getElementById("cursor-label");
    if (cursor) {
      document.querySelectorAll("[data-cursor]").forEach((el) => {
        const move = (e) => {
          cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        };
        const enter = (e) => {
          cursor.textContent = el.dataset.cursor;
          move(e);
          cursor.classList.add("is-on");
        };
        const leave = () => cursor.classList.remove("is-on");
        el.addEventListener("pointerenter", enter);
        el.addEventListener("pointermove", move);
        el.addEventListener("pointerleave", leave);
        cleanups.push(() => {
          el.removeEventListener("pointerenter", enter);
          el.removeEventListener("pointermove", move);
          el.removeEventListener("pointerleave", leave);
          cursor.classList.remove("is-on");
        });
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, [pathname]);

  return <div id="cursor-label" className="cursor-label" aria-hidden="true" />;
}
