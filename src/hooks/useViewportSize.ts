import { useState, useEffect } from "react";

type Breakpoint = "mobile" | "tablet" | "desktop";

export function useViewportSize(): Breakpoint {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>(() => {
    if (typeof window === "undefined") return "desktop";
    const width = window.innerWidth;
    if (width < 768) return "mobile";
    if (width < 1200) return "tablet";
    return "desktop";
  });

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width < 768) setBreakpoint("mobile");
      else if (width < 1200) setBreakpoint("tablet");
      else setBreakpoint("desktop");
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint;
}
