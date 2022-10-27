// For given a tuple, you need create a generic `Length`, pick the length of the tuple

// For example:

// ```ts
// type tesla = ['tesla', 'model 3', 'model X', 'model Y']
// type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

// type teslaLength = Length<tesla>  // expected 4
// type spaceXLength = Length<spaceX> // expected 5
// ```

import type { Equal, Expect } from "./utils";

type Length<Arr extends readonly any[]> = Arr["length"];

type check = Length<typeof tesla>;

const tesla = ["tesla", "model 3", "model X", "model Y"] as const;
const spaceX = [
  "FALCON 9",
  "FALCON HEAVY",
  "DRAGON",
  "STARSHIP",
  "HUMAN SPACEFLIGHT",
] as const;

type cases = [
  Expect<Equal<Length<typeof tesla>, 4>>,
  Expect<Equal<Length<typeof spaceX>, 5>>,
  // @ts-expect-error
  Length<5>,
  // @ts-expect-error
  Length<"hello world">
];
