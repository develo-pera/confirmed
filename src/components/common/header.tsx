import Link from "next/link";
import NavigationUserAvatar from "./navigation-user-avatar";
import ModeImage from "./mode-image";

const Header = () => {
  return (
    <div>
      <header className="w-full mx-auto flex items-center justify-between gap-4 bg-background py-6 px-4">
        <Link href="/">
          <ModeImage className="w-[150px]" imageDark="/logo.svg" image="/logo-light.svg" alt="Commit logo" width={150} height={26.66} />
        </Link>
        <nav className="hidden text-[var(--text-color)] font-light flex-col gap-10 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-10">
          <Link
            href="/#features"
            className="text-[var(--text-color)] transition-colors hover:text-foreground"
          >
            Features
          </Link>
          <Link
            href="/#events"
            className="text-[var(--text-color)] transition-colors hover:text-foreground"
          >
            Events
          </Link>
          <Link
            href="/#communities"
            className="text-[var(--text-color)] transition-colors hover:text-foreground"
          >
            Communities
          </Link>
          <Link
            href="/#pricing"
            className="text-[var(--text-color)] transition-colors hover:text-foreground"
          >
            Pricing
          </Link>
        </nav>
        <div className="min-w-[150px] flex justify-end">
          <NavigationUserAvatar />
        </div>
      </header>
    </div>
  );
}

export default Header;