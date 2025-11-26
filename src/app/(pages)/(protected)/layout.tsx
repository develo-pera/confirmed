
import { verifySession } from "@/lib/dal";
import { redirect } from "next/navigation";

const ProtectedLayout = async ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = await verifySession();

  if (!isAuthenticated) {
    redirect("/");
  }

  return children;
}

export default ProtectedLayout;