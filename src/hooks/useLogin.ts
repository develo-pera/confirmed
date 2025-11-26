"use client";

import { useState } from "react";
import { createSession } from "@/lib/session";

const useLogin = () => {
  const [status, setStatus] = useState<"initial" | "emailError" | "emailSuccess" | "otpRequested" | "otpError" | "otpSuccess">("initial");
  const [isLoading, setIsLoading] = useState(false);

  const getOTP = async (email: string): Promise<void> => {
    try {
      setIsLoading(true);
      setStatus("initial");
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/generate-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });

      const data = await response.json();
      if (response.ok) {
        setStatus("otpRequested");
      } else {
        setStatus("emailError");
        throw new Error(data.message || "Failed to generate OTP");
      }
    } catch (error) {
      setStatus("emailError");
      throw new Error(error instanceof Error ? error.message : "Failed to generate OTP");
    } finally {
      setIsLoading(false);
    }
  }

  const verifyOTP = async (email: string, otp: string): Promise<void> => {
    // setAuthenticated(false);
    try {
      setIsLoading(true);
      setStatus("otpRequested");
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/verify-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, otp })
      });

      const data = await response.json();

      if (response.ok) {
        await createSession(data.accessToken, data.refreshToken);
        setStatus("otpSuccess");
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      setStatus("otpError");
      throw new Error(error instanceof Error ? error.message : "Failed to verify OTP");
    } finally {
      setIsLoading(false);
    }
  }

  return { getOTP, verifyOTP, status, setStatus, isLoading };
}

export default useLogin;