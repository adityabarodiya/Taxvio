// app/city/gst-services/CitySearch.tsx
"use client";

import { useEffect, useState } from "react";

/**
 * Filters the server-rendered directory (#city-directory) in the browser.
 * Leaf links carry data-name (sub-district + district + state, lowercase);
 * wrappers carry data-group. Nothing is re-rendered, so all links stay in the HTML for SEO.
 */
export default function CitySearch() {
  const [q, setQ] = useState("");
  const [shown, setShown] = useState<number | null>(null);

  useEffect(() => {
    const root = document.getElementById("city-directory");
    if (!root) return;
    const term = q.trim().toLowerCase();

    let visible = 0;
    root.querySelectorAll<HTMLElement>("[data-name]").forEach((el) => {
      const match = term === "" || (el.dataset.name ?? "").includes(term);
      el.style.display = match ? "" : "none";
      if (match) visible++;
    });

    // groups (districts first, then states) hide when nothing inside matches
    const groups = Array.from(root.querySelectorAll<HTMLElement>("[data-group]")).reverse();
    groups.forEach((g) => {
      const has = term === "" || g.querySelector('[data-name]:not([style*="display: none"])');
      g.style.display = has ? "" : "none";
      if (g instanceof HTMLDetailsElement) g.open = term !== "" && !!has;
    });

    setShown(term === "" ? null : visible);
  }, [q]);

  return (
    <div className="mx-auto w-full max-w-xl">
      <label htmlFor="city-search" className="sr-only">
        Search your district or tehsil
      </label>
      <input
        id="city-search"
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search your district, tehsil, taluka or mandal"
        className="w-full rounded-lg border border-white/30 bg-white px-4 py-3 text-base text-slate-900 shadow-sm outline-none focus:ring-2 focus:ring-sky-300"
        autoComplete="off"
      />
      <p className="mt-2 min-h-5 text-sm text-sky-100" aria-live="polite">
        {shown === null ? "" : shown === 0 ? "No match found. Check the spelling or try the district name." : `${shown} locations found`}
      </p>
    </div>
  );
}