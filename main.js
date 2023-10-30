let input = document.getElementById("number-input");

input.addEventListener("input", () => {
  let inputValue = parseInt(input.value);
  input.placeholder = "";
  if (inputValue < 0 || inputValue > 11) {
    input.style.color = "black";
    if (inputValue < 0) {
      input.placeholder = "Talet är för lågt!";
    } else {
      input.placeholder = "Talet är för högt!";
    }
    input.value = "";
  } else if (inputValue < 4) {
    input.style.color = "red";
  } else if (inputValue >= 4 && inputValue < 7) {
    input.style.color = "yellow";
  } else if (inputValue > 7) {
    input.style.color = "green";
  }
});
