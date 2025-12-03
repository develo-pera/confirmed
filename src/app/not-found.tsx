import { Button } from "../components/ui/button";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="max-w-6xl w-full mx-auto px-4 py-20 mt-20 flex flex-col items-center justify-center" >
      <Image className="mb-4" src="/glove-thumb-down.png" alt="Not Found thumb down" width={50} height={50} />
      <p className="text-xl font-bold">Not Found</p>
      <p className="text-sm text-foreground/50">The page you are looking for does not exist.</p>
      <Link href="/">
        <Button variant="outline" className="mt-4">
          Go to home
        </Button>
      </Link>
    </div>
  );
}

export default NotFound; 