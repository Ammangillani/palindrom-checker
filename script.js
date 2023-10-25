function isPalindrome(text) {
  text = text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return text === text.split("").reverse().join("");
}

document.getElementById("button").addEventListener("click", function () {
  const userInput = document.getElementById("input").value;
  const resultElement = document.getElementById("button");
  const para = document.getElementById("para");

  if (userInput === "") {
    resultElement.textContent = "Please enter a word or phrase.";
  } else if (isPalindrome(userInput)) {
    para.textContent = `Yes, ${userInput} is a palindrome`;
  } else {
    para.textContent = `Noo, ${userInput} is not a palindrome`;
  }
});
