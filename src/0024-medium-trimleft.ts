// Implement `TrimLeft<T>` which takes an exact string type and returns a new string with the whitespace beginning removed.

// For example

// ```ts
// type trimed = TrimLeft<'  Hello World  '> // expected to be 'Hello World  '
// ```

import type { Equal, Expect } from "./utils";

type TrimLeft<Str extends string> = Str extends `${
  | " "
  | "\n"
  | "\t"}${infer Rest}`
  ? TrimLeft<Rest>
  : Str;

type yo = TrimLeft<" str">;

type cases = [
  Expect<Equal<TrimLeft<"str">, "str">>,
  Expect<Equal<TrimLeft<" str">, "str">>,
  Expect<Equal<TrimLeft<"     str">, "str">>,
  Expect<Equal<TrimLeft<"     str     ">, "str     ">>,
  Expect<Equal<TrimLeft<"   \n\t foo bar ">, "foo bar ">>,
  Expect<Equal<TrimLeft<"">, "">>,
  Expect<Equal<TrimLeft<" \n\t">, "">>
];
