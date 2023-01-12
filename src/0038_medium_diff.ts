// Get an `Object` that is the difference between `O` & `O1`

import type { Equal, Expect } from "./utils";

type Diff<O1, O2> = {
  [Key in keyof O1 | keyof O2 as Key extends keyof O1
    ? Key extends keyof O2
      ? never
      : Key
    : Key extends keyof O2
    ? Key
    : never]: Key extends keyof O1
    ? O1[Key]
    : Key extends keyof O2
    ? O2[Key]
    : never;
};

type Foo = {
  name: string;
  age: string;
};
type Bar = {
  name: string;
  age: string;
  gender: number;
};
type Coo = {
  name: string;
  gender: number;
};

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
  Expect<Equal<Diff<Foo, Coo>, { age: string; gender: number }>>,
  Expect<Equal<Diff<Coo, Foo>, { age: string; gender: number }>>
];
