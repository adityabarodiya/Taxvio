"use client";

// app/city/gst-services/StateRail.tsx

import { useEffect, useRef, useState } from "react";

type S = { slug: string; name: string; districts: number };

const stateDetails = () => Array.from(document.querySelectorAll<HTMLDetailsElement>("#city-directory details[data-state]"));

function openState(slug: string, scroll = true) {
  const el = document.getElementById(slug) as HTMLDetailsElement | null;
  if (!el) return;
  el.open = true;
  if (scroll) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 60);
}

export default function StateRail({ states }: { states: S[] }) {
  const [active, setActive] = useState<string>("");
  const [allOpen, setAllOpen] = useState(false);
  const railRef = useRef<HTMLDivElement>(null);

  // open the state named in the URL hash, and when the hash changes
  useEffect(() => {
    const fromHash = () => {
      const h = window.location.hash.slice(1);
      if (h && states.some((s) => s.slug === h)) openState(h);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    // state cards higher on the page: open the section on click
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>("a[data-open-state]");
      if (a) openState(a.dataset.openState as string, false);
    };
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("hashchange", fromHash);
      document.removeEventListener("click", onClick);
    };
  }, [states]);

  // scrollspy
  useEffect(() => {
    const els = stateDetails();
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // keep the active chip in view
  useEffect(() => {
    const rail = railRef.current;
    const chip = rail?.querySelector<HTMLElement>(`[data-chip="${active}"]`);
    if (rail && chip) rail.scrollTo({ left: chip.offsetLeft - rail.clientWidth / 2 + chip.clientWidth / 2, behavior: "smooth" });
  }, [active]);

  const toggleAll = () => {
    const next = !allOpen;
    stateDetails().forEach((d) => (d.open = next));
    setAllOpen(next);
  };

  return (
    <div className="sticky top-[72px] z-40 border-y border-gray-200/80 bg-white/85 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-2.5 sm:px-6">
        <div ref={railRef} className="relative flex flex-1 items-center gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" role="navigation" aria-label="Jump to state">
          {states.map((s) => (
            <a
              key={s.slug}
              data-chip={s.slug}
              href={`#${s.slug}`}
              onClick={() => openState(s.slug, false)}
              className={`flex-shrink-0 whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-semibold transition-all ${
                active === s.slug ? "bg-[#00416a] text-white shadow-md shadow-[#00416a]/25" : "text-[#00416a]/80 hover:bg-[#00416a]/5"
              }`}
            >
              {s.name}
            </a>
          ))}
        </div>
        <button onClick={toggleAll} className="hidden flex-shrink-0 rounded-lg border border-[#00416a]/25 px-3.5 py-2 text-xs font-bold text-[#00416a] transition hover:bg-[#00416a]/5 sm:inline-flex">
          {allOpen ? "Collapse all" : "Expand all"}
        </button>
      </div>
    </div>
  );
}