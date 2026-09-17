"use client";

import { useEffect } from "react";
import { XIcon } from "@/components/icons";

export default function Toast({
  message,
  onDismiss,
}: {
  message: string;
  onDismiss: () => void;
}) {
  useEffect(() => {
    const timer = setTimeout(onDismiss, 5000);
    return () => clearTimeout(timer);
  }, [onDismiss]);

  return (
    <div className="fixed inset-x-4 bottom-6 z-50 flex justify-center sm:inset-x-auto sm:right-6">
      <div className="flex items-start gap-3 rounded-lg border border-red-200 bg-white px-4 py-3.5 shadow-lg sm:max-w-sm">
        <p className="text-sm font-semibold text-red-600">{message}</p>
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Dismiss"
          className="shrink-0 text-navy/40 hover:text-navy"
        >
          <XIcon className="size-4" />
        </button>
      </div>
    </div>
  );
}
