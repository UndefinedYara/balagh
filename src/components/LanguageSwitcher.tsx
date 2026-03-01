import { useTranslation } from "react-i18next";
import { Languages } from "lucide-react";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("i18nextLng", newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="rounded-full bg-black/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/30"
      aria-label="Switch language"
    >
      <Languages className="h-5 w-5" />
    </button>
  );
}
