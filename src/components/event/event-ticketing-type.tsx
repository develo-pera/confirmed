import { DollarSignIcon } from "lucide-react";

const EventTicketingType = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex flex-col h-12 w-12 rounded-lg text-center font-semibold text-xs justify-center items-center flex-shrink-0 bg-[var(--element-background)]">
        <DollarSignIcon className="w-4 h-4 text-foreground/50" />
      </div>
      <div className="text-sm">
        <p>Free to attend, staking required.</p>
      </div>
    </div>
  );
}

export default EventTicketingType;