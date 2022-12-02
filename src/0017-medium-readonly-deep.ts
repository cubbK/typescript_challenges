// Implement a generic `DeepReadonly<T>` which make every parameter of an object - and its sub-objects recursively - readonly.

// You can assume that we are only dealing with Objects in this challenge. Arrays, Functions, Classes and so on do not need to be taken into consideration. However, you can still challenge yourself by covering as many different cases as possible.

// For example:

// ```ts
// type X = {
//   x: {
//     a: 1
//     b: 'hi'
//   }
//   y: 'hey'
// }

// type Expected = {
//   readonly x: {
//     readonly a: 1
//     readonly b: 'hi'
//   }
//   readonly y: 'hey'
// }

// type Todo = DeepReadonly<X> // should be same as `Expected`
// ```

import type { Equal, Expect, Debug } from "./utils";

type DeepReadonly<Obj> = {
  readonly [Key in keyof Obj]: Obj[Key] extends Function
    ? Obj[Key]
    : Obj[Key] extends object
    ? DeepReadonly<Obj[Key]>
    : Obj[Key];
};

type result = DeepReadonly<X>;

type cases = [Expect<Equal<DeepReadonly<X>, Expected>>];

type X = {
  a: () => 22;
  b: string;
  c: {
    d: boolean;
    e: {
      g: {
        h: {
          i: true;
          j: "string";
        };
        k: "hello";
      };
      l: [
        "hi",
        {
          m: ["hey"];
        }
      ];
    };
  };
};

type Expected = {
  readonly a: () => 22;
  readonly b: string;
  readonly c: {
    readonly d: boolean;
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true;
          readonly j: "string";
        };
        readonly k: "hello";
      };
      readonly l: readonly [
        "hi",
        {
          readonly m: readonly ["hey"];
        }
      ];
    };
  };
};
