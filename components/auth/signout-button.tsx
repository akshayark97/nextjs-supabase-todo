'use client'
import { signout } from "@/actions/auth/actions";
import { Button } from "../ui/button";

export default function SignOutButton() {
  return (
    <Button
      variant="ghost"
      className="text-white font-bold"
      onClick={async () => {
        await signout();
      }}
    >
      Sign Out
    </Button>
  );
}
