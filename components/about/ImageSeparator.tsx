import Image from "next/image";

const ImageSeparator = ({
  src = "/images/logo_zdjecie.jpg",
}: {
  src?: string;
}) => {
  return (
    <div className="relative h-64 mb-16 -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-16 inset-x-0 z-10">
      <Image
        src={src}
        alt="Separator image"
        layout="fill"
        objectFit="cover"
        className="w-full"
      />
    </div>
  );
};

export default ImageSeparator;
