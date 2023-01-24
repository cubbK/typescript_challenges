// Implement the type version of ```Array.reverse```

// For example:

// ```typescript
// type a = Reverse<['a', 'b']> // ['b', 'a']
// type b = Reverse<['a', 'b', 'c']> // ['c', 'b', 'a']
// ```

import type { Equal, Expect } from "./utils";

type Reverse<
  Arr extends string[],
  Accumulator extends string[] = []
> = Arr extends [...infer Firsts extends string[], infer Last extends string]
  ? Reverse<Firsts, [...Accumulator, Last]>
  : Accumulator;

type cases = [
  Expect<Equal<Reverse<[]>, []>>,
  Expect<Equal<Reverse<["a", "b"]>, ["b", "a"]>>,
  Expect<Equal<Reverse<["a", "b", "c"]>, ["c", "b", "a"]>>
];

type errors = [
  // @ts-expect-error
  Reverse<"string">,
  // @ts-expect-error
  Reverse<{ key: "value" }>
];
