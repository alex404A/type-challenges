import { Equal, Expect } from "../../utils";

type Replace<
  S extends string,
  From extends string,
  To extends string
> = S extends `${infer U}${From}${infer V}`
  ? From extends ""
    ? `${U}${From}${V}`
    : `${U}${To}${V}`
  : S;

type cases = [
  Expect<Equal<Replace<"foobar", "bar", "foo">, "foofoo">>,
  Expect<Equal<Replace<"foobarbar", "bar", "foo">, "foofoobar">>,
  Expect<Equal<Replace<"foobarbar", "", "foo">, "foobarbar">>,
  Expect<Equal<Replace<"", "", "">, "">>
];
