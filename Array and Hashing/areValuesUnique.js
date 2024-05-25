function areValuesUnique(arr) {
    let set = new Set(arr);
    return set.size === arr.length
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 2, 2, 3, 4];

console.log(areValuesUnique(array1)); // Output: true
console.log(areValuesUnique(array2)); // Output: false