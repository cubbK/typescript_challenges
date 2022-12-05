// > TypeScript 4.0 is recommended in this challenge

// Implement a generic `Last<T>` that takes an Array `T` and returns its last element.

// For example

// ```ts
// type arr1 = ['a', 'b', 'c']
// type arr2 = [3, 2, 1]

// type tail1 = Last<arr1> // expected to be 'c'
// type tail2 = Last<arr2> // expected to be 1
// ```

import type { Equal, Expect } from "./utils";

type Last<Arr extends [...any]> = Arr extends [...any, infer LastEl]
  ? LastEl
  : never;

type cases = [
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>
];
