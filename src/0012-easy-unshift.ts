// Implement the type version of ```Array.unshift```

// For example:

// ```typescript
// type Result = Unshift<[1, 2], 0> // [0, 1, 2,]
// ```

import type { Equal, Expect } from "./utils";

type Unshift<Arr extends any[], ElToPush> = [ElToPush, ...Arr];

type cases = [
  Expect<Equal<Unshift<[], 1>, [1]>>,
  Expect<Equal<Unshift<[1, 2], 0>, [0, 1, 2]>>,
  Expect<Equal<Unshift<["1", 2, "3"], boolean>, [boolean, "1", 2, "3"]>>
];
