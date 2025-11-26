"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";

const SignInOtpForm = ({ isError, loading, verifyOTP, email }: { isError: boolean, loading: boolean, verifyOTP: (email: string, otp: string) => Promise<void>, email: string }) => {
  const [otp, setOtp] = useState("");

  const handleChange = (value: string) => {
    setOtp(value);
    if (value.length === 6) {
      verifyOTP(email, value);
    }
  }

  const handleClick = () => {
    verifyOTP(email, otp);
  }

  return (
    <>
      <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS} value={otp} onChange={handleChange} className={isError ? "border-destructive" : ""}>
        <InputOTPGroup>
          <InputOTPSlot index={0} className={isError ? "border-destructive" : ""} />
          <InputOTPSlot index={1} className={isError ? "border-destructive" : ""} />
          <InputOTPSlot index={2} className={isError ? "border-destructive" : ""} />
          <InputOTPSlot index={3} className={isError ? "border-destructive" : ""} />
          <InputOTPSlot index={4} className={isError ? "border-destructive" : ""} />
          <InputOTPSlot index={5} className={isError ? "border-destructive" : ""} />
        </InputOTPGroup>
      </InputOTP >
      <Button variant="secondary" onClick={handleClick} disabled={loading}>
        {loading ? "Verifying..." : isError ? "Invalid OTP, try again" : "Sign in"}
      </Button>
    </>
  );
};

export default SignInOtpForm;