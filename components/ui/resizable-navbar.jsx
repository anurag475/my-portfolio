"use client";

// Aceternity UI's "Resizable Navbar" — a floating capsule nav that shrinks
// and blurs into a smaller pill once the page is scrolled past ~100px.
// Ported to plain JSX for this JS/Next.js project: `framer-motion` (already
// a dependency) instead of the `motion/react` package alias the upstream
// version imports, and the project's own Menu/Close icons instead of
// @tabler/icons-react. The site has no dark-mode toggle (see
// app/globals.css), so the `dark:` variants from the original are dropped
// and colors are tied to the site's own --accent-500 token where a brand
// color is needed.
//
// `Navbar` uses `fixed` (the upstream source's own alternative to `sticky`,
// noted in its original comment) so it overlays the page instead of taking
// real space — hero-type sections fill in behind it and add top padding
// via --nav-clearance (app/globals.css) so their content still clears it.
import React, { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, Close } from "../Icons";

export function Navbar({ children, className }) {
  const ref = useRef(null);
  const { scrollY } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 100);
  });

  return (
    <motion.div ref={ref} className={cn("fixed inset-x-0 top-4 z-40 w-full", className)}>
      {React.Children.map(children, (child) => (React.isValidElement(child) ? React.cloneElement(child, { visible }) : child))}
    </motion.div>
  );
}

export function NavBody({ children, className, visible }) {
  return (
    <motion.div
      animate={{
        backdropFilter: "blur(16px)",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "0 1px 2px rgba(15, 20, 35, 0.06)",
        width: visible ? "40%" : "100%",
        y: visible ? 12 : 0,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 50 }}
      // The upstream demo's 800px floor was sized for its own 3-link demo
      // nav — this site's 6 links (Home…Contact) need more room, or the
      // shrunk (scrolled) pill crowds the links against the logo/CTA.
      style={{ minWidth: "1000px" }}
      className={cn(
        // Grid, not flex-justify-between: NavItems (below) is centered
        // *within its own middle column* rather than absolutely overlaid
        // across the full bar, so a longer link list can't paint over the
        // logo or CTA on either side — it just has less room to center in.
        // Always a translucent light backdrop (not transparent-until-scrolled)
        // — the nav floats over the dark hero, and the logo/link text is
        // dark, so a fully transparent bar was unreadable before scrolling.
        // The tint is the floor that keeps the dark nav text legible over the
        // hero: at this tint the links (text-neutral-900) measure ~5.1:1, so
        // lowering it further needs the link colour re-checked against WCAG AA.
        "relative z-[60] mx-auto hidden w-full max-w-7xl grid-cols-[auto_1fr_auto] items-center self-start rounded-full border border-black/5 bg-white/50 px-4 py-2 lg:grid",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

export function NavItems({ items, className, activeHref, onItemClick }) {
  const [hovered, setHovered] = useState(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "hidden min-w-0 flex-row flex-nowrap items-center justify-center space-x-1 text-sm font-medium text-neutral-900 transition duration-200 hover:text-neutral-900 lg:flex",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-3 py-2 text-neutral-900"
          key={item.link}
          href={item.link}
          aria-current={item.link === activeHref ? "page" : undefined}
        >
          {hovered === idx && <motion.div layoutId="hovered" className="absolute inset-0 h-full w-full rounded-full bg-gray-100" />}
          {item.link === activeHref && hovered !== idx && <span className="absolute inset-0 h-full w-full rounded-full bg-gray-100/70" />}
          <span className={cn("relative z-20", item.link === activeHref && "font-semibold text-neutral-900")}>{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
}

export function MobileNav({ children, className, visible }) {
  return (
    <motion.div
      animate={{
        backdropFilter: "blur(16px)",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "0 1px 2px rgba(15, 20, 35, 0.06)",
        width: visible ? "94%" : "100%",
        paddingRight: visible ? "12px" : "16px",
        paddingLeft: visible ? "12px" : "16px",
        borderRadius: visible ? "1rem" : "1.5rem",
        y: visible ? 12 : 0,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 50 }}
      className={cn(
        // Always a translucent light backdrop (not transparent-until-scrolled)
        // — the nav floats over the dark hero, and the logo/menu-icon are
        // dark, so a fully transparent bar was unreadable before scrolling.
        // The tint is the floor that keeps the dark nav text legible over the
        // hero: at this tint the links (text-neutral-900) measure ~5.1:1, so
        // lowering it further needs the link colour re-checked against WCAG AA.
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-1.5rem)] flex-col items-center justify-between border border-black/5 bg-white/55 py-2 lg:hidden",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

export function MobileNavHeader({ children, className }) {
  return <div className={cn("flex w-full flex-row items-center justify-between", className)}>{children}</div>;
}

export function MobileNavMenu({ children, className, isOpen }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function MobileNavToggle({ isOpen, onClick }) {
  return (
    <button type="button" onClick={onClick} aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen} className="p-1 text-neutral-900">
      {isOpen ? <Close width={24} height={24} /> : <Menu width={24} height={24} />}
    </button>
  );
}

export function NavbarLogo({ href = "/", avatar, name }) {
  return (
    <a href={href} className="relative z-20 mr-4 flex items-center gap-2 px-2 py-1 text-sm font-normal">
      {avatar}
      <span className="font-semibold text-neutral-900">{name}</span>
    </a>
  );
}

export function NavbarButton({ href, as: Tag = "a", children, className, variant = "primary", ...props }) {
  const baseStyles =
    "px-4 py-2 rounded-full bg-white text-sm font-semibold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

  const variantStyles = {
    primary: "bg-[var(--accent-500)] text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] hover:bg-[var(--accent-600)]",
    secondary: "bg-transparent shadow-none text-neutral-700",
    dark: "bg-neutral-900 text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05)]",
  };

  return (
    <Tag href={href} className={cn(baseStyles, variantStyles[variant], className)} {...props}>
      {children}
    </Tag>
  );
}
