import "server-only";

import { cache } from "react";
import { getSession, refreshTokenAvailable } from "./session";

export const verifySession = cache(async () => {
  const session = await getSession(); // TODO: maybe should check fo refresh token instead of access token
  const hasRefreshToken = await refreshTokenAvailable();

  if (!session && !hasRefreshToken) {
    return { isAuthenticated: false };
  }

  return { isAuthenticated: true, user: {} };
})