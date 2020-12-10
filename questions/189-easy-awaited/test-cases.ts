import { Equal, Expect } from "../../utils";

type X = Promise<string>;
type Y = Promise<{ field: number }>;

type Awaited<T> = T extends Promise<infer U> ? U : T;

type cases = [
  Expect<Equal<Awaited<X>, string>>,
  Expect<Equal<Awaited<Y>, { field: number }>>
];
