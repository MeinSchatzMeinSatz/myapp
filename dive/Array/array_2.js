const arr = [1, 2, 3];

console.log(arr.constructor === Array); // true
console.log(Object.getPrototypeOf(arr) === Array.prototype);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}