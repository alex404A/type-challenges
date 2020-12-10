import { Equal, Expect } from "../../utils";

type TupleToUnion<T extends any[]> = T[number];
type TupleToUnion2<T extends any[]> = T extends Array<infer ITEMS>
  ? ITEMS
  : never;

type cases = [
  Expect<Equal<TupleToUnion<[123, "456", true]>, 123 | "456" | true>>,
  Expect<Equal<TupleToUnion2<[123]>, 123>>
];
