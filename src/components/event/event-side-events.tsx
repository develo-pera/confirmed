import { ArrowDownLeftIcon } from "lucide-react";

const EventSideEvents = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex flex-col h-12 w-12 rounded-lg text-center text-xs justify-center items-center flex-shrink-0 bg-[var(--element-background)]">
        {/* <MapPinIcon className="w-4 h-4 text-foreground/50" /> */}
        2573
      </div>
      <div className="text-sm">
        <p>Confirmed side events</p>
        <p className="text-foreground/50 flex items-center gap-1"><ArrowDownLeftIcon className="w-4 h-4 mt-0.3" /> See all side events </p>
      </div>
    </div>
  );
}

export default EventSideEvents;