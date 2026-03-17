"use client";

import { useEffect, useRef, ReactNode } from "react";
import styles from "./AnimateIn.module.css";

interface AnimateInProps {
  children: ReactNode;
  delay?: number;         // ms
  direction?: "up" | "left" | "right" | "none";
  className?: string;
  threshold?: number;
  once?: boolean;
}

export default function AnimateIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
  threshold = 0.15,
  once = true,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add(styles.visible);
          if (once) observer.disconnect();
        } else if (!once) {
          el.classList.remove(styles.visible);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, once, threshold]);

  return (
    <div
      ref={ref}
      className={`${styles.base} ${styles[direction]} ${className}`}
    >
      {children}
    </div>
  );
}
