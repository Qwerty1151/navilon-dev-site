"use client";
import React from "react";
import useTranslation from "../hooks/useTranslation";

export default function ServicesSection() {
  const { t } = useTranslation();
  const items = [
    t("services.dev"),
    t("services.games"),
    t("services.ai"),
    t("services.consult")
  ];
  return (
    <section style={{padding:"32px 0"}}>
      <h2 style={{marginBottom:16}}>{t("services.title")}</h2>
      <div className="grid">
        {items.map((txt, i) => (
          <div key={i} className="card">{txt}</div>
        ))}
      </div>
    </section>
  );
}
