// Implement the generic version of ```Array.push```

// For example:

// ```typescript
// type Result = Push<[1, 2], '3'> // [1, 2, '3']
// ```

import type { Equal, Expect } from "./utils";

type Push<Arr extends any[], ElToPush> = [...Arr, ElToPush];

type cases = [
  Expect<Equal<Push<[], 1>, [1]>>,
  Expect<Equal<Push<[1, 2], "3">, [1, 2, "3"]>>,
  Expect<Equal<Push<["1", 2, "3"], boolean>, ["1", 2, "3", boolean]>>
];
