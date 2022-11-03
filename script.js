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
let nums = document.getElementById("nums")
numbers.values  = nums.textContent
const calculate = (() => {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;
  return {
    add,
    sub,
    mul,
    div,
  };
});
const expression = {
  a: 0,
  operand: 0,
  b: 0,
};
function expressionMaker(keyValue) {
  const concat = (a, b) => {
    return ("" + a + b)
  };
  if (EventTarget == numbers && expression.a == 0 || expression.operand == 0) {
    if (expression.a == 0) {
       expression.a = keyValue
    }
    else if (expression.a > 0) {
      expression.a = concat(expression.a, keyValue)
    }
    display.innerHTML = expression.a
  }
  else if ((EventTarget == numbers) && (expression.a > 0) && (expression.operand !== 0)) {
    if (expression.b == 0) {
      expression.b = keyValue
    }
    else {
      expression.b = concat(expression.b, keyValue)
    }
    }
  else {
    null
  }
}
function evaluate() {
  var result 
  if (expression.operand == "+") {
    var result = calculate.add(expression.a, expression.b)
  }
  else if (expression.operand == "-") {
    result = calculate.sub(expression.a, expression.b)
  }
  else if (expression.operand == "x") {
    result = calculate.mul(expression.a, expression.b)
  }
  else if (expression.operand == "/") {
    result = calculate.div(expression.a,  expression.b)
  }
  else {
    return null
  }
  display.innerHTML = result
  return result
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
setNums();
function clearOut() {
   display.textContent = 0
   expression.a = 0
   expression.operand = 0
   expression.b = 0

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
        expressionMaker(keyValue)
    });
});
//equals.addEventListener("click", eval)
//Finished code above, iffy not done code below

//Testing  section below vvvvv

/*function appendNumber(number) {
    if (screen.textContent === '0' || false )
      clearOut()
    screen.textContent += number
  }*/

//testing ^^^^
 
//evaluation functionality 

  
 // how to use: calculator.add(3,5); // 8
  //calculator.sub(6,2); // 4
 // calculator.mul(14,5534); // 7747

/*function operate (num1, num2, operator) {
    return screen.innerHTML = (num1 operator num2)
}
*/
