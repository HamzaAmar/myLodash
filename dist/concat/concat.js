"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concat = void 0;
var concat = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var arr = [];
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var val = args_1[_a];
        if (Array.isArray(val)) {
            arr.push.apply(arr, val);
            continue;
        }
        arr.push(val);
    }
    return arr;
};
exports.concat = concat;
console.log(exports.concat([1], 2, [3], [[4]]));
//# sourceMappingURL=concat.js.map