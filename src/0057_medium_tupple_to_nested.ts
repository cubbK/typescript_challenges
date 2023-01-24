// Given a tuple type ```T``` that only contains string type, and a type ```U```, build an object recursively.

// ```typescript
// type a = TupleToNestedObject<['a'], string> // {a: string}
// type b = TupleToNestedObject<['a', 'b'], number> // {a: {b: number}}
// type c = TupleToNestedObject<[], boolean> // boolean. if the tuple is empty, just return the U type
// ```

import type { Equal, Expect } from "./utils";

type TupleToNestedObject<Arr extends string[], FinalType> = Arr extends [
  infer First extends string,
  ...infer Rest extends string[]
]
  ? { [Key in First]: TupleToNestedObject<Rest, FinalType> }
  : FinalType;

type cases = [
  Expect<Equal<TupleToNestedObject<["a"], string>, { a: string }>>,
  Expect<Equal<TupleToNestedObject<["a", "b"], number>, { a: { b: number } }>>,
  Expect<
    Equal<
      TupleToNestedObject<["a", "b", "c"], boolean>,
      { a: { b: { c: boolean } } }
    >
  >,
  Expect<Equal<TupleToNestedObject<[], boolean>, boolean>>
];
