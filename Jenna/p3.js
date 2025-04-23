// 사과가 10개 있습니다. 친구가 3명 있습니다.
// 각 친구가 몇 개씩 받을 수 있는지 계산하여 출력하세요.
// 변수: totalApples, friends, applesPerFriend

var totalApples = 10;
var friends = 3;
var applesPerFriend = Math.floor(totalApples / friends);
console.log(applesPerFriend);

var applesPerFriend = parseInt(totalApples / friends);
console.log(applesPerFriend);

console.log(parseInt(-3.7));
console.log(Math.floor(-3.7));
