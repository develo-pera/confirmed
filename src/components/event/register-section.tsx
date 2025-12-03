import { ArrowUpRightIcon } from "lucide-react";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { cn } from "@/lib/utils";

const RegisterSection = () => {
  return (
    <div className={cn(
      // "p-5 rounded-sm order-1 sm:order-2 mt-5 sm:mt-15 sm:sticky sm:bottom-2",
      "p-5 rounded-sm order-1 order-2 mt-5 sm:mt-10 sticky bottom-2",
      "bg-[#e9e9e9] dark:bg-[#161616] rounded-sm flex flex-col justify-between cursor-pointer",
      "bg-gradient-to-b from-[#e9e9e9] to-[#dddddd] dark:from-[#161616] dark:to-[#222]",
    )}>
      <p className="text-foreground/70 text-sm">This event is free to attend, but you need to stake $10 to secure your spot.</p>
      <p className="text-sm flex items-center gap-1 mt-2">Learn more about how staking works <ArrowUpRightIcon className="w-4 h-4" /></p>
      <RainbowButton className="mt-5">
        Register
      </RainbowButton>
    </div>
  );
}

export default RegisterSection;