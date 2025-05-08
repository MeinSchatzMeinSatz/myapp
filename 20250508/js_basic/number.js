// 짝수와 홀수 구분하기
// 
function calculator (a) {
    if (typeof a !== "number") {
        console.log("숫자가 아닙니다.")
    }
    else if (a % 2 === 0) {
        console.log("짝입니다.");
    } else {
        console.log("홀입니다.");
    }
}

calculator(3);
calculator(4);
calculator("숫자");
calculator("3");
