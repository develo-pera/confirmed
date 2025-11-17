import ModeImage from "../common/mode-image";

const TrustedBy = () => {
  return (
    <div className="max-w-6xl w-full mx-auto px-4 py-20">
      <h2 className="text-sm text-foreground/50 text-center mb-5">Trusted by leading organizations and communities</h2>
      <div className="flex items-center justify-center gap-10">
        <ModeImage className="h-8" image="/logos/eth-belgrade-light.svg" imageDark="/logos/eth-belgrade.svg" alt="ETH Belgrade logo" width={110.5} height={32} />
        <ModeImage className="h-9" image="/logos/eth-floripa-pink.png" imageDark="/logos/eth-floripa.png" alt="ETH Floripa logo" width={99.09} height={36} />
        <ModeImage className="h-11" image="/logos/superteam-blkn-light.png" imageDark="/logos/superteam-blkn.png" alt="Superteam Balkan logo" width={216.61} height={44} />
        <ModeImage className="h-6" image="/logos/farcaster.svg" imageDark="/logos/farcaster.svg" alt="Farcaster logo" width={119.13} height={24} />
        <ModeImage className="h-7" image="/logos/lifi-light.svg" imageDark="/logos/lifi.svg" alt="LI.FI logo" width={77} height={28} />
      </div>
    </div>
  );
}

export default TrustedBy;