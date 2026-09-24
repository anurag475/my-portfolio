"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE, whatsappUrl } from "@/lib/site";
import { ArrowUpRight } from "./Icons";
import Img from "./Img";

const LINKS = [
  { id: "work", label: "Work" },
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function SiteNav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [onDark, setOnDark] = useState(false);
  const toggleRef = useRef(null);

  // Compact, bordered bar once the page scrolls.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Switch to the dark bar while a dark section sits under the nav.
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const under = new Set();
    const navH = 80;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => (e.isIntersecting ? under.add(e.target) : under.delete(e.target)));
        setOnDark(under.size > 0);
      },
      { rootMargin: `0px 0px -${Math.max(0, window.innerHeight - navH)}px 0px` }
    );
    document.querySelectorAll(".is-dark, .footer, .cs-cta").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  // Highlight the section currently in view (homepage only).
  useEffect(() => {
    if (!isHome || !("IntersectionObserver" in window)) return setActive(pathname.startsWith("/work") ? "work" : "");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [isHome, pathname]);

  // Mobile menu: lock scroll, close on Escape, return focus to the toggle.
  useEffect(() => {
    if (!open) return;
    document.documentElement.classList.add("menu-open");
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.classList.remove("menu-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => setOpen(false), [pathname]);

  const href = (id) => (isHome ? `#${id}` : `/#${id}`);

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""} ${onDark ? "on-dark" : ""} ${open ? "is-open" : ""}`}>
      <div className="nav-inner">
        <Link href="/" className="nav-brand" aria-label={`${SITE.name} — home`}>
          <span className="nav-mark" aria-hidden="true">
            <Img name="brand/ad-mark-dark" alt="" priority sizes="47px" className="mark-on-light" />
            <Img name="brand/ad-mark-light" alt="" sizes="47px" className="mark-on-dark" />
          </span>
          <span className="nav-name">{SITE.name}</span>
        </Link>

        <nav className="nav-links" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.id} href={href(l.id)} aria-current={active === l.id ? "true" : undefined}>
              {l.label}
            </a>
          ))}
        </nav>

        <a href={href("contact")} className="btn btn-dark btn-sm nav-cta" data-magnetic>
          Let&rsquo;s Talk
          <ArrowUpRight />
        </a>

        <button
          ref={toggleRef}
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-menu" className="mobile-menu" inert={!open}>
        <nav aria-label="Mobile">
          <ol>
            {LINKS.map((l, i) => (
              <li key={l.id} style={{ "--i": i }}>
                <a href={href(l.id)} onClick={() => setOpen(false)}>
                  <span className="mm-num">0{i + 1}</span>
                  {l.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="mm-foot">
          <a href={href("contact")} className="btn btn-gold btn-lg btn-block" onClick={() => setOpen(false)}>
            Let&rsquo;s Talk <ArrowUpRight />
          </a>
          <div className="mm-meta">
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
