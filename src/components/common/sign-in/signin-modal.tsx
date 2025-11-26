"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../../ui/dialog";
import { Separator } from "../../ui/separator";
import SignInWithEmail from "./sign-in-with-email";
import SignInOtpForm from "./sign-in-otp-form";
import useLogin from "@/hooks/useLogin";

const SigninModal = ({ children }: { children: React.ReactNode }) => {
  const { status, getOTP, verifyOTP, isLoading, setStatus } = useLogin();
  const [email, setEmail] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // Close modal after 3 seconds
  useEffect(() => {
    if (status === "otpSuccess") {
      setTimeout(() => {
        setIsOpen(false);
        setStatus("initial");
        setEmail("");
      }, 3000);
    }
  }, [status]);

  return (
    <>
      <Dialog open={isOpen} onOpenChange={(open) => {
        setIsOpen(open);
        if (!open) {
          setStatus("initial");
        }
      }}>
        <DialogTrigger asChild>
          {children}
        </DialogTrigger>

        <DialogContent>
          {
            status === "otpSuccess"
              ? (
                <DialogHeader>
                  <div className="text-md py-4 text-center">Signed in successful</div>
                </DialogHeader>

              ) : (
                <>
                  <DialogHeader>
                    <DialogTitle className="text-md">Sign in</DialogTitle>
                    <DialogDescription className="text-sm">Sign in or create an account to continue</DialogDescription>
                  </DialogHeader>
                  <div className="flex flex-col gap-4">
                    {(status === "initial" || status === "emailError") && <SignInWithEmail isError={status === "emailError"} loading={isLoading} getOTP={getOTP} email={email} setEmail={setEmail} />}
                    {(status === "otpRequested" || status === "otpError") && <SignInOtpForm isError={status === "otpError"} loading={isLoading} verifyOTP={verifyOTP} email={email} />}
                    <Separator />
                    <Button>
                      <Image src="/logos/google-icon-logo.svg" alt="Google icon logo" width={20} height={20} preload />
                      Sign in with Google
                    </Button>
                  </div>
                </>
              )}
        </DialogContent>
      </Dialog >
    </>
  );
}

export default SigninModal;