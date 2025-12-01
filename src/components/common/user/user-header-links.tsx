import React from "react";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { addUrlPrefix, stripUrl, URL_PATTERN, URL_PREFIX } from "@/lib/helpers";

type UserLinks = {
  website?: Url | null;
  x?: Url | null;
  linkedin?: Url | null;
  farcaster?: Url | null;
};

const UserHeaderLinks = ({ website, x, linkedin, farcaster }: UserLinks) => {
  const links = [];

  if (website) {
    links.push({
      label: stripUrl(website.toString(), URL_PATTERN.website),
      href: website,
    });
  }
  if (x) {
    links.push({
      label: "X",
      href: addUrlPrefix(x.toString(), URL_PREFIX.x),
    });
  }
  if (linkedin) {
    links.push({
      label: "Linkedin",
      href: addUrlPrefix(linkedin.toString(), URL_PREFIX.linkedin),
    });
  }
  if (farcaster) {
    links.push({
      label: "Farcaster",
      href: addUrlPrefix(farcaster.toString(), URL_PREFIX.farcaster),
    });
  }

  return (
    <div className="mt-1 flex items-center gap-2">
      {
        links.map((link, index) => (
          <React.Fragment key={index}>
            {index > 0 && <span className="text-foreground/50 text-sm">•</span>}
            <Link href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm">
              {link.label}
            </Link>
          </React.Fragment>
        ))
      }
    </div>
  );
};

export default UserHeaderLinks;