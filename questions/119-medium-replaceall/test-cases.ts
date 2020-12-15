import { Equal, Expect } from "../../utils";

type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = S extends `${infer U}${From}${infer V}`
  ? From extends ""
    ? `${U}${From}${V}`
    : ReplaceAll<`${U}${To}${V}`, From, To>
  : S;

type cases = [
  Expect<Equal<ReplaceAll<"foobar", "bar", "foo">, "foofoo">>,
  Expect<Equal<ReplaceAll<"foobarbar", "bar", "foo">, "foofoofoo">>,
  Expect<Equal<ReplaceAll<"t y p e s", " ", "">, "types">>,
  Expect<Equal<ReplaceAll<"foobarbar", "", "foo">, "foobarbar">>,
  Expect<Equal<ReplaceAll<"barfoo", "bar", "foo">, "foofoo">>,
  Expect<Equal<ReplaceAll<"", "", "">, "">>
];
