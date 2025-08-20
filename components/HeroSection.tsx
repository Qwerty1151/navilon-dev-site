"use client";
import React from "react";
import useTranslation from "../hooks/useTranslation";

export default function HeroSection() {
  const { t } = useTranslation();
  return (
    <section className="hero">
      <h1>{t("hero.title")}</h1>
      <p>{t("hero.subtitle")}</p>
      <button className="btn">{t("cta.contact")}</button>
    </section>
  );
}
