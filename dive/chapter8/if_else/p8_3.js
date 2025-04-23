// 대부분의 if...else문은 삼항 조건 연산자로 바꿔 쓸 수 있다.

var x = 2;
var result;

if (x%2) { // 2 % 2는 0이다. 이떄 0은 false로 암묵적 강제 변환된다.
    result = '홀수';
} else {
    result = '짝수';
}

console.log(result); // 짝수