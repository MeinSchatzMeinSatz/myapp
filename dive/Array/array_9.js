//  Array.of 매서드
// ->전달된 인수를 요소로 갖는 배열을 생성한다.

console.log(Array.of(1));
console.log(Array.of(1, 2, 3));
console.log(Array.of('string'));

//  Array.from 메서드
// ->유사 배열 객체 또는 이터러블 객체를 인수로 전달받아 배열로 변환하여 반환한다.
// + 이터러블이란 반복가능한? -> for... of 문으로 순회할 수 있어.
// + 유사 배열 객체 -> 배열처럼 인덱스로 프로퍼티에 접근할 수 있고, length 프로퍼티를 갖는 객체를 의미

console.log(Array.from({ length: 2, 0: 'a', 1: 'b'}));

console.log(Array.from('Hello'));

console.log(Array.from({length: 3}));
// 신기방기
console.log(Array.from({length: 3}, (_, i) => i));