import { BookOpen, Layers, TrendingUp, Search } from "lucide-react";

const categories = [
  { name: "Articles", count: 240, icon: BookOpen },
  { name: "Learning Paths", count: 12, icon: TrendingUp },
  { name: "Islamic Encyclopedia", count: 1800, icon: Layers },
];

const Knowledge = () => {
  return (
    <div className="min-h-screen bg-background px-5 pb-24 pt-12">
      <h1 className="font-display text-2xl font-bold text-foreground mb-1">Knowledge Hub</h1>
      <p className="text-sm text-muted-foreground mb-6">Authentic Islamic learning</p>

      <div className="mb-5 flex items-center gap-2 rounded-xl bg-card px-4 py-3 shadow-card">
        <Search className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">Search articles, topics, scholars...</span>
      </div>

      <div className="space-y-3">
        {categories.map((c) => (
          <div key={c.name} className="flex items-center gap-4 rounded-xl bg-card p-4 shadow-card">
            <div className="rounded-full bg-secondary/10 p-3 text-secondary">
              <c.icon className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <p className="font-display text-sm font-semibold text-foreground">{c.name}</p>
              <p className="text-xs text-muted-foreground">{c.count} items</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Featured Path</p>
        <div className="gradient-spiritual rounded-xl p-5 text-primary-foreground">
          <p className="font-display text-lg font-bold">Foundations of Islam</p>
          <p className="mt-1 text-sm opacity-80">A structured journey from the basics to deeper understanding</p>
          <p className="mt-3 text-xs font-medium opacity-70">12 Modules • Beginner Friendly</p>
        </div>
      </div>
    </div>
  );
};

export default Knowledge;
