"use client";

import MuxPlayer from "@mux/mux-player-react";

export default function FamilyVideo({
  playbackId,
  aspectRatio = "16 / 9",
}: {
  playbackId: string;
  aspectRatio?: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-navy/10 shadow-sm">
      <MuxPlayer
        playbackId={playbackId}
        metadata={{ video_title: "King of Salt Pools — Family Introduction" }}
        accentColor="#ebab1e"
        style={{ aspectRatio, width: "100%" }}
      />
    </div>
  );
}
