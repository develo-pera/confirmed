"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Image, { ImageProps } from "next/image";

const ModeImage = ({ image, imageDark, alt, ...props }: { image: string, imageDark: string, alt: string } & Omit<ImageProps, "src" | "alt">) => {
  // const { resolvedTheme } = useTheme();

  // if (resolvedTheme === "dark") {
  //   return (
  //     <Image {...props} className={cn("w-auto", props.className)} src={imageDark} alt={alt} />
  //   );
  // }

  // if (resolvedTheme === "light") {
  //   return (
  //     <Image {...props} className={cn("w-auto", props.className)} src={image} alt={alt} />
  //   );
  // }

  // return <div className={`w-[${props.width}px] h-[${props.height}px]`} />;
  // const { image, imageDark, ...rest } = props

  return (
    <>
      <Image {...props} src={image} alt={alt} className={cn("imgLight", props.className)} />
      <Image {...props} src={imageDark} alt={alt} className={cn("imgDark", props.className)} />
    </>
  )
}

export default ModeImage;