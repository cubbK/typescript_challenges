// Implement the `Absolute` type. A type that take string, number or bigint. The output should be a positive number string

// For example

// ```ts
// type Test = -100;
// type Result = Absolute<Test>; // expected to be "100"

import type { Equal, Expect } from "./utils";

type Absolute<Nr extends string | number | bigint> =
  `${Nr}` extends `-${infer PositiveNr}` ? PositiveNr : `${Nr}`;

type yo = Absolute<0>;

type cases = [
  Expect<Equal<Absolute<0>, "0">>,
  Expect<Equal<Absolute<-0>, "0">>,
  Expect<Equal<Absolute<10>, "10">>,
  Expect<Equal<Absolute<-5>, "5">>,
  Expect<Equal<Absolute<"0">, "0">>,
  Expect<Equal<Absolute<"-0">, "0">>,
  Expect<Equal<Absolute<"10">, "10">>,
  Expect<Equal<Absolute<"-5">, "5">>,
  Expect<Equal<Absolute<-1_000_000n>, "1000000">>,
  Expect<Equal<Absolute<9_999n>, "9999">>
];
