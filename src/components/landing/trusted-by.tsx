import ModeImage from "../common/mode-image";

const TrustedBy = () => {
  return (
    <div className="max-w-6xl w-full mx-auto px-4 py-20">
      <h2 className="text-sm text-foreground/50 text-center mb-5">Trusted by leading organizations and communities</h2>
      <div className="flex items-center justify-center gap-10">
        <ModeImage className="h-8" image="/logos/eth-belgrade-light.svg" imageDark="/logos/eth-belgrade.svg" alt="ETH Belgrade logo" />
        <ModeImage className="h-9" image="/logos/eth-floripa-pink.png" imageDark="/logos/eth-floripa.png" alt="ETH Floripa logo" />
        <ModeImage className="h-11" image="/logos/superteam-blkn-light.png" imageDark="/logos/superteam-blkn.png" alt="Superteam Balkan logo" />
        <ModeImage className="h-6" image="/logos/farcaster.svg" imageDark="/logos/farcaster.svg" alt="Farcaster logo" />
        <ModeImage className="h-7" image="/logos/lifi-light.svg" imageDark="/logos/lifi.svg" alt="LI.FI logo" />
      </div>
    </div>
  );
}

export default TrustedBy;