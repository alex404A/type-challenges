import { Equal, Expect } from "../../utils";

type If<A extends boolean, B, C> = A extends true ? B : C;

type cases = [
  Expect<Equal<If<true, "a", "b">, "a">>,
  Expect<Equal<If<false, "a", 2>, 2>>
];

// @ts-expect-error
type error = If<null, "a", "b">;
