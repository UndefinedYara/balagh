import { BookOpen, Flame, Moon, Star, Bookmark, Settings } from "lucide-react";

const stats = [
  { label: "Reading Streak", value: "7 days", icon: Flame },
  { label: "Pages Read", value: "142", icon: BookOpen },
  { label: "Athkar Today", value: "3/5", icon: Moon },
  { label: "Saved Items", value: "24", icon: Bookmark },
];

const MySpace = () => {
  return (
    <div className="min-h-screen bg-background px-5 pb-24 pt-12">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">
            My Space
          </h1>
          <p className="text-sm text-muted-foreground">
            Your spiritual journey
          </p>
        </div>
        <button className="rounded-full bg-card p-2 text-muted-foreground shadow-card">
          <Settings className="h-5 w-5" />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl bg-card p-4 shadow-card">
            <s.icon className="mb-2 h-5 w-5 text-secondary" />
            <p className="font-display text-xl font-bold text-foreground">
              {s.value}
            </p>
            <p className="text-xs text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl bg-card p-5 shadow-card mb-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
          Khatmah Progress
        </p>
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium text-foreground">
            Juz 5 of 30
          </span>
          <span className="text-sm font-semibold text-secondary">17%</span>
        </div>
        <div className="h-2 rounded-full bg-muted overflow-hidden">
          <div
            className="h-full rounded-full gradient-spiritual"
            style={{ width: "17%" }}
          />
        </div>
      </div>

      <div className="rounded-xl bg-card p-5 shadow-card">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
          Weekly Insight
        </p>
        <p className="font-display text-sm italic text-foreground leading-relaxed">
          You've been consistent with your morning azkar this week. Keep it up —
          small deeds done consistently are the most beloved to Allah.
        </p>
      </div>
    </div>
  );
};

export default MySpace;
