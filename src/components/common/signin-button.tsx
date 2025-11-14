"use client";

import { useLogin, usePrivy } from "@privy-io/react-auth";
import { Button } from "@/components/ui/button";

const SigninButton = () => {
  const { ready, authenticated } = usePrivy();
  const { login } = useLogin({
    //TODO:
    onComplete: ({ user, isNewUser, wasAlreadyAuthenticated, loginMethod, loginAccount }) => {
      console.log('User logged in successfully', user);
      console.log('Is new user:', isNewUser);
      console.log('Was already authenticated:', wasAlreadyAuthenticated);
      console.log('Login method:', loginMethod);
      console.log('Login account:', loginAccount);
      // Navigate to dashboard, show welcome message, etc.
    },
    onError: (error) => {
      console.error('Login failed', error);
      // Show error message
    }
  });
  // Disable login when Privy is not ready or the user is already authenticated
  const disableLogin = !ready || (ready && authenticated);

  return (
    <Button variant="secondary" disabled={disableLogin} onClick={login}>
      Sign in
    </Button>
  );
}

export default SigninButton;