var num = 2;
var kind;

//if문
if (num > 0) {
    kind = '양수'; //음수를 구별할 수 없다.
}
console.log(kind);

//if... else문
if (num > 0) { 
    kind = '양수';
}  else {
    kind = '음수'; // 0은 음수가 아니다.
}
console.log(kind); // 양수

//If...else if문
if (num > 0) {
    kind = '양수';
} else if (num < 0 ) {
    kind = '음수';
} else {
    kind = '영';
}
console.log(kind); //양수