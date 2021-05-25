export const concat = (...args: any[]) => {
  const arr = [];
  for (let val of args) {
    if (Array.isArray(val)) {
      arr.push(...val);
      continue;
    }
    arr.push(val);
  }
  return arr;
};

// console.log(concat([1], 2, [3], "hlleo", [[4]]));
