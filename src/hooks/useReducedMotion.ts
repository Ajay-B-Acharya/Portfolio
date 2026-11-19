import { useEffect, useState } from "react";

const mediaQuery = "(prefers-reduced-motion: reduce)";

export function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(() =>
    typeof window !== "undefined" && window.matchMedia(mediaQuery).matches,
  );

  useEffect(() => {
    const query = window.matchMedia(mediaQuery);
    const updatePreference = () => setReducedMotion(query.matches);
    updatePreference();
    query.addEventListener("change", updatePreference);
    return () => query.removeEventListener("change", updatePreference);
  }, []);

  return reducedMotion;
}
