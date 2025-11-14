const TrustedBy = () => {
  return (
    <div className="max-w-6xl w-full mx-auto px-4 py-20">
      <h2 className="text-sm text-foreground/50 text-center mb-5">Trusted by leading organizations and communities</h2>
      <div className="flex items-center justify-center gap-10">
        <img className="h-8" src="/logos/eth-belgrade.svg" alt="ETH Belgrade logo" />
        <img className="h-9" src="/logos/eth-floripa.png" alt="ETH Floripa logo" />
        <img className="h-12" src="/logos/superteam-blkn.png" alt="Superteam Balkan logo" />
        <img className="h-6" src="/logos/farcaster.svg" alt="Farcaster logo" />
        <img className="h-7" src="/logos/lifi.svg" alt="LI.FI logo" />
      </div>
    </div>
  );
}

export default TrustedBy;