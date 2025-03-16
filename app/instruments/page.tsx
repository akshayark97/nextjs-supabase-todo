import { createClient } from "@/utils/supabase/client";

export default async function Instruments() {
  const supabase = await createClient();
  const { data: instruments } = await supabase.from("todos").select();

  return <pre>{JSON.stringify(instruments, null, 2)}</pre>
}