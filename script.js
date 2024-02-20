const textInputElement = document.getElementById("text-input");
const resultElement = document.getElementById("result");
const checkButton = document.getElementById("check-btn");

checkButton.addEventListener("click", () => {
  if (textInputElement.value === "") {
    alert("Please input a value");
  } else {
    showResult();
  }
})

let result = isInputEmpty();
console.log(result);

function isSentencePalindrome(str) {
  const re = /[^a-zA-Z0-9]/g;
  const alphanumericString = str.replaceAll(re, "").toLowerCase().split("").join("");
  const reversedAlphanumericString = str.replaceAll(re, "").toLowerCase().split("").reverse().join("");
  if (alphanumericString === reversedAlphanumericString) {
    return true;
  } else {
    return false;
  }
};

function showResult() {
  if (isSentencePalindrome(textInputElement.value)) {
    resultElement.innerHTML = `<span class="bold">${textInputElement.value}</span> is a palindrome.`
  } else {
    resultElement.innerHTML = `<span class="bold">${textInputElement.value}</span> is not a palindrome.`
  };
  resultElement.style.display = "block";
  return;
}