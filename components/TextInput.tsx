import { ITextInput } from "@/constants";
import React from "react";

export const TextInput = ({ textInput, setTextInput }: ITextInput) => {
  const handleInput = (event: any) => {
    setTextInput(event.target.value);
  };
  return (
    <div>
      <input
        className="border border-x-2 border-y-2 border-slate-500 rounded-sm py-1 px-2 outline-none"
        placeholder="Enter your goal..."
        value={textInput}
        onChange={handleInput}
      />
    </div>
  );
};

export default TextInput;
