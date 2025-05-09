function linearSearch(array, target) {
 const length = array.length;

 // for 문 
 // 변수선언 -> 조건문 -> 코드블록 -> 증감식 -> 조건문 (...) false 나올때까지 
 for (let i = 0; i < length; i++) {
    if (array[i] === target) return i;
 }

 return -1;
}

console.log(linearSearch([1, 2, 3, 4, 5, 6], 3));
console.log(linearSearch([1, 2, 3, 4, 5, 6], 0));