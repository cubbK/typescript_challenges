// If we have a type which is wrapped type like Promise. How we can get a type which is inside the wrapped type?

// For example: if we have `Promise<ExampleType>` how to get ExampleType?

// ```ts
// type ExampleType = Promise<string>

// type Result = MyAwaited<ExampleType> // string
import type { Equal, Expect } from "./utils";

type MyAwaited<T extends Promise<any>> = T extends Promise<infer R>
  ? R extends Promise<any>
    ? MyAwaited<R>
    : R
  : any;

type X = Promise<string>;
type Y = Promise<{ field: number }>;
type Z = Promise<Promise<string | number>>;
type Z1 = Promise<Promise<Promise<string | boolean>>>;

type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>,
  Expect<Equal<MyAwaited<Z1>, string | boolean>>
];

// @ts-expect-error
type error = MyAwaited<number>;
