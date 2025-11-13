import { ModeToggle } from "./mode-toggle";

const Footer = () => {
  return (
    <div>
      <div className="max-w-6xl w-full mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-7">
          <div>
            <h3 className="text-lg font-bold">Confirmed</h3>
            <p className="text-foreground/50 text-xs">Confirmed is a platform for event professionals. We help excellent event leads and organizers to excell even more.</p>
          </div>
          <div />
          <div />
          <div>
            <ModeToggle />
          </div>
        </div>
      </div>
      <p className="text-center text-foreground/50 text-xs py-5 px-4">&copy; {new Date().getFullYear()} Confirmed. All rights reserved.</p>
    </div>
  );
}

export default Footer;