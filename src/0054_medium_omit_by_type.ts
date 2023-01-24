// From ```T```, pick a set of properties whose type are not assignable to ```U```.

// For Example

// ```typescript
// type OmitBoolean = OmitByType<{
//   name: string
//   count: number
//   isReadonly: boolean
//   isEnable: boolean
// }, boolean> // { name: string; count: number }
// ```

import type { Equal, Expect } from "./utils";

interface Model {
  name: string;
  count: number;
  isReadonly: boolean;
  isEnable: boolean;
}

type OmitByType<Obj extends object, TypeToOmit> = {
  [Key in keyof Obj as Obj[Key] extends TypeToOmit ? never : Key]: Obj[Key];
};

type yo = OmitByType<Model, boolean>;

type cases = [
  Expect<Equal<OmitByType<Model, boolean>, { name: string; count: number }>>,
  Expect<
    Equal<
      OmitByType<Model, string>,
      { count: number; isReadonly: boolean; isEnable: boolean }
    >
  >,
  Expect<
    Equal<
      OmitByType<Model, number>,
      { name: string; isReadonly: boolean; isEnable: boolean }
    >
  >
];
