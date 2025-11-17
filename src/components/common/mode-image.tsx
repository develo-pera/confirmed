"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Image, { ImageProps } from "next/image";

const ModeImage = ({ image, imageDark, alt, ...props }: { image: string, imageDark: string, alt: string } & Omit<ImageProps, "src" | "alt">) => {
  const { theme } = useTheme();

  if (theme === "dark") {
    return (
      <Image {...props} className={cn("w-auto", props.className)} src={imageDark} alt={alt} /> // TODO: fix hardcoded width and height
    );
  }

  return (
    <div>
      <Image {...props} className={cn("w-auto", props.className)} src={image} alt={alt} /> {/* TODO: fix hardcoded width and height */}
    </div>
  );
}

export default ModeImage;