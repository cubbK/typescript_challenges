// Implement `EndsWith<T, U>` which takes two exact string types and returns whether `T` ends with `U`

// For example:

// ```typescript
// type a = EndsWith<'abc', 'bc'> // expected to be true
// type b = EndsWith<'abc', 'abc'> // expected to be true
// type c = EndsWith<'abc', 'd'> // expected to be false
// ```

import type { Equal, Expect } from "./utils";

type EndsWith<
  String1 extends string,
  String2 extends string
> = String1 extends `${infer First}${String2}` ? true : false;

type yo = EndsWith<"abc", "bc">;

type cases = [
  Expect<Equal<EndsWith<"abc", "bc">, true>>,
  Expect<Equal<EndsWith<"abc", "abc">, true>>,
  Expect<Equal<EndsWith<"abc", "d">, false>>
];
