// From `T`, pick a set of properties whose type are assignable to `U`.
// For Example

// ```typescript
// type OnlyBoolean = PickByType<{
//   name: string
//   count: number
//   isReadonly: boolean
//   isEnable: boolean
// }, boolean> // { isReadonly: boolean; isEnable: boolean; }
// ```

import type { Equal, Expect } from "./utils";

interface Model {
  name: string;
  count: number;
  isReadonly: boolean;
  isEnable: boolean;
}

type PickByType<Obj extends object, Type> = {
  [Key in keyof Obj as Obj[Key] extends Type ? Key : never]: Obj[Key];
};

type cases = [
  Expect<
    Equal<
      PickByType<Model, boolean>,
      { isReadonly: boolean; isEnable: boolean }
    >
  >,
  Expect<Equal<PickByType<Model, string>, { name: string }>>,
  Expect<Equal<PickByType<Model, number>, { count: number }>>
];
