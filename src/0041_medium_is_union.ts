// Implement a type `IsUnion`, which takes an input type `T` and returns whether `T` resolves to a union type.

// For example:

//   ```ts
//   type case1 = IsUnion<string>  // false
//   type case2 = IsUnion<string|number>  // true
//   type case3 = IsUnion<[string|number]>  // false
//   ```

import type { Equal, Expect } from "./utils";

type IsUnionInternal<U, K = U> = U extends infer Union
  ? K extends Union
    ? true
    : false
  : never;

type IsUnion<T> = IsUnionInternal<T> extends true ? false : true;

type yo = IsUnion<string | number>;

type cases = [
  Expect<Equal<IsUnion<string>, false>>,
  Expect<Equal<IsUnion<string | number>, true>>,
  Expect<Equal<IsUnion<"a" | "b" | "c" | "d">, true>>,
  Expect<Equal<IsUnion<undefined | null | void | "">, true>>,
  Expect<Equal<IsUnion<{ a: string } | { a: number }>, true>>,
  Expect<Equal<IsUnion<{ a: string | number }>, false>>,
  Expect<Equal<IsUnion<[string | number]>, false>>,
  // Cases where T resolves to a non-union type.
  Expect<Equal<IsUnion<string | never>, false>>,
  Expect<Equal<IsUnion<string | unknown>, false>>,
  Expect<Equal<IsUnion<string | any>, false>>,
  Expect<Equal<IsUnion<string | "a">, false>>,
  Expect<Equal<IsUnion<never>, false>>
];
