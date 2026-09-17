import React, { useEffect } from "react";
import { X } from "lucide-react";

export default function Lightbox({ src, onClose }) {
  useEffect(() => {
    if (!src) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [src, onClose]);

  if (!src) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Image viewer" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <button onClick={onClose} className="absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20" aria-label="Close image viewer">
        <X />
      </button>
      <img src={src} alt="" className="max-h-[90vh] max-w-full rounded-xl object-contain shadow-2xl" />
    </div>
  );
}