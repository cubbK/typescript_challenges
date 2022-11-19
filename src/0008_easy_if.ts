// Implement the util type `If<C, T, F>` which accepts condition `C`, a truthy value `T`, and a falsy value `F`. `C` is expected to be either `true` or `false` while `T` and `F` can be any type.

// For example:

// ```ts
// type A = If<true, 'a', 'b'>  // expected to be 'a'
// type B = If<false, 'a', 'b'> // expected to be 'b'
// ```

import type { Equal, Expect } from "./utils";

type If<
  Condition extends boolean,
  TruthyValue,
  FalsyValue
> = Condition extends true ? TruthyValue : FalsyValue;

type cases = [
  Expect<Equal<If<true, "a", "b">, "a">>,
  Expect<Equal<If<false, "a", 2>, 2>>
];

// @ts-expect-error
type error = If<null, "a", "b">;
// @ts-expect-error
type error1 = If<undefined, "a", "b">;
