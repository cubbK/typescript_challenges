// Implement a generic `MyReadonly2<T, K>` which takes two type argument `T` and `K`.

// `K` specify the set of properties of `T` that should set to Readonly. When `K` is not provided, it should make all properties readonly just like the normal `Readonly<T>`.

// For example

// ```ts
// interface Todo {
//   title: string
//   description: string
//   completed: boolean
// }

// const todo: MyReadonly2<Todo, 'title' | 'description'> = {
//   title: "Hey",
//   description: "foobar",
//   completed: false,
// }

// todo.title = "Hello" // Error: cannot reassign a readonly property
// todo.description = "barFoo" // Error: cannot reassign a readonly property
// todo.completed = true // OK
// ```

import type { Alike, Expect } from "./utils";

type MyReadonly2<Obj, KeysToReadonly extends keyof Obj = keyof Obj> = {
  readonly [Key in KeysToReadonly]: Obj[Key];
} & {
  [Key in Exclude<keyof Obj, KeysToReadonly>]: Obj[Key];
};

type cases = [
  Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<MyReadonly2<Todo1, "title" | "description">, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, "title" | "description">, Expected>>
];

// @ts-expect-error
type error = MyReadonly2<Todo1, "title" | "invalid">;

interface Todo1 {
  title: string;
  description?: string;
  completed: boolean;
}

interface Todo2 {
  readonly title: string;
  description?: string;
  completed: boolean;
}

interface Expected {
  readonly title: string;
  readonly description?: string;
  completed: boolean;
}
