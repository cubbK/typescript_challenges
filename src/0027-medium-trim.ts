// Implement `Trim<T>` which takes an exact string type and returns a new string with the whitespace from both ends removed.

// For example

// ```ts
// type trimmed = Trim<'  Hello World  '> // expected to be 'Hello World'
// ```

import type { Equal, Expect } from "./utils";

type EmptySpace = " " | "\n" | "\t";
type Trim<Str extends string> = Str extends `${EmptySpace}${infer Rest}`
  ? Trim<Rest>
  : Str extends `${infer Rest}${EmptySpace}`
  ? Trim<Rest>
  : Str;

type cases = [
  Expect<Equal<Trim<"str">, "str">>,
  Expect<Equal<Trim<" str">, "str">>,
  Expect<Equal<Trim<"     str">, "str">>,
  Expect<Equal<Trim<"str   ">, "str">>,
  Expect<Equal<Trim<"     str     ">, "str">>,
  Expect<Equal<Trim<"   \n\t foo bar \t">, "foo bar">>,
  Expect<Equal<Trim<"">, "">>,
  Expect<Equal<Trim<" \n\t ">, "">>
];
