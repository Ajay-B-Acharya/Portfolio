import { ArrowUpRight } from "lucide-react";

export function ContactButton() {
  return (
    <button className="utility-button" type="button" aria-label="Contact details coming soon" disabled>
      Contact <ArrowUpRight aria-hidden="true" size={14} strokeWidth={1.5} />
    </button>
  );
}
