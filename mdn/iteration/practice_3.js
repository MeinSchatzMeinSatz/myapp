// continue로 반복 건너뛰기

let num = input.value;

for (let i = 1; i <= num; i++) {
    let sqRoot = Math.sqrt(i);
    if (Math.floor(sqRoot) !== sqRoot) {
        continue;
    }

    para.textContent += i + " ";
}