import Image, { StaticImageData } from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  image: StaticImageData;
}

export default function ServiceCard({
  title,
  description,
  image,
}: ServiceCardProps) {
  return (
    <article className="bg-[#00416a] text-white rounded-2xl shadow-md p-5 hover:shadow-xl transition flex flex-col gap-3">
      
      {/* Header: Image + Title */}
      <header className="flex items-center gap-3">
        <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
          <Image
            src={image}
            alt={`${title} service by Taxvio`}
            width={40}
            height={40}
            className="object-contain"
            loading="lazy"
          />
        </div>

        <h3 className="text-lg md:text-xl font-semibold leading-snug">
          {title}
        </h3>
      </header>

      {/* Description */}
      <p className="text-sm md:text-base text-white/90 leading-relaxed">
        {description}
      </p>
    </article>
  );
}
