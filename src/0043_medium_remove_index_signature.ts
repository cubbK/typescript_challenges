// Implement `RemoveIndexSignature<T>` , exclude the index signature from object types.

// For example:

// ```

// type Foo = {
//   [key: string]: any;
//   foo(): void;
// }

// type A = RemoveIndexSignature<Foo>  // expected { foo(): void }

// ```

import type { Equal, Expect } from "./utils";

type RemoveIndexSignature<Obj> = {
  [Key in keyof Obj as [Obj[Key]] extends [undefined] ? never : Key]: Obj[Key];
};

type yo = RemoveIndexSignature<Bar>;
type Foo = {
  [key: string]: any;
  foo(): void;
};

type Bar = {
  [key: number]: any;
  bar(): void;
  0: string;
};

const foobar = Symbol("foobar");
type FooBar = {
  [key: symbol]: any;
  [foobar](): void;
};

type Baz = {
  bar(): void;
  baz: string;
};

type cases = [
  Expect<Equal<RemoveIndexSignature<Foo>, { foo(): void }>>,
  Expect<Equal<RemoveIndexSignature<Bar>, { bar(): void; 0: string }>>,
  Expect<Equal<RemoveIndexSignature<FooBar>, { [foobar](): void }>>,
  Expect<Equal<RemoveIndexSignature<Baz>, { bar(): void; baz: string }>>
];
