import { Equal, Expect } from "../../utils";

type First<T extends any[]> = T extends [infer F, ...any[]] ? F : never;

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>
];
