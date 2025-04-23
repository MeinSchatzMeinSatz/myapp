// 월을 영어로 변환한다. (!1 -> 'November')
var month = 11;
var monthName;

switch (month) {
    case 1: monthName = 'January';
    case 2: monthName = 'February';
    case 3: monthName = 'March';
    case 4: monthName = 'April';
    case 5: monthName = 'May';
    case 6: monthName = 'June';
    case 7: monthName = 'July';
    case 8: monthName = 'August';
    case 9: monthName = 'September';
    case 10: monthName = 'October';
    case 11: monthName = 'November';
    case 12: monthName = 'December';
    default: monthName = 'Invalid month';
}

console.log(monthName); // Invalid month

// 이러한 결과가 나온 이유는 case 문에 해당하는 문의 마지막에 break 문을 사용하지 않았기 때문이다. 
// break 키워드로 구성된 break 문은 코드 블록에서 탈출하는 역할을 한다. 
// break 문이 없다면 case 문의 표현식과 일치하지 않더라도 실행 흐름이 다음 ccase 문으로 연이어 이동한다.
// 따라서 올바른 switch 문은 p8_8과 같다.