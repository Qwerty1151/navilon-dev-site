"use client";
import React from "react";
import useTranslation from "../hooks/useTranslation";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div>{t("footer.copy")}</div>
    </footer>
  );
}
