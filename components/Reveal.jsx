"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Fades + slides its children in once they scroll into view.
 * Wraps content in a `tag` element (default div) carrying the existing
 * [data-reveal] CSS from globals.css, so no new styles were needed for
 * this Next.js port.
 */
export default function Reveal({ as: Tag = "div", className = "", style, children, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} data-reveal className={`${visible ? "is-visible" : ""} ${className}`.trim()} style={style} {...rest}>
      {children}
    </Tag>
  );
}
