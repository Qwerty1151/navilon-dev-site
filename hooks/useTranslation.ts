"use client";

import { useState, useEffect, useCallback } from "react";

const TRANSLATIONS: Record<string, Record<string, string>> = {
  en: {
    "brand": "Navilon Dev",
    "tag": "DEV",
    "hero.title": "Navigating Innovation in Software, Games & AI",
    "hero.subtitle": "We build products and provide services for ambitious companies.",
    "cta.contact": "Contact us",
    "services.title": "What we do",
    "services.dev": "Custom Software Development",
    "services.games": "Games & Interactive",
    "services.ai": "AI/ML & Data",
    "services.consult": "Consulting & Integrations",
    "why.title": "Why choose us",
    "why.1": "Senior engineers & hands-on leadership",
    "why.2": "Predictable delivery & transparent process",
    "why.3": "Security & performance by default",
    "testimonials.title": "What clients say",
    "footer.copy": "© Navilon Dev. All rights reserved."
  },
  ru: {
    "brand": "Navilon Dev",
    "tag": "DEV",
    "hero.title": "Инновации в разработке ПО, играх и ИИ",
    "hero.subtitle": "Создаём продукты и оказываем услуги для амбициозных компаний.",
    "cta.contact": "Связаться",
    "services.title": "Что мы делаем",
    "services.dev": "Разработка программного обеспечения",
    "services.games": "Игры и интерактив",
    "services.ai": "ИИ/МЛ и данные",
    "services.consult": "Консалтинг и интеграции",
    "why.title": "Почему мы",
    "why.1": "Синьоры и вовлечённое лидерство",
    "why.2": "Предсказуемые сроки и прозрачность",
    "why.3": "Безопасность и производительность по умолчанию",
    "testimonials.title": "Отзывы",
    "footer.copy": "© Navilon Dev. Все права защищены."
  },
  de: {}, fr: {}, es: {}, pt: {}, zh: {}
};

export function useTranslation() {
  const [lang, setLangState] = useState<keyof typeof TRANSLATIONS>("en");

  useEffect(() => {
    try {
      const saved = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
      if (saved && saved in TRANSLATIONS) {
        setLangState(saved as keyof typeof TRANSLATIONS);
      } else if (typeof navigator !== "undefined") {
        const guess = navigator.language.slice(0,2).toLowerCase();
        if (guess in TRANSLATIONS) setLangState(guess as keyof typeof TRANSLATIONS);
      }
    } catch {}
  }, []);

  const setLang = useCallback((l: string) => {
    const key = l.toLowerCase();
    setLangState((key in TRANSLATIONS ? key : "en") as keyof typeof TRANSLATIONS);
    try { localStorage.setItem("lang", key); } catch {}
  }, []);

  const t = useCallback((key: string) => {
    const table = TRANSLATIONS[lang] || {};
    return table[key] ?? (TRANSLATIONS.en?.[key] ?? key);
  }, [lang]);

  return { t, lang, setLang, languages: Object.keys(TRANSLATIONS) };
}

export default useTranslation;
