import { O, L } from "ts-toolbelt";

const obj = {
  rootKey1: {
    secondaryKey1: {
      tertiaryKey1: "yo1",
      tertiaryKey2: "yo1",
    },
  },
  rootKey2: {
    secondaryKey2: {
      tertiaryKey2: "yo2",
    },
  },
  rootKey3: "yo3",
  rootKey4: {
    secondaryKey4: "yo4",
  },
} as const;

type Concat<Tupple> = Tupple extends [infer First, ...infer Rest]
  ? First
  : never;

type ExtractPaths<
  T extends Record<string, unknown>,
  Key = keyof T
> = Key extends string
  ? T[Key] extends Record<string, unknown>
    ? `${Key}-${ExtractPaths<T[Key]>}`
    : Key
  : never;

type Variant2 = ExtractPaths<typeof obj>;
