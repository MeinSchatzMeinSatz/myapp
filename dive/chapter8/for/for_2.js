for (var i = 1; i >= 0; i--) {
    console.log(i);
}

// 무한루프? 어떻게 하는겨?
// for (;;) { ... }

//주사위 합이 6이 되는 조합찾기
for (var i = 1; i <= 6; i++) {
    for (var j = 1; j <= 6; j++) {
        if (i + j === 6) console.log(`[${i}, ${j}]`);
    }
}