"use client";
import React from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import useTranslation from "../hooks/useTranslation";

export default function Navigation() {
  const { t, lang, setLang, languages } = useTranslation();
  return (
    <nav className="nav">
      <div className="brand">
        {t("brand")} <span className="badge">{t("tag")}</span>
      </div>
      <LanguageSwitcher current={lang} onChange={setLang} options={languages} />
    </nav>
  );
}
