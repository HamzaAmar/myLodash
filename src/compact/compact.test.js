import { compact } from "./compact";

test("remove all falsy value arr without falsy", () => {
  expect(compact([1, 3, 4, 5, 6, 7])).toStrictEqual([1, 3, 4, 5, 6, 7]);
  expect(compact(["a", true, {}])).toStrictEqual(["a", true, {}]);
});

test("remove all falsy value arr with falsy", () => {
  expect(compact([1, null, 3, false, 4, "", 5, 0, 6, 7])).toStrictEqual([
    1, 3, 4, 5, 6, 7,
  ]);
  expect(compact([0, false, false])).toStrictEqual([]);
});
