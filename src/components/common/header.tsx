import Link from "next/link";
import NavigationUser from "./navigation-user";
import ModeImage from "./mode-image";

const LANDING_PAGE_NAVIGATION = [
  {
    label: "Features",
    href: "/#features"
  },
  {
    label: "Events",
    href: "/#events"
  },
  {
    label: "Communities",
    href: "/#communities"
  },
  {
    label: "Pricing",
    href: "/#pricing"
  }
];

const PAGES_NAVIGATION = [
  {
    label: "Events",
    href: "/events"
  },
  {
    label: "Communities",
    href: "/communities"
  }
];

const Header = ({ isLandingPage = false }: { isLandingPage?: boolean }) => {
  const navigation = isLandingPage ? LANDING_PAGE_NAVIGATION : PAGES_NAVIGATION;

  return (
    <div>
      <header className="w-full mx-auto flex items-center justify-between gap-4 bg-background py-6 px-4">
        <Link href="/">
          <ModeImage className="w-[150px]" imageDark="/logo.svg" image="/logo-light.svg" alt="Commit logo" width={150} height={26.66} />
        </Link>
        <nav className="hidden text-[var(--text-color)] font-light flex-col gap-10 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-10">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[var(--text-color)] transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <NavigationUser />
      </header>
    </div>
  );
}

export default Header;