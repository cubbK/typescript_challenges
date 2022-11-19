// Implement the built-in Exclude<T, U>

// > Exclude from T those types that are assignable to U

// For example:

// ```ts
// type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'

import type { Equal, Expect } from "./utils";

type MyExclude<T, Exclude> = T extends Exclude ? never : T;

type cases = [
  Expect<Equal<MyExclude<"a" | "b" | "c", "a">, "b" | "c">>,
  Expect<Equal<MyExclude<"a" | "b" | "c", "a" | "b">, "c">>,
  Expect<
    Equal<MyExclude<string | number | (() => void), Function>, string | number>
  >
];
