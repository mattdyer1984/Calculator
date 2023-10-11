const container = document.querySelectorAll(".container");
const display = document.querySelector("#display");
const btns = document.querySelectorAll("button");
const submit = document.querySelector("#submit");
const clear = document.querySelector("#clear");

function reloadDOM() {
  location.reload();
}

for (let i of btns) {
  i.addEventListener("click", function () {
    const currentValue = display.innerHTML;
    const newValue = currentValue + this.value;

    if (newValue.length <= 10) {
      display.innerHTML = newValue;
    }
  });
}

submit.addEventListener("click", function () {
  htmlContent = display.innerHTML;
  const result = calculateLeftToRight(htmlContent);
  display.innerHTML = result;
});

clear.addEventListener("click", () => {
  display.innerHTML = "";
});

function calculateLeftToRight(htmlContent) {
  const numbers = htmlContent.split(/\+|\-|\*|\//);
  const operators = htmlContent.replace(/\d+/g, "").split("").filter(Boolean);
  console.log(numbers);
  console.log(operators);
  let result = parseFloat(numbers[0]);

  for (let i = 0; i < operators.length; i++) {
    const nextNumber = parseFloat(numbers[i + 1]);
    if (operators[i] === "+") {
      result += nextNumber;
    } else if (operators[i] === "-") {
      result -= nextNumber;
    } else if (operators[i] === "*") {
      result *= nextNumber;
    } else if (operators[i] === "/") {
      result /= nextNumber;
    }
  }

  if (Number.isInteger(result)) {
    return result.toString();
  } else {
    return result.toFixed(5);
  }
}
