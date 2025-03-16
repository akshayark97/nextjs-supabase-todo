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
  id?: number;
  user_id: string;
  task: string;
  is_complete: boolean;
  inserted_at: Date;
}
export interface IHomePage {
  todosResp: ITodosList[];
}
