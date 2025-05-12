//왜 작동 안하는겨 ㅠㅠ
const contacts = [
    "Chris: 2232322",
    "Sarah: 3453456",
    "Bill: 7654322",
    "Mary: 9998769",
    "Dianne: 9384975",
];
const para = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
    let searchName = input.value;
    input.value = "";
    input.focus();
    for (let i = 0; i < contacts.length; i++) {
        let splitContact = contacts[i].split(":");
        if (splitContact[0] === searchName) {
            para.textContent.Content = splitContact[0] + "'s number is" + splitContact [1] + "i";
            break;
        } else {
            para.textContent = "Contact not found.";
        }
    }
});