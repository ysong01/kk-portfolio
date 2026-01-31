import React, { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type AnimatedSectionProps = React.HTMLAttributes<HTMLElement> & {
  as?: React.ElementType;
  innerClassName?: string;
  parallaxStrength?: number; // px
  revealOnce?: boolean;
  revealRootMargin?: string;
};

export default function AnimatedSection({
  as: Component = "section",
  className,
  innerClassName,
  parallaxStrength = 12,
  revealOnce = true,
  revealRootMargin = "0px 0px -10% 0px",
  children,
  style,
  ...rest
}: AnimatedSectionProps) {
  const ref = useRef<HTMLElement | null>(null);

  const [reduceMotion, setReduceMotion] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();

    if (mq.addEventListener) mq.addEventListener("change", update);
    else mq.addListener(update);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", update);
      else mq.removeListener(update);
    };
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setIsVisible(true);
      setIsActive(false);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;

        if (entry.isIntersecting) {
          setIsActive(true);
          setIsVisible(true);
          if (revealOnce) obs.disconnect();
        } else {
          setIsActive(false);
        }
      },
      { threshold: 0.15, rootMargin: revealRootMargin }
    );

    obs.observe(node);
    return () => obs.disconnect();
  }, [reduceMotion, revealOnce, revealRootMargin]);

  useEffect(() => {
    if (reduceMotion) return;

    let raf = 0;

    const tick = () => {
      raf = 0;
      const node = ref.current;
      if (!node) return;

      if (!isActive) {
        setParallaxY(0);
        return;
      }

      const rect = node.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = vh / 2;

      const normalized = Math.max(
        -1,
        Math.min(1, (elementCenter - viewportCenter) / vh)
      );

      setParallaxY(-normalized * parallaxStrength);
    };

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [reduceMotion, isActive, parallaxStrength]);

  const mergedStyle = useMemo<React.CSSProperties>(() => {
    if (reduceMotion) return style ?? {};
    return {
      ...(style ?? {}),
      transform: `translate3d(0, ${parallaxY.toFixed(2)}px, 0)`,
    };
  }, [reduceMotion, parallaxY, style]);

  return (
    <Component
      ref={ref as any}
      className={cn("will-change-transform", className)}
      style={mergedStyle}
      {...(rest as any)}
    >
      <div
        className={cn(
          "w-full transition-[opacity,transform] duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
          innerClassName
        )}
      >
        {children}
      </div>
    </Component>
  );
}