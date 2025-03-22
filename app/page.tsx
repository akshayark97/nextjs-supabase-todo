import { createClient } from "@/utils/supabase/server";
import { HomePage } from "./home/page";
import { redirect } from "next/navigation";
import SignOutButton from "../components/auth/signout-button";

export default async function App() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  console.log(data.user);

  if (error || !data?.user) {
    redirect("/signin");
  }

  return (
    <div>
      <div className="bg-slate-500 flex justify-end fixed top-0 right-0">
        <SignOutButton />
      </div>
      <HomePage />
    </div>
  );
}
