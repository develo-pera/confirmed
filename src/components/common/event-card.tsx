import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const EventCard = ({
  image,
  title,
  organizer,
  startTime,
  endTime,
  address,
  city,
  stakeAmount,
  guests,
  className,
}: {
  image: string,
  title: string,
  organizer: string, // Type organizer?
  startTime: string,
  endTime: string,
  address: string,
  city: string,
  stakeAmount: number,
  guests: number[],
  className: string,
}) => {
  return (
    <Card className={cn(
      "p-3 bg-[#161616] rounded-sm flex flex-col justify-between cursor-pointer",
      "bg-gradient-to-b from-muted/50 to-muted/10",
      "hover:from-muted/60 hover:to-muted/20",
      "transition-colors duration-300",
      className
    )}>
      <div>
        <img src={image} alt="" />
        <p className="mt-5 font-semibold text-2xl">{title}</p>
        <p className="text-[--textcolor]">{organizer}</p>
      </div>

      <div>
        <div className="flex gap-2 items-center">
          {/* {
            guests?.length > 0 ? (
              <>
                <div className="flex">
                  <div className="w-[30px] h-[30px] rounded-full bg-pink-600" />
                  <div className="w-[30px] h-[30px] rounded-full bg-emerald-600 ml-[-15px]" />
                  <div className="w-[30px] h-[30px] rounded-full bg-white ml-[-15px]" />
                </div>
                <p>{guests.length}</p>
              </>
            ) : (
              <> */}
          <div className="flex">
            {/* TODO: this is hardcoded for now, we need to get the guests from the API */}
            <div className="w-[30px] h-[30px] rounded-full bg-pink-600" />
            <div className="w-[30px] h-[30px] rounded-full bg-emerald-600 ml-[-15px]" />
            <div className="w-[30px] h-[30px] rounded-full bg-white ml-[-15px]" />
          </div>
          <p>{guests?.length || "0 guests"}</p>
          {/* </>
            )
          } */}

        </div>

        <div className="bg-[#222] p-2 mt-4 text-sm text-foreground/70">
          <p>{startTime} {endTime && ` - ${endTime}`}</p>
          <p>{address} {city && `, ${city}`}</p>
          <p>Stake ${stakeAmount} to commit</p>
        </div>
      </div>
    </Card>
  );
}

export default EventCard;