// Implement a generic `TupleToUnion<T>` which covers the values of a tuple to its values union.

// For example

// ```ts
// type Arr = ['1', '2', '3']

// type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'
// ```

import type { Equal, Expect } from "./utils";

type TupleToUnion<Tupple extends any[]> = Tupple[number];

type cases = [
  Expect<Equal<TupleToUnion<[123, "456", true]>, 123 | "456" | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>
];
