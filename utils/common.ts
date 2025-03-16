import { ITodosList } from "@/constants";
import { createClient } from "./supabase/client";

export async function getTodos() {
  const supabase = await createClient();
  const { data: todos }: ITodosList[] | any = await supabase.from("todos").select();
  return todos;
}
