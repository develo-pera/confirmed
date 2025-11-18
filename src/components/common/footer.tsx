import { ModeToggle } from "./mode-toggle";

const Footer = () => {
  return (
    <div>
      <div className="max-w-6xl w-full mx-auto px-4">
        <div className="flex items-center justify-between gap-10 py-7">
          <div>
            <div className="max-w-[250px]">
              <h3 className="text-lg font-bold">Confirmed</h3>
              <p className="text-foreground/50 text-xs">Confirmed is a platform for event professionals. We help excellent event leads and organizers to excell even more.</p>
            </div>
          </div>

          <div className="flex items-center justify-end">
            <ModeToggle />
          </div>
        </div>
      </div>
      <p className="text-center text-foreground/50 text-xs py-5 px-4">&copy; {new Date().getFullYear()} Confirmed. All rights reserved.</p>
    </div>
  );
}

export default Footer;