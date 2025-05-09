const arr = [9, 2, 3, 4, 5];

arr.length = 3;

console.log(arr);

//희소배열의 개념

arr.length = 7;

console.log(arr); // [9, 2, 3, <4 empty items>
//-> 이처럼 배열의 요소가 연속적으로 위치하지 않고 일부가 비어 있는 배열을 희소 배열이라고 한다.
// 자바스크립트는 희소 배열을 문법적으로 허용한다.
// 희소 배열은 사용하지 않는게 좋다.