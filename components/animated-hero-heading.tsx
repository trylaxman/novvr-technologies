"use client";

import { useEffect, useState } from "react";

const words = [
  "ships.",
  "scales.",
  "automates.",
  "connects.",
  "transforms.",
  "innovates.",
];

export function AnimatedHeroHeading() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % words.length);
    }, 2000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <h1 className="animated-hero-heading">
      <span className="hero-heading-line">We build</span>
      <span className="hero-heading-line">technology that</span>

      <span
        className="animated-word-wrapper"
        aria-live="polite"
        aria-atomic="true"
      >
        <span key={words[activeIndex]} className="animated-word">
          {words[activeIndex]}
        </span>
      </span>
    </h1>
  );
}