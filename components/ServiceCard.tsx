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
    <div className="bg-[#00416a] text-white rounded-2xl shadow-md p-4 hover:shadow-lg transition flex flex-col gap-2">
      
      {/* First line: Image + Title */}
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
          <Image
            src={image}
            alt={title}
            width={38}
            height={38}
            className="object-contain"
            priority={false}
          />
        </div>
        <h3 className="text-lg md:text-xl font-semibold ">
          {title}
        </h3>
      </div>

      {/* Second line: Description */}
      <p className="text-sm md:text-base ">
        {description}
      </p>
    </div>
  );
}
