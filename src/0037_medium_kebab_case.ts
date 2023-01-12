// Replace the `camelCase` or `PascalCase` string with `kebab-case`.

// `FooBarBaz` -> `foo-bar-baz`

// For example

// ```ts
// type FooBarBaz = KebabCase<"FooBarBaz">;
// const foobarbaz: FooBarBaz = "foo-bar-baz";

// type DoNothing = KebabCase<"do-nothing">;
// const doNothing: DoNothing = "do-nothing";
// ```

import type { Equal, Expect } from "./utils";

type Trim<Str extends string> = Str extends `-${infer Rest}${infer MoreRest}`
  ? `${Rest}${MoreRest}`
  : Str;

type KebabCaseBase<Str extends string> =
  Str extends `${infer First}${infer Rest}`
    ? Uncapitalize<First> extends First
      ? `${First}${KebabCaseBase<Rest>}`
      : `-${Uncapitalize<First>}${KebabCaseBase<Rest>}`
    : "";

type KebabCase<Str extends string> = Trim<KebabCaseBase<Str>>;

type yo = KebabCase<"FooBarBaz">;

type cases = [
  Expect<Equal<KebabCase<"FooBarBaz">, "foo-bar-baz">>,
  Expect<Equal<KebabCase<"fooBarBaz">, "foo-bar-baz">>,
  Expect<Equal<KebabCase<"foo-bar">, "foo-bar">>,
  Expect<Equal<KebabCase<"foo_bar">, "foo_bar">>,
  Expect<Equal<KebabCase<"Foo-Bar">, "foo--bar">>,
  Expect<Equal<KebabCase<"ABC">, "a-b-c">>,
  Expect<Equal<KebabCase<"-">, "-">>,
  Expect<Equal<KebabCase<"">, "">>,
  Expect<Equal<KebabCase<"😎">, "😎">>
];
