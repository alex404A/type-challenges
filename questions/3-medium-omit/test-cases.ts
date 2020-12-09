import { Equal, Expect } from "../../utils";

type MyExclude<A, B> = A extends B ? never : A;
type MyOmit<K, U extends keyof K> = { [S in MyExclude<keyof K, U>]: K[S] };

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, "description">>>,
  Expect<Equal<Expected2, MyOmit<Todo, "description" | "completed">>>
];

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
  completed: boolean;
}

interface Expected2 {
  title: string;
}
