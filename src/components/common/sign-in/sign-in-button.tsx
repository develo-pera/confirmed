import { Button } from "@/components/ui/button";
import SigninModal from "./signin-modal";

const SignInButton = () => {
  return (
    <SigninModal>
      <Button variant="secondary">
        Sign in
      </Button>
    </SigninModal>
  )
}

export default SignInButton;