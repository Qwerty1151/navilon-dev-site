"use client";
import React from "react";

type Props = { current: string; onChange: (lang: string) => void; options: string[] };
export default function LanguageSwitcher({ current, onChange, options }: Props) {
  return (
    <label style={{display:"inline-flex", gap:8, alignItems:"center"}}>
      <span style={{opacity:.7, fontSize:12}}>Lang</span>
      <select value={current} onChange={e => onChange(e.target.value)}>
        {options.map(l => <option key={l} value={l}>{l}</option>)}
      </select>
    </label>
  );
}
