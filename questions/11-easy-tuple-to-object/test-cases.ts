import { Equal, Expect } from "../../utils";

type TupleToObject<A extends ReadonlyArray<string | number>> = {
  [K in A[number]]: K;
};

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type cases = [
  Expect<
    Equal<
      TupleToObject<typeof tuple>,
      {
        tesla: "tesla";
        "model 3": "model 3";
        "model X": "model X";
        "model Y": "model Y";
      }
    >
  >
];
