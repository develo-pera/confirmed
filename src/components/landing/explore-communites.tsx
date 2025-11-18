import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const ExploreCommunites = () => {
  return (
    <div className="max-w-6xl w-full mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold mb-5">Communities live on Confirmed</h2>
      <p className="text-foreground/50 max-w-5xl text-balance mb-10">Communities that are growing by doing epic events.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className={cn("border border-foreground/10 rounded-md p-5",
          "bg-gradient-to-b from-muted/50 to-muted/10",
          "hover:from-muted/60 hover:to-muted/20",
          "transition-colors duration-300",
        )}>
          <img className="w-12 h-12" src="/tmp/eth-bgd-sticker.svg" alt="Community 1" />
          <p className="text-foreground/90 mt-3">ETH Belgrade</p>
          <p className="text-foreground/50 text-sm">1000 members</p>
        </div>
        <div className={cn("border border-foreground/10 rounded-md p-5",
          "bg-gradient-to-b from-muted/50 to-muted/10",
          "hover:from-muted/60 hover:to-muted/20",
          "transition-colors duration-300",
        )}>
          <img className="w-12 h-12" src="/tmp/ethf.png" alt="Community 2" />
          <p className="text-foreground/90 mt-3">ETH Floripa</p>
          <p className="text-foreground/50 text-sm">1000 members</p>
        </div>
        <div className={cn("border border-foreground/10 rounded-md p-5",
          "bg-gradient-to-b from-muted/50 to-muted/10",
          "hover:from-muted/60 hover:to-muted/20",
          "transition-colors duration-300",
        )}>
          <img className="w-12 h-12" src="/tmp/st.png" alt="Community 3" />
          <p className="text-foreground/90 mt-3">Superteam Balkan</p>
          <p className="text-foreground/50 text-sm">1000 members</p>
        </div>
      </div>

      <Button variant="secondary" className="mt-10">View all communities</Button>
    </div>
  );
}

export default ExploreCommunites;