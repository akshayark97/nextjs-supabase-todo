"use client";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import TodoList from "@/components/TodoList";
import { ITodosList } from "@/constants";
import { useState } from "react";

export default function Home() {
  const [textInput, setTextInput] = useState<string>("");
  const [todos, setTodos] = useState<ITodosList[]>([
    { todo: "Writing", isFinished: false },
    { todo: "Running", isFinished: false },
    { todo: "Reading", isFinished: false },
  ]);

  const addTodo = () => {
    if (textInput.length === 0) return;
    setTodos((prevState) => [
      ...prevState,
      { todo: textInput, isFinished: false },
    ]);
    setTextInput("");
  };

  const deleteTodo = (todoId: number) => {
    const filterTodo = todos.filter((todo, index) => index !== todoId);
    setTodos(filterTodo);
  };

  const todoFinish = (todoId: number) => {
    const strikeTodoIndex = todos.findIndex((todo, index) => index == todoId);
    setTodos((prevState) =>
      prevState.map((item, index) =>
        index === strikeTodoIndex ? { ...item, isFinished: item.isFinished === true ? false : true } : item
      )
    );
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
}
