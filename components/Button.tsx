import { IButton } from "@/constants";
import React from "react";

export const Button = ({ addTodo }: IButton) => {
  return (
    <button
      className="border border-x-2 border-y-2 border-slate-500 w-20 bg-white text-slate-500 font-bold hover:bg-slate-400 hover:text-white rounded-sm"
      onClick={addTodo}
    >
      Add
    </button>
  );
};

export default Button;
