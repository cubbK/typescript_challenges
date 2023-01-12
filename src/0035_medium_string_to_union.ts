// Implement the String to Union type. Type take string argument. The output should be a union of input letters

// For example

// ```ts
// type Test = '123';
// type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"

import type { Equal, Expect } from "./utils";

// first try
type StringToUnion1<
  Str extends string,
  Accumulator = Str extends `${infer First}${infer Rest}` ? First : never
> = Str extends `${infer FirstLetter}${infer Rest}`
  ? StringToUnion1<
      Rest,
      Accumulator extends never ? FirstLetter : Accumulator | FirstLetter
    >
  : Accumulator;

// after looking at what other people did
type StringToUnion<Str extends string> =
  Str extends `${infer FirstLetter}${infer Rest}`
    ? FirstLetter | StringToUnion<Rest>
    : never;

type cases = [
  Expect<Equal<StringToUnion<"">, never>>,
  Expect<Equal<StringToUnion<"t">, "t">>,
  Expect<Equal<StringToUnion<"hello">, "h" | "e" | "l" | "l" | "o">>,
  Expect<
    Equal<
      StringToUnion<"coronavirus">,
      "c" | "o" | "r" | "o" | "n" | "a" | "v" | "i" | "r" | "u" | "s"
    >
  >
];
