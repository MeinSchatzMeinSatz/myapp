// 배열의 요소를 참조할 때에는 대괄호[] 표기법을 사용한다. 대괄호 안에는 인덱스가 와야 한다.
// 정수로 평가되는 표현식이라면 인덱스 대신 사용할 수 있다. 인덱스는 값을 참조할 수 있다는 의미에서
// 객체의 프로퍼티 키와 같은 역할을 한다.

const arr = [1, 2];

console.log(arr[0]);
console.log(arr[1]);

//존재하지 않는 요소에 접근하면 undefined가 반환된다.
const arr2 = [1, 2];

console.log(arr2[2]);

//배열이란 사실 인덱스를 나타내는 문자열을 프로퍼티 키로 갖는 객체다.
//따라서 존재하지 않는 프로퍼티 키로 객체의 프로퍼티에 접근했을 때 undefined를 반환하는 것처럼 
//배열도 존재하지 않는 요소를 참조하면 undefined를 반환한다.

//같은 이유로 희소 배열의 존재하지 않는 요소를 참조해도 undefined가 반환된다.

// 희소 배열
const arr3 = [1, , 3];

console.log(Object.getOwnPropertyDescriptors(arr3));

console.log(arr3[1]);
console.log(arr3[3]);