// Compute the length of a string literal, which behaves like String#length.
import type { Equal, Expect } from "./utils";

type LengthOfString<
  Str,
  Arr extends Array<string> = []
> = Str extends `${infer FirstLetter}${infer Rest}`
  ? LengthOfString<Rest, [...Arr, FirstLetter]>
  : Arr["length"];

type cases = [
  Expect<Equal<LengthOfString<"">, 0>>,
  Expect<Equal<LengthOfString<"kumiko">, 6>>,
  Expect<Equal<LengthOfString<"reina">, 5>>,
  Expect<Equal<LengthOfString<"Sound! Euphonium">, 16>>
];
