// Implement the JavaScript `Array.concat` function in the type system. A type takes the two arguments. The output should be a new array that includes inputs in ltr order

// For example:

// ```ts
// type Result = Concat<[1], [2]> // expected to be [1, 2]
// ```

import type { Equal, Expect } from "./utils";

type Concat<Arr1 extends any[], Arr2 extends any[]> = [...Arr1, ...Arr2];

type cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], [1]>, [1]>>,
  Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<
    Equal<
      Concat<["1", 2, "3"], [false, boolean, "4"]>,
      ["1", 2, "3", false, boolean, "4"]
    >
  >
];
