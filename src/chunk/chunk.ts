// this is the first solution i come with

export const chunck = (arr: any[], size: number) => {
  let count = 1;
  let childArr = [],
    parentArr = [];
  const removeFalsyValue = arr.filter((val) => val);

  for (let value of removeFalsyValue) {
    if (count === size) {
      count = 1;
      childArr.push(value);
      parentArr.push(childArr);
      childArr = [];
    } else {
      childArr.push(value);
      count++;
    }
  }
  return parentArr;
};

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

console.log(chunck([1, 2, 3, 4, 5, 6], 2));
// console.log(chunkWithReduce([1, 2, 3, 4, 5, 6], 2));
