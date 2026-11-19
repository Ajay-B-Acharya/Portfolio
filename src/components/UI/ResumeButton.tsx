import { Download } from "lucide-react";

export function ResumeButton() {
  return (
    <button className="utility-button utility-button--quiet" type="button" aria-label="Resume coming soon" disabled>
      <Download aria-hidden="true" size={13} strokeWidth={1.5} /> Resume
    </button>
  );
}
