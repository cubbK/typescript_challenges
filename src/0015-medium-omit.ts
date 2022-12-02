// Implement the built-in `Omit<T, K>` generic without using it.

// Constructs a type by picking all properties from `T` and then removing `K`

// For example

// ```ts
// interface Todo {
//   title: string
//   description: string
//   completed: boolean
// }

// type TodoPreview = MyOmit<Todo, 'description' | 'title'>

// const todo: TodoPreview = {
//   completed: false,
// }
// ```

import type { Equal, Expect } from "./utils";

type MyOmit<Obj, ToOmit extends keyof Obj> = {
  [Key in keyof Obj as Key extends ToOmit ? never : Key]: Obj[Key];
};

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, "description">>>,
  Expect<Equal<Expected2, MyOmit<Todo, "description" | "completed">>>
];

// @ts-expect-error
type error = MyOmit<Todo, "description" | "invalid">;

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
  completed: boolean;
}

interface Expected2 {
  title: string;
}
