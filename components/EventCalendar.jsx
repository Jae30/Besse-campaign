"use client";
import { useState } from "react";
import events from "../data/events.json";
import config from "../data/config.json";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function EventCalendar() {
  const [current, setCurrent] = useState(() => {
    const now = new Date();
    return { month: now.getMonth(), year: now.getFullYear() };
  });

  const firstDay = new Date(current.year, current.month, 1).getDay();
  const daysInMonth = new Date(current.year, current.month + 1, 0).getDate();
  const today = new Date();

  /* parse events into a lookup by date string */
  const eventMap = {};
  events.forEach((e) => {
    const d = new Date(e.date + "T00:00:00");
    const key = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
    if (!eventMap[key]) eventMap[key] = [];
    eventMap[key].push(e);
  });

  const prev = () =>
    setCurrent((c) =>
      c.month === 0
        ? { month: 11, year: c.year - 1 }
        : { month: c.month - 1, year: c.year }
    );
  const next = () =>
    setCurrent((c) =>
      c.month === 11
        ? { month: 0, year: c.year + 1 }
        : { month: c.month + 1, year: c.year }
    );

  const monthLabel = new Date(current.year, current.month).toLocaleString(
    "en-US",
    { month: "long", year: "numeric" }
  );

  /* build grid cells */
  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <section id="events" className="bg-navy text-cream">
      <div className="section">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="h-section">Calendar of Events</h2>
          <p className="mt-4 text-lg opacity-90">
            Be part of the movement. Show up. Get involved. Help us build the future together.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-10">
          {/* CALENDAR */}
          <div className="bg-cream/10 backdrop-blur rounded-xl border border-cream/20 p-6">
            {/* month nav */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={prev}
                className="w-9 h-9 rounded-full bg-cream/10 hover:bg-cream/20 flex items-center justify-center transition"
              >
                ‹
              </button>
              <span className="font-extrabold text-lg">{monthLabel}</span>
              <button
                onClick={next}
                className="w-9 h-9 rounded-full bg-cream/10 hover:bg-cream/20 flex items-center justify-center transition"
              >
                ›
              </button>
            </div>

            {/* day headers */}
            <div className="grid grid-cols-7 gap-1 text-center text-xs font-bold opacity-60 mb-2">
              {DAYS.map((d) => (
                <span key={d}>{d}</span>
              ))}
            </div>

            {/* date grid */}
            <div className="grid grid-cols-7 gap-1 text-center text-sm">
              {cells.map((day, i) => {
                if (day === null) return <span key={`e-${i}`} />;
                const key = `${current.year}-${current.month}-${day}`;
                const hasEvent = !!eventMap[key];
                const isToday =
                  day === today.getDate() &&
                  current.month === today.getMonth() &&
                  current.year === today.getFullYear();

                return (
                  <span
                    key={i}
                    className={`relative py-2 rounded-md transition ${
                      isToday ? "bg-gold text-navy font-extrabold" : ""
                    } ${hasEvent ? "font-bold" : "opacity-70"}`}
                  >
                    {day}
                    {hasEvent && (
                      <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gold rounded-full" />
                    )}
                  </span>
                );
              })}
            </div>

            {/* Notion link */}
            {config.notionCalendarUrl && (
              <a
                href={config.notionCalendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block text-center text-sm font-bold text-gold hover:underline"
              >
                View Full Calendar on Notion →
              </a>
            )}
          </div>

          {/* UPCOMING EVENTS LIST */}
          <div className="space-y-4">
            <h3 className="font-extrabold text-xl mb-2">Upcoming Events</h3>
            {events.map((e) => (
              <div
                key={e.title}
                className="bg-cream/10 backdrop-blur rounded-xl border border-cream/20 p-5"
              >
                <p className="text-sm font-bold text-gold uppercase">
                  {new Date(e.date + "T00:00:00").toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                  })}{" "}
                  · {e.time}
                </p>
                <h4 className="mt-1 text-lg font-extrabold">{e.title}</h4>
                <p className="mt-1 text-sm opacity-80">{e.location}</p>
                <p className="mt-2 text-sm opacity-90">{e.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
