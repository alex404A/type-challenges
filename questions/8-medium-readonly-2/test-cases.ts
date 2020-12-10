import { Equal, Expect } from "../../utils";

type Combine<T> = { [k in keyof T]: T[k] };
type MyReadonly2<T, K extends keyof T = keyof T> = Combine<
  T & { readonly [S in K]: T[S] }
>;

type cases = [
  Expect<Equal<MyReadonly2<Todo1>, Readonly<Todo1>>>,
  Expect<Equal<MyReadonly2<Todo1, "title" | "description">, Expected>>
];

interface Todo1 {
  title: string;
  description?: string;
  completed: boolean;
}

interface Expected {
  readonly title: string;
  readonly description?: string;
  completed: boolean;
}
