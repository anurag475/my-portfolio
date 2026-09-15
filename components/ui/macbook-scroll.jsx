"use client";

// Aceternity UI's "Macbook Scroll" — a scroll-driven MacBook mockup whose
// lid tilts open and screen content scales up as the section scrolls past.
// Ported to plain JSX for this JS/Next.js project (no TypeScript), using
// the `framer-motion` package that's already a project dependency (the
// upstream component imports from the newer `motion/react` package alias,
// which isn't installed here) and dropping the `@tabler/icons-react`
// dependency in favor of small inline glyphs for the keyboard's icon keys,
// consistent with this project's hand-rolled components/Icons.jsx.
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function MacbookScroll({ src, showGradient, title, badge }) {
  const ref = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    // Mobile-only ("end 45%" vs desktop's "end start"): `useScroll` tracks
    // progress across `ref`'s own *layout* height — ~726–755px here,
    // confirmed by instrumentation — regardless of the `transform:
    // scale(...)` the outer div below is given (scale doesn't affect
    // layout, only paint). That layout height deliberately stays large on
    // mobile too (see .macbook-scroll-root, app/globals.css — using an
    // explicit smaller `height` there instead visibly distorted the
    // mockup, since flexbox shrinks unconstrained children to fit rather
    // than just repositioning them), so it's *this* offset, not the
    // height, that has to do the compressing: desktop reaches scale-100
    // (no shrinking) at the md breakpoint, where layout height ≈ visual
    // height and "end start" is correct; below md, at scale-50/scale-
    // [0.35], that same ~726–755px unscaled height maps to only ~250–370px
    // of actual on-screen pixels, so tracking the full unscaled height
    // meant the lid was barely starting to open by the time the much-
    // shorter visible content had already scrolled past the top of the
    // screen. Ending the tracked range at 45% down the viewport instead of
    // 0% roughly halves the scroll distance needed to reach progress 1, so
    // the open/reveal plays out while the (scaled-down) mockup is still
    // on screen — verified directly: rotateX reaches ~-8° (from -28°,
    // i.e. ~75% open) after just 80px of scroll, with ~68% of the visible
    // mockup still on screen at that point.
    offset: isMobile ? ["start start", "end 45%"] : ["start start", "end start"],
  });

  const scaleX = useTransform(scrollYProgress, [0, 0.3], [1.2, isMobile ? 1 : 1.5]);
  const scaleY = useTransform(scrollYProgress, [0, 0.3], [0.6, isMobile ? 1 : 1.5]);
  const translate = useTransform(scrollYProgress, [0, 1], [0, 1500]);
  const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0]);
  const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div
      ref={ref}
      // `macbook-scroll-root` is a plain hook: app/globals.css shrinks
      // min-height on it at ≤768px only (see that rule for why) — inert
      // above that width, so desktop/tablet keep the full 200vh scroll
      // track and animation untouched.
      className="macbook-scroll-root flex min-h-[200vh] shrink-0 transform scale-[0.35] flex-col items-center justify-start py-0 [perspective:800px] sm:scale-50 md:scale-100 md:py-12"
    >
      <motion.h2
        style={{ translateY: textTransform, opacity: textOpacity }}
        className="mb-20 text-center text-3xl font-bold text-neutral-800 dark:text-white"
      >
        {title || (
          <span>
            This Macbook is built with Tailwindcss. <br /> No kidding.
          </span>
        )}
      </motion.h2>
      {/* Lid */}
      <Lid src={src} scaleX={scaleX} scaleY={scaleY} rotate={rotate} translate={translate} />
      {/* Base area */}
      <div className="relative -z-10 h-[22rem] w-[32rem] overflow-hidden rounded-2xl bg-gray-200 dark:bg-[#272729]">
        {/* above keyboard bar */}
        <div className="relative h-10 w-full">
          <div className="absolute inset-x-0 mx-auto h-4 w-[80%] bg-[#050505]" />
        </div>
        <div className="relative flex">
          <div className="mx-auto h-full w-[10%] overflow-hidden">
            <SpeakerGrid />
          </div>
          <div className="mx-auto h-full w-[80%]">
            <Keypad />
          </div>
          <div className="mx-auto h-full w-[10%] overflow-hidden">
            <SpeakerGrid />
          </div>
        </div>
        <Trackpad />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-2 w-20 rounded-tl-3xl rounded-tr-3xl bg-gradient-to-t from-[#272729] to-[#050505]" />
        {showGradient && (
          <div className="absolute inset-x-0 bottom-0 z-50 h-40 w-full bg-gradient-to-t from-white via-white to-transparent dark:from-black dark:via-black" />
        )}
        {badge && <div className="absolute bottom-4 left-4">{badge}</div>}
      </div>
    </div>
  );
}

function Lid({ scaleX, scaleY, rotate, translate, src }) {
  return (
    <div className="relative [perspective:800px]">
      <div
        style={{
          transform: "perspective(800px) rotateX(-25deg) translateZ(0px)",
          transformOrigin: "bottom",
          transformStyle: "preserve-3d",
        }}
        className="relative h-[12rem] w-[32rem] rounded-2xl bg-[#010101] p-2"
      >
        <div
          style={{ boxShadow: "0px 2px 0px 2px #171717 inset" }}
          className="absolute inset-0 flex items-center justify-center rounded-lg bg-[#010101]"
        >
          <span className="text-white">
            <CameraDot />
          </span>
        </div>
      </div>
      <motion.div
        style={{
          scaleX,
          scaleY,
          rotateX: rotate,
          translateY: translate,
          transformStyle: "preserve-3d",
          transformOrigin: "top",
        }}
        className="absolute inset-0 h-96 w-[32rem] rounded-2xl bg-[#010101] p-2"
      >
        <div className="absolute inset-0 rounded-lg bg-[#272729]" />
        {src && (
          <Image
            src={src}
            alt="Screen preview"
            fill
            className="absolute inset-0 h-full w-full rounded-lg object-cover object-left-top"
          />
        )}
      </motion.div>
    </div>
  );
}

function Trackpad() {
  return (
    <div
      className="mx-auto my-1 h-32 w-[40%] rounded-xl"
      style={{ boxShadow: "0px 0px 1px 1px #00000020 inset" }}
    />
  );
}

function Keypad() {
  return (
    <div className="mx-1 h-full [transform:translateZ(0)] rounded-md bg-[#050505] p-1">
      {/* First row: esc + function keys */}
      <Row>
        <KBtn className="w-10 items-end justify-start pl-[4px] pb-[2px]" childrenClassName="items-start">
          esc
        </KBtn>
        {Array.from({ length: 12 }, (_, i) => (
          <KBtn key={i}>F{i + 1}</KBtn>
        ))}
        <KBtn>
          <div className="h-4 w-4 rounded-full bg-gradient-to-b from-neutral-900 from-20% via-black via-50% to-neutral-900 to-95% p-px">
            <div className="h-full w-full rounded-full bg-black" />
          </div>
        </KBtn>
      </Row>

      {/* Second row */}
      <Row>
        {"`1234567890-=".split("").map((k) => (
          <KBtn key={k}>{k}</KBtn>
        ))}
        <KBtn className="w-10 items-end justify-end pr-[4px] pb-[2px]" childrenClassName="items-end">
          delete
        </KBtn>
      </Row>

      {/* Third row */}
      <Row>
        <KBtn className="w-10 items-end justify-start pl-[4px] pb-[2px]" childrenClassName="items-start">
          tab
        </KBtn>
        {"QWERTYUIOP[]".split("").map((k) => (
          <KBtn key={k}>{k}</KBtn>
        ))}
        <KBtn className="w-10 items-end justify-end pr-[4px] pb-[2px]" childrenClassName="items-end">
          \
        </KBtn>
      </Row>

      {/* Fourth row */}
      <Row>
        <KBtn className="w-[2.8rem] items-end justify-start pl-[4px] pb-[2px]" childrenClassName="items-start">
          caps lock
        </KBtn>
        {'ASDFGHJKL;"'.split("").map((k) => (
          <KBtn key={k}>{k}</KBtn>
        ))}
        <KBtn className="w-[2.85rem] items-end justify-end pr-[4px] pb-[2px]" childrenClassName="items-end">
          return
        </KBtn>
      </Row>

      {/* Fifth row */}
      <Row>
        <KBtn className="w-[3.65rem] items-end justify-start pl-[4px] pb-[2px]" childrenClassName="items-start">
          shift
        </KBtn>
        {"ZXCVBNM,./".split("").map((k) => (
          <KBtn key={k}>{k}</KBtn>
        ))}
        <KBtn className="w-[3.65rem] items-end justify-end pr-[4px] pb-[2px]" childrenClassName="items-end">
          shift
        </KBtn>
      </Row>

      {/* Sixth row: fn / control / option / command / space / arrows */}
      <Row>
        <KBtn childrenClassName="h-full justify-between py-[4px]">
          <span>fn</span>
          <span aria-hidden>🌐</span>
        </KBtn>
        <KBtn childrenClassName="h-full justify-between py-[4px]">
          <span aria-hidden>⌃</span>
          <span>control</span>
        </KBtn>
        <KBtn childrenClassName="h-full justify-between py-[4px]">
          <span aria-hidden>⌥</span>
          <span>option</span>
        </KBtn>
        <KBtn className="w-8" childrenClassName="h-full justify-between py-[4px]">
          <span aria-hidden>⌘</span>
          <span>command</span>
        </KBtn>
        <KBtn className="w-[8.2rem]" />
        <KBtn className="w-8" childrenClassName="h-full justify-between py-[4px]">
          <span aria-hidden>⌘</span>
          <span>command</span>
        </KBtn>
        <KBtn childrenClassName="h-full justify-between py-[4px]">
          <span aria-hidden>⌥</span>
          <span>option</span>
        </KBtn>
        <div className="mt-[2px] flex h-6 w-[4.9rem] flex-col items-center justify-end rounded-[4px] p-[0.5px]">
          <KBtn className="h-3 w-6" backlit={false}>
            <span aria-hidden>▲</span>
          </KBtn>
          <div className="flex">
            <KBtn className="h-3 w-6" backlit={false}>
              <span aria-hidden>◀</span>
            </KBtn>
            <KBtn className="h-3 w-6" backlit={false}>
              <span aria-hidden>▼</span>
            </KBtn>
            <KBtn className="h-3 w-6" backlit={false}>
              <span aria-hidden>▶</span>
            </KBtn>
          </div>
        </div>
      </Row>
    </div>
  );
}

function KBtn({ className, children, childrenClassName, backlit = true }) {
  return (
    <div
      className={cn(
        "[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform]",
        backlit && "bg-white/[0.2] shadow-xl shadow-white"
      )}
    >
      <div
        className={cn("flex h-6 w-6 items-center justify-center rounded-[3.5px] bg-[#0A090D]", className)}
        style={{ boxShadow: "0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset" }}
      >
        <div
          className={cn(
            "flex w-full flex-col items-center justify-center text-[5px] text-neutral-200",
            childrenClassName
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function Row({ children }) {
  return <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">{children}</div>;
}

function SpeakerGrid() {
  return (
    <div
      className="mt-2 flex h-40 gap-[2px] px-[0.5px]"
      style={{
        backgroundImage: "radial-gradient(circle, #08080A 0.5px, transparent 0.5px)",
        backgroundSize: "3px 3px",
      }}
    />
  );
}

function CameraDot() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="5" cy="5" r="2" fill="currentColor" fillOpacity="0.6" />
    </svg>
  );
}
