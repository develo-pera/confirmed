"use server";

import { cookies } from "next/headers";
import axios from "axios";

export const createSession = async (accessToken: string, refreshToken: string) => {
  const cookieStore = await cookies();

  cookieStore.set("accessToken", accessToken, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 15 * 60, // 15 minutes
    path: "/",
  });

  cookieStore.set("refreshToken", refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30, // 60 days
    path: "/",
  });
}

export const getSession = async () => {
  const cookieStore = await cookies();
  return cookieStore.get("accessToken")?.value;
}

export const updateSession = async (accessToken: string) => {
  const cookieStore = await cookies();
  cookieStore.set("accessToken", accessToken, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 15 * 60, // 15 minutes
    path: "/",
  });
}

export const deleteSession = async () => {
  const cookieStore = await cookies();
  cookieStore.delete("accessToken");
  cookieStore.delete("refreshToken");
}

export const refreshToken = async () => {
  const cookieStore = await cookies();
  const refreshTokenValue = cookieStore.get("refreshToken")?.value;
  if (!refreshTokenValue) {
    return null;
  }

  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh-token`,
      { refreshToken: refreshTokenValue }
    );

    const newAccessToken = response.data.accessToken;
    if (!newAccessToken) {
      return null;
    }

    await updateSession(newAccessToken);
    return newAccessToken;
  } catch (error) {
    console.error("Token refresh error:", error);
    // Delete session on refresh failure
    await deleteSession();
    return null;
  }
}

export const refreshTokenAvailable = async (): Promise<boolean> => {
  const cookieStore = await cookies();

  const refreshToken = cookieStore.get("refreshToken")?.value;
  if (!refreshToken) {
    return false;
  }

  return true;
}