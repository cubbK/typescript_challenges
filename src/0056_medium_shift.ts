// Implement the type version of ```Array.shift```

// For example

// ```typescript
// type Result = Shift<[3, 2, 1]> // [2, 1]
// ```

import type { Equal, Expect } from "./utils";

type Shift<Arr extends unknown[]> = Arr extends [infer A, ...infer Rest]
  ? Rest
  : [];

type cases = [
  // @ts-expect-error
  Shift<unknown>,
  Expect<Equal<Shift<[]>, []>>,
  Expect<Equal<Shift<[1]>, []>>,
  Expect<Equal<Shift<[3, 2, 1]>, [2, 1]>>,
  Expect<Equal<Shift<["a", "b", "c", "d"]>, ["b", "c", "d"]>>
];
