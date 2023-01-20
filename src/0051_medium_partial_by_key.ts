// Implement a generic `PartialByKeys<T, K>` which takes two type argument `T` and `K`.

// `K` specify the set of properties of `T` that should set to be optional. When `K` is not provided, it should make all properties optional just like the normal `Partial<T>`.

// For example

// ```typescript
// interface User {
//   name: string
//   age: number
//   address: string
// }
// type UserPartialName = PartialByKeys<User, 'name'> // { name?:string; age:number; address:string }
// ```

import type { Equal, Expect } from "./utils";

interface User {
  name: string;
  age: number;
  address: string;
}

interface UserPartialName {
  name?: string;
  age: number;
  address: string;
}

interface UserPartialNameAndAge {
  name?: string;
  age?: number;
  address: string;
}

type Merge<Obj extends object> = {
  [Key in keyof Obj]: Obj[Key];
};

type PartialByKeys<
  Obj extends object,
  KeysToMakeOptional extends string | number | symbol = keyof Obj
> = Merge<
  {
    [Key in KeysToMakeOptional]?: Key extends keyof Obj ? Obj[Key] : never;
  } & {
    [Key in keyof Obj as Key extends KeysToMakeOptional
      ? never
      : Key]: Obj[Key];
  }
>;

type yo = PartialByKeys<User, "name">;

type cases = [
  Expect<Equal<PartialByKeys<User, "name">, UserPartialName>>,
  Expect<Equal<PartialByKeys<User, "name" | "age">, UserPartialNameAndAge>>,
  Expect<Equal<PartialByKeys<User>, Partial<User>>>,
  // @ts-expect-error
  Expect<Equal<PartialByKeys<User, "name" | "unknown">, UserPartialName>>
];
