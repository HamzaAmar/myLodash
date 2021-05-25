"use strict";
// this is the first solution i come with
Object.defineProperty(exports, "__esModule", { value: true });
exports.chunck = void 0;
var chunck = function (arr, size) {
    var count = 1;
    var childArr = [], parentArr = [];
    var removeFalsyValue = arr.filter(function (val) { return val; });
    for (var _i = 0, removeFalsyValue_1 = removeFalsyValue; _i < removeFalsyValue_1.length; _i++) {
        var value = removeFalsyValue_1[_i];
        if (count === size) {
            count = 1;
            childArr.push(value);
            parentArr.push(childArr);
            childArr = [];
        }
        else {
            childArr.push(value);
            count++;
        }
    }
    return parentArr;
};
exports.chunck = chunck;
// try to make the same with reducer
// const chunkWithReduce = (arr: any[], size: number) => {
//   const counter = 0;
//   const arr =
//   const newArr = arr.reduce((cur, acc) => {
//     if (size === counter) {
//       childArr.push(value);
//     }
//     cur.push(acc);
//     console.log(cur, acc);
//     return cur;
//   }, []);
// };
console.log(exports.chunck([1, 2, 3, 4, 5, 6], 2));
// console.log(chunkWithReduce([1, 2, 3, 4, 5, 6], 2));
//# sourceMappingURL=chunk.js.map