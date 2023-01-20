// Implement `StartsWith<T, U>` which takes two exact string types and returns whether `T` starts with `U`

// For example

// ```typescript
// type a = StartsWith<'abc', 'ac'> // expected to be false
// type b = StartsWith<'abc', 'ab'> // expected to be true
// type c = StartsWith<'abc', 'abcd'> // expected to be false
// ```

import type { Equal, Expect } from "./utils";

type StartsWith<
  String1 extends string,
  String2 extends string
> = String2 extends ""
  ? true
  : String1 extends `${infer String1Char}${infer String1Rest}`
  ? String2 extends `${infer String2Char}${infer String2Rest}`
    ? String1Char extends String2Char
      ? StartsWith<String1Rest, String2Rest>
      : false
    : false
  : false;

type StartsWith1<
  T extends string,
  U extends string
> = T extends `${U}${infer Rest}` ? true : false;

// type StartsWith2<String1 extends string, String2 extends string> =
//     if(String1 extends "") {
//         true
//     } else {
//         if(String1 extends `${infer String1Char}${infer String1Rest}`) {
//             if(String2 extends `${infer String2Char}${infer String2Rest}`) {

//             } else {
//               false
//             }
//         } else {
//             false
//         } else {
//             false
//         }
//     }

type Yo = StartsWith1<"abc", "ab">;

type cases = [
  Expect<Equal<StartsWith<"abc", "ac">, false>>,
  Expect<Equal<StartsWith<"abc", "ab">, true>>,
  Expect<Equal<StartsWith<"abc", "abc">, true>>,
  Expect<Equal<StartsWith<"abc", "abcd">, false>>,
  Expect<Equal<StartsWith<"abc", "">, true>>,
  Expect<Equal<StartsWith<"abc", " ">, false>>,
  Expect<Equal<StartsWith<"", "">, true>>
];
