import { Separator } from "../ui/separator";

const EventSidebarTitle = ({ title }: { title: string }) => {
  return (
    <>
      <p className="text-sm font-semibold text-foreground/50">{title}</p>
      <Separator className="mt-2 mb-6 bg-foreground/30" />
    </>
  );
}

export default EventSidebarTitle;