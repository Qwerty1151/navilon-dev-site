"use client";

import { useState, useEffect, useCallback } from "react";

/**
 * Простейший i18n-хук.
 * - Хранит выбранный язык в localStorage
 * - Возвращает t(key) и setLang(lang)
 * - Если перевода нет — возвращает ключ как fallback
 *
 * Расширяйте TRANSLATIONS по мере наполнения сайта.
 */
const TRANSLATIONS: Record<string, Record<string, string>> = {
  en: {
    // "hero.title": "Navilon Dev — Navigating Innovation",
  },
  ru: {
    // "hero.title": "Navilon Dev — Навигация в инновациях",
  },
};

export function useTranslation() {
  const [lang, setLangState] = useState<keyof typeof TRANSLATIONS>("en");

  // Читаем язык из localStorage или из браузера
  useEffect(() => {
    try {
      const saved = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
      if (saved && saved in TRANSLATIONS) {
        setLangState(saved as keyof typeof TRANSLATIONS);
      } else if (typeof navigator !== "undefined") {
        const guess = navigator.language.slice(0, 2).toLowerCase();
        if (guess in TRANSLATIONS) setLangState(guess as keyof typeof TRANSLATIONS);
      }
    } catch {
      /* no-op */
    }
  }, []);

  const setLang = useCallback((l: string) => {
    const key = l.toLowerCase();
    setLangState((key in TRANSLATIONS ? key : "en") as keyof typeof TRANSLATIONS);
    try {
      localStorage.setItem("lang", key);
    } catch {
      /* no-op */
    }
  }, []);

  const t = useCallback(
    (key: string) => {
      const table = TRANSLATIONS[lang] || {};
      return table[key] ?? (TRANSLATIONS.en?.[key] ?? key);
    },
    [lang]
  );

  return { t, lang, setLang };
}

export default useTranslation;
