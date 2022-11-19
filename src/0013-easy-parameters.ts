// Implement the built-in Parameters<T> generic without using it.

// For example:

// ```ts
// const foo = (arg1: string, arg2: number): void => {}

// type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]

import type { Equal, Expect } from "./utils";

const foo = (arg1: string, arg2: number): void => {};
const bar = (arg1: boolean, arg2: { a: "A" }): void => {};
const baz = (): void => {};

type MyParameters<func> = func extends (...args: infer Args) => any
  ? Args
  : never;

type cases = [
  Expect<Equal<MyParameters<typeof foo>, [string, number]>>,
  Expect<Equal<MyParameters<typeof bar>, [boolean, { a: "A" }]>>,
  Expect<Equal<MyParameters<typeof baz>, []>>,
  Expect<Equal<MyParameters<[]>, never>>
];
