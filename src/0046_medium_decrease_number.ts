// Given a number (always positive) as a type. Your type should return the number decreased by one.

// For example:

// ```ts
// type Zero = MinusOne<1> // 0
// type FiftyFour = MinusOne<55> // 54
// ```

import type { Equal, Expect } from "./utils";

type DecreaseMap = {
  0: -1;
  1: 0;
  2: 1;
  3: 2;
  4: 3;
  5: 4;
  6: 5;
  7: 6;
  8: 7;
  9: 8;
};

type MinusOne<T extends number, Tuple extends unknown[] = []> = T extends 0
  ? -1
  : [unknown, unknown, ...Tuple]["length"] extends T
  ? [unknown, ...Tuple]["length"]
  : [unknown, ...Tuple]["length"] extends T
  ? Tuple["length"]
  : MinusOne<T, [unknown, unknown, ...Tuple]>;

type yo = MinusOne<123>;

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>,
  Expect<Equal<MinusOne<0>, -1>>
  //   Expect<Equal<MinusOne<9_007_199_254_740_992>, 9_007_199_254_740_991>>
];
