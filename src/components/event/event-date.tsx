const EventDate = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex flex-col h-12 w-12 rounded-lg text-center font-semibold text-xs justify-center items-center flex-shrink-0 bg-[var(--element-background)]">
        <span className="text-muted-foreground uppercase font-bold mb-0.5">Feb</span>
        <span className="">3</span>
      </div>
      <div className="text-sm">
        <p>February 3</p>
        <p className="text-foreground/50">Thursday 7:30AM GTM+3</p>
      </div>
    </div>
  );
}

export default EventDate;