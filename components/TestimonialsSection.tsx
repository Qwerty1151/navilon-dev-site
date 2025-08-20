"use client";
import React from "react";
import useTranslation from "../hooks/useTranslation";

export default function TestimonialsSection() {
  const { t } = useTranslation();
  const items = [
    "“Great team. Delivered on time.”",
    "“Strong engineering and communication.”",
    "“They own the result.”"
  ];
  return (
    <section style={{padding:"32px 0"}}>
      <h2 style={{marginBottom:16}}>{t("testimonials.title")}</h2>
      <div className="grid">
        {items.map((txt, i) => (
          <div key={i} className="card">{txt}</div>
        ))}
      </div>
    </section>
  );
}
