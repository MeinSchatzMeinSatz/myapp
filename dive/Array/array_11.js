// 배열 요소의 추가와 갱신

//-> 객체에 프로퍼티를 동적으로 추가할 수 있는 것처럼 배열에도 요소를 동적으로 추가할 수 있다.
// 존재하지 않는 인덱스를 사용해 값을 할당하면 새로운 요소가 추가된다.
// 이때 length 프로퍼티 값은 자동 갱신된다.

const arr = [0];

console.log(arr);
console.log(arr.length);
// 배열 요소의 추가
arr[1] = 1;

console.log(arr);
console.log(arr.length);

// 현재 배열의 length 프로퍼티 값보다 큰 인덱스로 새로운 요소를 추가하면 희소 배열이 된다.
arr[100] = 100;

console.log(arr);
console.log(arr.length);

//오오? 지울떈 하나만 지워지네?
/*arr.pop()

console.log(arr);*/

// 인덱스로 요소에 접근하여 명시적으로 값을 할당하지 않은 요소는 생성되지 않는다는 것에 주의하자.
console.log(Object.getOwnPropertyDescriptors(arr));

// 이미 존재하는 요소에 값을 재할당하면 요소값이 갱신된다.
arr[1] = 10;

console.log(arr);

// 원본 배열을 직접 변경하는 메서드는 외부 상태를 직접 변경하는 부수 효과가 있으므로 사용 시 주의해야 한다.
// 따라서 가급적 원본 배열을 직접 변경하지 않는 메서드를 사용하는 편이 좋다.