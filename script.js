"use strict";

const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

const checkIfPalindrome = () => {
  if (!textInput.value) {
    alert("Please input a value");
    return;
  }
  result.innerText = "";
  const formattedText = textInput.value.replace(
    /[.,\/#!$%\^&\*;:{}=\-_`~()\s+]/g,
    ""
  );
  const reverseStr = formattedText.split("").reverse().join("");

  if (formattedText.toLowerCase() === reverseStr.toLowerCase()) {
    result.innerHTML = `<span><b>${textInput.value}</b> is a palindrome.</span>`;
  } else {
    result.innerHTML = `<span><b>${textInput.value}</b> is not a palindrome.</span>`;
  }

  textInput.value = "";
};

checkButton.addEventListener("click", checkIfPalindrome);
