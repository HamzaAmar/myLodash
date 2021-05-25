import { chunck } from "./chunk";
test("chunck ([1, 3, 4, 5, 6, 7] , 2) to be [   [1, 3],[4, 5],[6, 7]]", () => {
  expect(chunck([1, 3, 4, 5, 6, 7], 2)).toStrictEqual([
    [1, 3],
    [4, 5],
    [6, 7],
  ]);
});
