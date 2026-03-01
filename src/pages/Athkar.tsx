import {
  BookOpen,
  Compass,
  Moon,
  HandHeart,
  Clock,
  Calendar,
  Star,
} from "lucide-react";

const tools = [
  {
    name: "Quran Reader",
    desc: "Read with translations & tafsir",
    icon: BookOpen,
  },
  { name: "Prayer Times", desc: "Accurate times & reminders", icon: Clock },
  { name: "Qibla Compass", desc: "Find the direction of Qibla", icon: Compass },
  { name: "Athkar", desc: "Morning & evening remembrance", icon: Moon },
  {
    name: "Dua Collection",
    desc: "Supplications for every occasion",
    icon: HandHeart,
  },
  { name: "Hijri Calendar", desc: "Islamic date & events", icon: Calendar },
  { name: "Tasbih Counter", desc: "Digital counter for dhikr", icon: Star },
];

export function Athkar() {
  return (
    <div className="min-h-screen bg-background px-5 pb-24 pt-12">
      <h1 className="font-display text-2xl font-bold text-foreground mb-1">
        Worship Tools
      </h1>
      <p className="text-sm text-muted-foreground mb-6">
        Your spiritual toolkit
      </p>
      <div className="space-y-3">
        {tools.map((t) => (
          <button
            key={t.name}
            className="flex w-full items-center gap-4 rounded-xl bg-card p-4 shadow-card text-left transition-transform hover:scale-[1.01] active:scale-[0.99]"
          >
            <div className="rounded-full bg-primary/10 p-3 text-primary">
              <t.icon className="h-5 w-5" />
            </div>
            <div>
              <p className="font-display text-sm font-semibold text-foreground">
                {t.name}
              </p>
              <p className="text-xs text-muted-foreground">{t.desc}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
