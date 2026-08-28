"use client";

import { useState } from "react";
import { initials, relativeTime } from "@/lib/format";
import { StarIcon } from "@/components/icons";
import type { JandyReview } from "@/lib/jandy-truclear-reviews";

export default function ReviewCard({ name, rating, comment, date }: JandyReview) {
  const [expanded, setExpanded] = useState(false);
  const isLong = comment.length > 180;

  return (
    <div className="rounded-xl border border-navy/10 bg-sand p-6">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">

            {initials(name)}
          </div>
          <div>
            <p className="text-sm font-bold text-navy">{name}</p>
            <p className="text-xs text-navy/50">{relativeTime(date)}</p>
          </div>
        </div>
        <span className="shrink-0 rounded-full bg-gold/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-gold-dark">
          TruClear
        </span>
      </div>

      <div className="mt-3 flex gap-0.5 text-gold">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon
            key={i}
            className={`size-4 ${i < rating ? "text-gold" : "text-navy/15"}`}
          />
        ))}
      </div>

      <p className={`mt-3 text-sm leading-relaxed text-navy/80 ${!expanded && isLong ? "line-clamp-4" : ""}`}>
        {comment}
      </p>
      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-2 text-xs font-bold uppercase tracking-wide text-gold-dark hover:text-navy transition-colors"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
}
