// Implement `Replace<S, From, To>` which replace the string `From` with `To` once in the given string `S`

// For example

// ```ts
// type replaced = Replace<'types are fun!', 'fun', 'awesome'> // expected to be 'types are awesome!'
// ```

import type { Equal, Expect } from "./utils";

type Replace<
  Str extends string,
  From extends string,
  To extends string
> = From extends ""
  ? Str
  : Str extends `${infer Before}${From}${infer After}`
  ? `${Before}${To}${After}`
  : Str;

type yo = Replace<"foobarbar", "", "foo">;

type cases = [
  Expect<Equal<Replace<"foobar", "bar", "foo">, "foofoo">>,
  Expect<Equal<Replace<"foobarbar", "bar", "foo">, "foofoobar">>,
  Expect<Equal<Replace<"foobarbar", "", "foo">, "foobarbar">>,
  Expect<Equal<Replace<"foobarbar", "bar", "">, "foobar">>,
  Expect<Equal<Replace<"foobarbar", "bra", "foo">, "foobarbar">>,
  Expect<Equal<Replace<"", "", "">, "">>
];
