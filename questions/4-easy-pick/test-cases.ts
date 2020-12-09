import { Equal, Expect } from "../../utils";

type MyPick<K, U extends keyof K> = { [S in U]: K[S] };

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, "title">>>,
  Expect<Equal<Expected2, MyPick<Todo, "title" | "completed">>>
];

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
}

interface Expected2 {
  title: string;
  completed: boolean;
}
