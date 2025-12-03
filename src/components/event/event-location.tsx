import { MapPinIcon } from "lucide-react";

const EventLocation = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex flex-col h-12 w-12 rounded-lg text-center font-semibold text-xs justify-center items-center flex-shrink-0 bg-[var(--element-background)]">
        <MapPinIcon className="w-4 h-4 text-foreground/50" />
      </div>
      <div className="text-sm">
        <p>Novi Beograd, Savski Nasip</p>
        <p className="text-foreground/50">Serbia</p>
      </div>
    </div>
  );
}

export default EventLocation;