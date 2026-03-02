import { useMemo } from "react";
import { useTranslation } from "react-i18next";

export function CurrentDateCard() {
  const { i18n } = useTranslation();
  const locale = i18n.language;

  const { dayOfWeek, greg, hijri } = useMemo(() => {
    const date = new Date();
    const format = (options: Intl.DateTimeFormatOptions, calendar?: string) =>
      new Intl.DateTimeFormat(locale, { ...options, calendar }).format(date);

    return {
      dayOfWeek: format({ weekday: "long" }),
      greg: {
        month: format({ month: "long" }),
        day: format({ day: "numeric" }),
        year: format({ year: "numeric" }),
      },
      hijri: {
        month: format({ month: "long" }, "islamic-umalqura"),
        day: format({ day: "numeric" }, "islamic-umalqura"),
        year: format({ year: "numeric" }, "islamic-umalqura")
          .replace(/AH|هـ|ه/g, "")
          .trim(),
      },
    };
  }, [locale]);

  return (
    <div className="flex flex-col rounded-xl bg-card p-5 shadow-card text-center">
      <h2 className="text-2xl text-primary mb-4 border-b border-border pb-2">
        {dayOfWeek}
      </h2>

      <div className="flex items-stretch justify-center divide-x divide-border rtl:divide-x-reverse">
        <div className="flex flex-1 flex-col items-center justify-center space-y-1 px-2">
          <span className="text-sm font-medium text-primary">
            {hijri.month}
          </span>
          <span className="text-3xl font-bold text-foreground ">
            {hijri.day}
          </span>

          <span className="text-sm text-muted-foreground border-t border-border">
            {hijri.year}
          </span>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center space-y-1 px-2">
          <span className="text-sm font-medium text-primary">{greg.month}</span>
          <span className="text-3xl font-bold text-foreground">{greg.day}</span>
          <span className="text-sm text-muted-foreground border-t border-border">
            {greg.year}
          </span>
        </div>
      </div>
    </div>
  );
}
