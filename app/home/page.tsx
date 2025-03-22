"use client";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import TodoList from "@/components/TodoList";
import { ITodosList } from "@/constants";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { getTodos } from "@/utils/common";
import SignOutButton from "@/components/auth/signout-button";

export const HomePage = () => {
  const [textInput, setTextInput] = useState<string>("");
  const [todos, setTodos] = useState<ITodosList[]>([]);

  async function fetchTodos() {
    setTodos(await getTodos());
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async () => {
    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (textInput.length === 0) return;
    setTodos((prevState) => [
      ...prevState,
      {
        user_id: user!.id,
        task: textInput,
        is_complete: false,
        inserted_at: new Date(),
      },
    ]);
    setTextInput("");

    const { error } = await supabase.from("todos").insert([
      {
        user_id: user?.id,
        task: textInput,
        is_complete: false,
        inserted_at: new Date(),
      },
    ]);

    if (error) {
      throw new Error(error.message);
    }
  };

  const deleteTodo = async (todoId: number) => {
    const supabase = createClient();
    const filterTodo = todos.filter((task, index) => task.id !== todoId);
    setTodos(filterTodo);

    const { error } = await supabase.from("todos").delete().eq("id", todoId);

    if (error) {
      throw new Error(error.message);
    }
  };

  const todoFinish = async (todoId: number) => {
    const strikeTodo = todos.find((task, index) => task.id == todoId);

    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { error } = await supabase
      .from("todos")
      .update({ is_complete: strikeTodo?.is_complete === true ? false : true })
      .eq("id", todoId)
      .eq("user_id", user?.id)
      .select();

    if (error) {
      throw new Error(error.message);
    }
    fetchTodos();
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-slate-500">
      <div className="border border-black p-10 rounded-lg bg-white">
        <div className="flex flex-col gap-5">
          <div className="flex gap-5">
            <TextInput textInput={textInput} setTextInput={setTextInput} />
            <Button addTodo={addTodo} />
          </div>
          <TodoList
            todos={todos}
            deleteTodo={deleteTodo}
            todoFinish={todoFinish}
          />
        </div>
      </div>
    </div>
  );
};
