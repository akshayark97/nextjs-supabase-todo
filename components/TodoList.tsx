import { ITodos } from "@/constants";
import React from "react";

export const TodoList = ({ todos, deleteTodo, todoFinish }: ITodos) => {
  return todos.map((task) => (
    <div
      key={task.task + Math.floor(Math.random()*6)}
      className={`flex justify-between gap-5 items-center bg-slate-400 py-2 px-2 rounded-md`}
    >
      <span
        className={`flex flex-col text-white font-bold font-sans text-xl ${
          task.is_complete ? "line-through" : "none"
        }`}
        onClick={() => todoFinish(task.id!)}
      >
        {task.task}
      </span>
      <div className="border rounded-full hover:bg-gray-300 py-2">
        <span
          className="px-5 py-1 cursor-pointer rounded-sm font-bold text-white"
          onClick={() => deleteTodo(task.id!)}
        >
          X
        </span>
      </div>
    </div>
  ));
};

export default TodoList;
