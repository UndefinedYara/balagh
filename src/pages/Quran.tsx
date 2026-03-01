export function Quran() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Quran Reader</h1>
      <p className="text-muted-foreground mb-6">
        Read the Quran with translations and tafsir.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-lg bg-card p-4 shadow-card">
          <h2 className="text-lg font-semibold mb-2">Surah Al-Fatiha</h2>
          <p className="text-sm text-muted-foreground mb-3">
            The opening chapter of the Quran, recited in every prayer.
          </p>
          <button className="text-primary hover:underline">
            Read with Tafsir
          </button>
        </div>
        <div className="rounded-lg bg-card p-4 shadow-card">
          <h2 className="text-lg font-semibold mb-2">Ayat Al-Kursi</h2>{" "}
          <p className="text-sm text-muted-foreground mb-3">
            The most powerful verse in the Quran, known for its protection and
            blessings.
          </p>
          <button className="text-primary hover:underline">
            Read with Tafsir
          </button>
        </div>
      </div>
    </div>
  );
}
