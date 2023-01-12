// Drop a specified char from a string.

// For example:

// ```ts
// type Butterfly = DropChar<' b u t t e r f l y ! ', ' '> // 'butterfly!'
// ```

import type { Equal, Expect } from "./utils";

type DropChar<
  Str extends string,
  CharToDrop extends string,
  NewStr extends string = ""
> = Str extends `${infer Char}${infer Rest}`
  ? Char extends CharToDrop
    ? DropChar<Rest, CharToDrop, `${NewStr}`>
    : DropChar<Rest, CharToDrop, `${NewStr}${Char}`>
  : NewStr;

type cases = [
  // @ts-expect-error
  Expect<Equal<DropChar<"butter fly!", "">, "butterfly!">>,
  Expect<Equal<DropChar<"butter fly!", " ">, "butterfly!">>,
  Expect<Equal<DropChar<"butter fly!", "!">, "butter fly">>,
  Expect<Equal<DropChar<"    butter fly!        ", " ">, "butterfly!">>,
  Expect<Equal<DropChar<" b u t t e r f l y ! ", " ">, "butterfly!">>,
  Expect<Equal<DropChar<" b u t t e r f l y ! ", "b">, "  u t t e r f l y ! ">>,
  Expect<Equal<DropChar<" b u t t e r f l y ! ", "t">, " b u   e r f l y ! ">>
];
