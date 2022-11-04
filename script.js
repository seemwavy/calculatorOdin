const btn = document.getElementById("calculatorGrid");
const display = document.getElementById("display");
const miniscreen = document.getElementById("miniScreen")
const equals = document.getElementById("evaluate")
const numbers = document.querySelectorAll(".Nbuttons");
const clear = document.getElementById("clear");
const add = document.getElementById("plus");
const sub = document.getElementById("subtract");
const multi = document.getElementById("multiply");
const divi = document.getElementById("divide");
const operators = document.querySelectorAll(".operators");
const nums = document.getElementById("nums")
numbers.values  = nums.textContent
setNums();
const expression = {
  a: 0,
  operand: 0,
  b: 0,
  result: 0
};
function expressionMaker(keyValue) {
  const concat = (a, b) => {
    return ("" + a + b)
  };
  if ((expression.a == 0) || (expression.operand == 0)) {
    if (expression.a == 0) {
       expression.a = keyValue
    }
    else if (expression.a > 0) {
      expression.a = concat(expression.a, keyValue)
    }
    display.innerHTML = expression.a
  }
  else if ((expression.a > 0) && (expression.operand !== 0)) {
    if (expression.b == 0) {
      expression.b = keyValue
    }
    else {
      expression.b = concat(expression.b, keyValue)
    }
    display.innerHTML = expression.b
    }
  else {
    null
  }
}
function evaluate() {
  if (expression.operand == "+") {
    expression.result = (+expression.a) + (+expression.b)
  }
  else if (expression.operand == "-") {
    expression.result = (+expression.a) - (+expression.b)
  }
  else if (expression.operand == "x") {
    expression.result = (+expression.a) * (+expression.b)
  }
  else if (expression.operand == "/") {
    expression.result = (+expression.a) / (+expression.b)
  }
  else {
    return null
  }
  display.innerHTML = expression.result
  return expression.result
}

clear.addEventListener("click", () => {
  clearOut()
})
equals.addEventListener("click", () => {
  evaluate(expression.a, expression.b)
})

function setNums() {
  let nums = document.getElementById("nums")
  numbers.values  = nums.textContent
};

function clearOut() {
   display.textContent = 0
   expression.a = 0
   expression.operand = 0
   expression.b = 0
   expression.result = 0

};
clear.addEventListener("click", function() {
    clearOut();
});
add.addEventListener("click", () => {
  expression.operand = "+"
  display.innerHTML = "+"
})
sub.addEventListener("click", () => {
  expression.operand = "-"
  display.innerHTML = "-"
}) 
multi.addEventListener("click", () => {
  expression.operand = "x"
  display.innerHTML = "x"
})
divi.addEventListener("click", () => {
  expression.operand = "/"
  display.innerHTML = "/"
})
numbers.forEach(function(element) {
    element.addEventListener("click", function(event) {
        var key = event.target
        let keyValue = key.textContent
        if (expression.result == 0) {
        expressionMaker(keyValue)
        }
        else {
          expression.a = expression.result
          expression.b = 0
          expression.result = 0
          expressionMaker(keyValue)
        }
    });
});