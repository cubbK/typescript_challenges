// Merge two types into a new type. Keys of the second type overrides keys of the first type.

// For example

// ```ts
// type foo = {
//   name: string;
//   age: string;
// }
// type coo = {
//   age: number;
//   sex: string
// }

// type Result = Merge<foo,coo>; // expected to be {name: string, age: number, sex: string}

import type { Equal, Expect } from "./utils";

type Foo = {
  a: number;
  b: string;
};
type Bar = {
  b: number;
  c: boolean;
};

type Merge<Obj1, Obj2> = {
  [Key in keyof Obj1 | keyof Obj2]: Key extends keyof Obj2
    ? Obj2[Key]
    : Key extends keyof Obj1
    ? Obj1[Key]
    : never;
};

type cases = [
  Expect<
    Equal<
      Merge<Foo, Bar>,
      {
        a: number;
        b: number;
        c: boolean;
      }
    >
  >
];
