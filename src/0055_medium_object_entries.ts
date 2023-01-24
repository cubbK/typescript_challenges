// Implement the type version of ```Object.entries```

// For example

// ```typescript
// interface Model {
//   name: string;
//   age: number;
//   locations: string[] | null;
// }
// type modelEntries = ObjectEntries<Model> // ['name', string] | ['age', number] | ['locations', string[] | null];
// ```

import type { Equal, Expect } from "./utils";

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type ModelEntries =
  | ["name", string]
  | ["age", number]
  | ["locations", string[] | null];

type ObjectEntries<Obj extends object> = {
  [Key in keyof Obj as number]: Obj[Key] extends
    | infer InferedTypeWithoutUndefined
    | undefined
    ? [Key, InferedTypeWithoutUndefined]
    : [Key, Obj[Key]];
}[0];
type yo = ObjectEntries<Partial<Model>>;

type cases = [
  Expect<Equal<ObjectEntries<Model>, ModelEntries>>,
  Expect<Equal<ObjectEntries<Partial<Model>>, ModelEntries>>,
  Expect<Equal<ObjectEntries<{ key?: undefined }>, ["key", undefined]>>,
  Expect<Equal<ObjectEntries<{ key: undefined }>, ["key", undefined]>>
];
