const arr = new Array(10);

console.log(arr); // [empty x10]
console.log(arr.length); // 10

console.log(Object.getOwnPropertyDescriptors(arr));

//empty 값이 있는 배열에 push 해보기
arr.push(1, 3, 5, 6, 9)

console.log(arr); // [ <10 empty items>, 1, 3, 5, 6, 9 ]

//전달된 인수가 없는 경우 빈 배열을 생성한다. 즉, 배열 리터럴 []과 같다.
console.log(new Array());

console.log(new Array(1, 2, 3));

// new 연산자와 함께 호출하지 않더라도, 즉 일반 함수로서 호출을 해도 배열을 생성하는
// 생성자 함수로 동작한다.
console.log(Array(1, 2, 3))
