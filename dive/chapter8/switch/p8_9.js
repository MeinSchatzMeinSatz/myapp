// break 문을 생략한 폴스루가 유용한 경우도 있다. 다음 예제와 같이 폴스루를 활용해 여러 개의 case 문을 하나의 조건으로 사용할 수도 있다.
// 다음은 윤년인지 판별해서 2월의 일수를 계산하는 예제다.

var year = 2000;
var month =2;
var days = 0;

switch (month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        days = 31;
        break;
    case 4: case 6: case 9: case 11:
        days = 30;
        break;
    case 2:
        // 윤년 계산 알고리즘
        // 1. 연도가 4로 나누어떨어지는 해(2000, 2004, 2008, 2012, 2016, 2020 ...)는 윤년이다.
        // 2. 연도가 4로 나누어떨어지더라도 연도가 100으로 나누어떨어지는 해 (2000, 2100, 2200...)는 평년이다.
        // 3. 연도가 400으로 나누어떨어지는 해(2000, 2400, 2800...)는 윤년이다.
        days = ((year % 4 === 0 && year % 100!== 0) || (year % 400 === 0)) ? 29 : 28;
        break;
        default:
            console.log('Invalid month');
}

console.log(days); // 29