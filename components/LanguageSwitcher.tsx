"use client";
import React from "react";

type Props = {
  current?: string;
  onChange?: (lang: string) => void;
  className?: string;
};

const langs = ["en","ru","de","fr","es","pl","zh"];

export function LanguageSwitcher({ current = "en", onChange, className }: Props) {
  return (
    <select
      aria-label="Language"
      value={current}
      onChange={(e) => onChange?.(e.target.value)}
      className={className ?? ""}
    >
      {langs.map((l) => (
        <option key={l} value={l}>
          {l.toUpperCase()}
        </option>
      ))}
    </select>
  );
}

export default LanguageSwitcher;
