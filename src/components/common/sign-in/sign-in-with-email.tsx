import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SignInWithEmail = ({ isError, loading, getOTP, email, setEmail }: { isError: boolean, loading: boolean, getOTP: (email: string) => Promise<void>, email: string, setEmail: (email: string) => void }) => {
  return (
    <>
      <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className={isError ? "border-destructive" : ""} />
      <Button variant="secondary" onClick={() => getOTP(email)} disabled={loading}>
        {loading ? "Sending verification code..." : isError ? "Please check email and try again" : "Send verification code"}
      </Button>
    </>
  );
};

export default SignInWithEmail;