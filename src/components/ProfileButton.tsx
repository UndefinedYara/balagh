import { User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function ProfileButton() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <button
      onClick={() => navigate("/profile")}
      className="rounded-full bg-black/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/30"
      aria-label={t("profile")}
    >
      <User className="h-5 w-5" />
    </button>
  );
}
