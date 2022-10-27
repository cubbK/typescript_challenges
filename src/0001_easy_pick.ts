// # Pick

// Implement the built-in `Pick<T, K>` generic without using it.

// Constructs a type by picking the set of properties `K` from `T`

// For example:

// ```ts
// interface Todo {
//   title: string;
//   description: string;
//   completed: boolean;
// }

// type TodoPreview = MyPick<Todo, "title" | "completed">;

// const todo: TodoPreview = {
//   title: "Clean room",
//   completed: false,
// };
// ```

import type { Equal, Expect } from "./utils";

type MyPick<ObjectToPick, PickKey extends keyof ObjectToPick> = {
  [key in PickKey]: ObjectToPick[key];
};

type pick2 = MyPick<Todo, "description" | "title" | "completed">;
// Test cases
type cases = [
  Expect<Equal<Expected1, MyPick<Todo, "title">>>,
  Expect<Equal<Expected2, MyPick<Todo, "title" | "completed">>>,
  // @ts-expect-error
  MyPick<Todo, "title" | "completed" | "invalid">
];

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
}

interface Expected2 {
  title: string;
  completed: boolean;
}