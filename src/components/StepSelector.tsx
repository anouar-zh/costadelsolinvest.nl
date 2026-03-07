"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { TileOption, getLabelForSelection, getDescriptionForTile, Selections } from "@/data/taxonomy";
import { useI18n } from "@/i18n/context";

interface StepSelectorProps {
  title: string;
  subtitle: string;
  options: TileOption[];
  selectedId?: string;
  onSelect: (id: string) => void;
  onBack?: () => void;
  stepIndex: number;
  selections: Selections;
}

export default function StepSelector({
  title,
  subtitle,
  options,
  onSelect,
  onBack,
  stepIndex,
  selections,
}: StepSelectorProps) {
  const { t } = useI18n();
  const [flippedTileId, setFlippedTileId] = useState<string | null>(null);

  // Reset flip state when step changes
  useEffect(() => {
    setFlippedTileId(null);
  }, [stepIndex]);

  const handleFlip = (tileId: string) => {
    setFlippedTileId((prev) => (prev === tileId ? null : tileId));
  };

  return (
    <div className="px-5 py-3 w-full flex-1 flex flex-col min-h-0">
      <div className="metro-slide-in mb-3 shrink-0">
        <h2 className="text-[24px] font-extralight text-metro-warm leading-tight tracking-tight">
          {title}
        </h2>
        <p className="text-[12px] text-metro-muted mt-0.5">{subtitle}</p>
      </div>

      <div
        className="grid grid-cols-2 gap-[6px] flex-1 min-h-0"
        style={{ gridAutoRows: "minmax(0, 160px)", alignContent: "center", gridAutoFlow: "dense" }}
      >
        {options.map((option, i) => {
          const isWide = option.size === "wide";
          const label = getLabelForSelection(stepIndex, option.id, selections, t);
          const description = getDescriptionForTile(option.id, stepIndex, selections, t);
          const isFlipped = flippedTileId === option.id;

          return (
            <div
              key={option.id}
              className={`metro-slide-in metro-tile-${i} ${isWide ? "col-span-2" : ""} min-h-0`}
            >
              <div className="tile-perspective">
                <div className={`tile-flipper ${isFlipped ? "is-flipped" : ""}`}>
                  {/* === FRONT FACE === */}
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => onSelect(option.id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        onSelect(option.id);
                      }
                    }}
                    className="tile-face tile-front metro-tile relative flex flex-col items-start justify-end p-3 text-left cursor-pointer overflow-hidden"
                  >
                    {/* Background photo */}
                    {option.image && (
                      <Image
                        src={option.image}
                        alt=""
                        fill
                        className="object-cover object-center"
                        sizes={isWide ? "(max-width: 768px) 100vw, 400px" : "(max-width: 768px) 50vw, 200px"}
                      />
                    )}

                    {/* Color overlay */}
                    <div
                      className="absolute inset-0"
                      style={{ backgroundColor: option.image ? `${option.color}A6` : option.color }}
                    />

                    {/* Bottom gradient for text readability */}
                    {option.image && (
                      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent" />
                    )}

                    <span className="absolute top-2 right-3 text-[28px] opacity-30 select-none pointer-events-none leading-none z-10">
                      {option.emoji}
                    </span>
                    <span className="relative z-10 text-[13px] font-semibold text-white leading-snug pr-8 metro-tile-text">
                      {label}
                    </span>

                    {/* Info flip button */}
                    <button
                      aria-label={t.tiles.moreInfo}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleFlip(option.id);
                      }}
                      className="info-btn"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="16" x2="12" y2="12" />
                        <line x1="12" y1="8" x2="12.01" y2="8" />
                      </svg>
                    </button>
                  </div>

                  {/* === BACK FACE === */}
                  <div
                    className="tile-face tile-back flex flex-col p-3 overflow-hidden"
                    style={{ background: `linear-gradient(135deg, ${option.color}E6, ${option.color}99)` }}
                  >
                    <p className="text-[11px] leading-snug text-white/90 overflow-hidden metro-tile-text min-h-0 flex-1">
                      {description}
                    </p>
                    <div className="flex items-center justify-between mt-1.5 shrink-0">
                      <button
                        aria-label="Close"
                        onClick={() => setFlippedTileId(null)}
                        className="w-6 h-6 rounded-full bg-black/30 flex items-center justify-center cursor-pointer border border-white/15 text-white/70 hover:bg-black/50 shrink-0"
                      >
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                      </button>
                      <button
                        onClick={() => {
                          setFlippedTileId(null);
                          onSelect(option.id);
                        }}
                        className="text-[11px] font-semibold text-white bg-white/15 px-2.5 py-1 hover:bg-white/25 transition-colors shrink-0"
                      >
                        {t.tiles.selectThis} →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {onBack && (
        <button
          onClick={onBack}
          className="mt-3 text-[12px] text-metro-muted hover:text-metro-warm transition-colors flex items-center gap-2 self-start shrink-0"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {t.steps.back}
        </button>
      )}
    </div>
  );
}
