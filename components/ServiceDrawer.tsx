// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { serviceCategories } from "@/data/serviceCategories";

// export default function ServicesDrawer() {
//   const [activeCategory, setActiveCategory] = useState(serviceCategories[0]);

//   return (
//     <div className="absolute left-0 right-0 top-full bg-white shadow-xl border-t z-40">
//       <div className="max-w-6xl mx-auto px-10 py-10 grid grid-cols-4 gap-8">

//         {/* LEFT: Categories */}
//         <div className="col-span-1 border-r">
//           <ul className="space-y-2">
//             {serviceCategories.map(category => (
//               <li
//                 key={category.id}
//                 onMouseEnter={() => setActiveCategory(category)}
//                 className={`cursor-pointer px-4 py-2 rounded-lg transition
//                   ${
//                     activeCategory.id === category.id
//                       ? "bg-[#00416a]/10 text-[#00416a] font-semibold"
//                       : "text-gray-700 hover:bg-gray-100"
//                   }`}
//               >
//                 {category.category}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* RIGHT: Services */}
//         <div className="col-span-3">
//           <h3 className="text-lg font-semibold text-[#00416a] mb-4">
//             {activeCategory.category}
//           </h3>

//           <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
//             {activeCategory.services.map(service => (
//               <li key={service.slug}>
//                 <Link
//                   href={`/services/${activeCategory.id}/${service.slug}`}
//                   className="block text-gray-700 hover:text-[#00416a] transition"
//                 >
//                   {service.title}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//       </div>
//     </div>
//   );
// }
import Link from "next/link";
import { ServiceCategory } from "@/types/serviceTypes";

export default function ServicesDrawer({
  category,
}: {
  category: ServiceCategory;
}) {
  return (
    <div className="absolute left-0 top-full z-50 mt-4 w-72 rounded-2xl bg-white shadow-xl ring-1 ring-gray-200">
      <ul className="py-4">
        {category.services.map((service) => (
          <li key={service.slug}>
            <Link
              href={`/services/${category.slug}/${service.slug}`}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#00416a]"
            >
              {service.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
