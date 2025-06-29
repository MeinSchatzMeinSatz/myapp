let arr = [1, 2, 7, 10, 11];
let arr2 = [9, -1, 0];

function solution(array) {
    for (let i = 0; i < array.length / 2; i++) {
        array.splice(array.indexOf(Math.max(...array)), 1);
    }

    return Math.max(...array);
}

console.log(solution(arr));
console.log(solution(arr2));
