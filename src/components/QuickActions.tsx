import { Compass, Moon, BookOpen, HandHeart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { PrayerBeads } from "./ui/prayer-beads";

export function QuickActions() {
  const { t } = useTranslation();
  const actions = [
    {
      label: t("quick_action.msbha"),
      icon: PrayerBeads,
      path: "/msbha",
      color: "bg-primary/10 text-primary",
      background: "bg-blue-500/30",
    },

    {
      label: t("quick_action.qibla"),
      icon: Compass,
      path: "/qibla",
      color: "bg-secondary/10 text-secondary",
      background: "bg-red-500/20",
    },
    {
      label: t("quick_action.athkar"),
      icon: BookOpen,
      path: "/athkar",
      color: "bg-accent/20 text-accent-foreground",
      background: "bg-orange-500/20",
    },
    {
      label: t("quick_action.duaa"),
      icon: HandHeart,
      path: "/duaa",
      color: "bg-primary/10 text-primary",
      background: "bg-primary/20",
    },
  ];
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-4 gap-3">
      {actions.map((a) => (
        <button
          key={a.label}
          onClick={() => navigate(a.path)}
          className={`flex flex-col items-center gap-2 p-2 shadow-card transition-transform hover:scale-105 active:scale-95 `}
        >
          <div className={`rounded-full p-2.5 ${a.background} ${a.color}`}>
            <a.icon className="h-5 w-5" />
          </div>
          <span className="text-xs font-medium text-primary">{a.label}</span>
        </button>
      ))}
    </div>
  );
}

export default QuickActions;
