import { concat } from "./concat";

test("concat only value", () => {
  expect(concat(1, 3, 4, 5, 6, 7)).toStrictEqual([1, 3, 4, 5, 6, 7]);
  expect(concat("a", true, {})).toStrictEqual(["a", true, {}]);
});

test("concat with mixed values", () => {
  expect(concat([1], [3], [4, 0, 6, 7], 3)).toStrictEqual([
    1, 3, 4, 0, 6, 7, 3,
  ]);
});
