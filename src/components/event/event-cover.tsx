import { AspectRatio } from "../ui/aspect-ratio";
import Image from "next/image";

const EventCover = ({ image, alt }: { image: string, alt: string }) => {
  return (
    <AspectRatio ratio={16 / 9} className="rounded-sm bg-muted rounded-sm">
      <Image src={image} alt={alt} fill className="rounded-sm w-full h-full object-cover" />
    </AspectRatio>
  );
}

export default EventCover;