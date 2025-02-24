export interface ITextInput {
  textInput: string;
  setTextInput: (textInput: string) => void;
}

export interface IButton {
  addTodo: () => void;
}

export interface ITodos {
  todos: ITodosList[];
  deleteTodo: (todoIndex: number) => void;
  todoFinish: (todoIndex: number) => void;
}

export interface ITodosList {
  todo: string;
  isFinished: boolean;
}
