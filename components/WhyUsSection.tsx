"use client";
import React from "react";
import useTranslation from "../hooks/useTranslation";

export default function WhyUsSection() {
  const { t } = useTranslation();
  const items = [t("why.1"), t("why.2"), t("why.3")];
  return (
    <section style={{padding:"32px 0"}}>
      <h2 style={{marginBottom:16}}>{t("why.title")}</h2>
      <div className="grid">
        {items.map((txt, i) => (
          <div key={i} className="card">{txt}</div>
        ))}
      </div>
    </section>
  );
}
