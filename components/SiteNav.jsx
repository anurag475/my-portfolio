"use client";

// Full swap to Aceternity UI's "Resizable Navbar" (components/ui/resizable-navbar.jsx):
// a normal-flow nav that shrinks into a smaller blurred pill once the page
// scrolls past ~100px. Unlike the previous nav, this one takes real space
// above the page content instead of floating over the hero — see the
// removed --nav-clearance override in app/globals.css.
import { useState } from "react";
import { usePathname } from "next/navigation";
import { SITE } from "@/lib/site";
import Avatar from "./Avatar";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./ui/resizable-navbar";

const NAV_LINKS = [
  { name: "Home", link: "/#home" },
  { name: "Work", link: "/#work" },
  { name: "Services", link: "/#services" },
  { name: "Process", link: "/#process" },
  { name: "About", link: "/#about" },
  { name: "Contact", link: "/#contact" },
];

export default function SiteNav() {
  const pathname = usePathname();
  const active = pathname === "/" ? "home" : pathname?.startsWith("/work") ? "work" : pathname?.startsWith("/services") ? "services" : "";
  const activeHref = NAV_LINKS.find((l) => l.name.toLowerCase() === active)?.link;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar>
      {/* Desktop */}
      <NavBody>
        <NavbarLogo avatar={<Avatar size={32} />} name={SITE.name} />
        <NavItems items={NAV_LINKS} activeHref={activeHref} />
        <div className="flex items-center gap-3">
          <NavbarButton href="/#contact" variant="primary">
            Start a Project →
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo avatar={<Avatar size={30} />} name={SITE.name} />
          <MobileNavToggle isOpen={menuOpen} onClick={() => setMenuOpen((v) => !v)} />
        </MobileNavHeader>

        <MobileNavMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)}>
          {NAV_LINKS.map((item) => (
            <a
              key={item.link}
              href={item.link}
              onClick={() => setMenuOpen(false)}
              aria-current={item.link === activeHref ? "page" : undefined}
              className="relative w-full text-base font-medium text-neutral-700 aria-[current=page]:font-semibold aria-[current=page]:text-neutral-900"
            >
              {item.name}
            </a>
          ))}
          <div className="flex w-full flex-col gap-3 pt-2">
            <NavbarButton href="/#contact" variant="primary" className="w-full" onClick={() => setMenuOpen(false)}>
              Start a Project →
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
