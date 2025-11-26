import "server-only";

import { cache } from "react";
import { getSession, refreshTokenAvailable } from "./session";

export const verifySession = cache(async () => {
  const session = await getSession();
  const hasRefreshToken = await refreshTokenAvailable();

  if (!session && !hasRefreshToken) {
    return { isAuthenticated: false };
  }

  return { isAuthenticated: true, user: {} };
})