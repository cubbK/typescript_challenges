// Implement a generic `RequiredByKeys<T,  K>` which takes two type argument `T` and `K`.

// `K` specify the set of properties of `T` that should set to be required. When `K` is not provided, it should make all properties required just like the normal `Required<T>`.

// For example

// ```typescript
// interface User {
//   name?: string
//   age?: number
//   address?: string
// }
// type UserRequiredName = RequiredByKeys<User, 'name'> // { name: string; age?: number; address?: string }

import type { Equal, Expect } from "./utils";

interface User {
  name?: string;
  age?: number;
  address?: string;
}

interface UserRequiredName {
  name: string;
  age?: number;
  address?: string;
}

interface UserRequiredNameAndAge {
  name: string;
  age: number;
  address?: string;
}

type Merge<Obj extends object> = {
  [Key in keyof Obj]: Obj[Key];
};

type RequiredByKeys<
  Obj extends object,
  RequiredKeys extends keyof Obj = keyof Obj
> = Merge<
  {
    [Key in keyof Obj as Key extends RequiredKeys ? Key : never]-?: Obj[Key];
  } & {
    [Key in keyof Obj as Key extends RequiredKeys ? never : Key]: Obj[Key];
  }
>;

type yo = RequiredByKeys<User, "name">;

type cases = [
  Expect<Equal<RequiredByKeys<User, "name">, UserRequiredName>>,
  Expect<Equal<RequiredByKeys<User, "name" | "age">, UserRequiredNameAndAge>>,
  Expect<Equal<RequiredByKeys<User>, Required<User>>>,
  // @ts-expect-error
  Expect<Equal<RequiredByKeys<User, "name" | "unknown">, UserRequiredName>>
];
