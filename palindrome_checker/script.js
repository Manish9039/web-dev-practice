const checkButton = document.getElementById("check-btn");
const inputText = document.getElementById("text-input");
const result = document.getElementById("result");
const letters = "abcdefghijklmnopqrstuvwxyz1234567890".split("");

const checkPalindrome = () => {
  if (!inputText || !inputText.value) {
    alert("Please input a value");
    return;
  }

  let text = inputText.value.toLowerCase();
  let textArray = text.split("");
  let newText = textArray.filter((letter) => letters.includes(letter));

  let reverseText = [];
  for (let char = 0; char < newText.length; char++) {
    reverseText.unshift(newText[char]);
  }

  result.innerHTML =
    newText.join("") === reverseText.join("")
      ? `${inputText.value} is a palindrome`
      : `${inputText.value} is not a palindrome`;

  document.getElementById("result").style.display = "block";
  document.getElementById("box2").style.height = "180px";
};

checkButton.addEventListener("click", checkPalindrome);
