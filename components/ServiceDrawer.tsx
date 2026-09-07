"use client";

import Link from "next/link";
import { ChevronRight, Sparkles } from "lucide-react";

// Confirmed against your actual serviceCategories data: each service uses
// `title` as its label field. `getLabel` still checks `name` first only as a
// harmless safety net — it has no effect since your data doesn't set `name`.
export interface ServiceItem {
  slug: string;
  name?: string;
  title?: string;
  description?: string;
  popular?: boolean;
}

export interface ServiceCategoryType {
  slug: string;
  category: string;
  services: ServiceItem[];
}

const SERVICES_PER_COLUMN = 12;

const getLabel = (service: ServiceItem) => service.name ?? service.title ?? service.slug;

export default function ServicesDrawer({ category }: { category: ServiceCategoryType }) {
  // Chunk services into columns of at most 12. A category with 28 services
  // renders 3 columns (12 / 12 / 4); a category with 6 renders a single column.
  const columns: ServiceItem[][] = [];
  for (let i = 0; i < category.services.length; i += SERVICES_PER_COLUMN) {
    columns.push(category.services.slice(i, i + SERVICES_PER_COLUMN));
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_20px_60px_-15px_rgba(0,65,106,0.25)] overflow-hidden max-w-[95vw]">
      {/* Header */}
      <div className="flex items-center justify-between gap-4 px-5 py-3.5 bg-gradient-to-r from-[#00416a]/[0.04] to-transparent border-b border-gray-100">
        <div className="min-w-0">
          <p className="text-[10px] font-black uppercase tracking-widest text-[#00416a]/60">
            {category.category}
          </p>
          <p className="text-xs text-gray-400 mt-0.5">
            {category.services.length} service{category.services.length !== 1 ? "s" : ""} available
          </p>
        </div>
        <Link
          href={`/serviceslist/${category.slug}`}
          className="flex items-center gap-1 text-xs font-bold text-[#00416a] hover:gap-1.5 transition-all shrink-0 focus-visible:ring-2 focus-visible:ring-[#00416a]/30 focus-visible:outline-none rounded"
        >
          View all
          <ChevronRight size={12} />
        </Link>
      </div>

      {/* Columns — overflow past 12 services spills into the next column */}
      <div className="flex divide-x divide-gray-100 max-h-[70vh] overflow-y-auto overflow-x-auto">
        {columns.map((col, colIndex) => (
          <ul key={colIndex} className="w-64 py-2 shrink-0">
            {col.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/serviceslist/${category.slug}/${service.slug}`}
                  className="group flex items-center justify-between gap-2 px-5 py-2.5 text-sm text-gray-600 hover:bg-[#00416a]/[0.05] hover:text-[#00416a] transition-colors focus-visible:bg-[#00416a]/[0.05] focus-visible:text-[#00416a] focus-visible:outline-none"
                >
                  <span className="flex items-center gap-2 min-w-0">
                    <span className="truncate font-medium">{getLabel(service)}</span>
                    {service.popular && (
                      <span className="shrink-0 flex items-center gap-0.5 text-[9px] font-bold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded-full">
                        <Sparkles size={8} />
                        Popular
                      </span>
                    )}
                  </span>
                  <ChevronRight
                    size={13}
                    className="shrink-0 text-gray-300 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all motion-reduce:transition-none"
                  />
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}