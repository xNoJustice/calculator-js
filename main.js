// Variables
var main = document.getElementById("main");
var before = document.getElementById("before");
var num = "";
var memory = 0;

// Basic Functions
function mainvalue(x) {
  main.getAttributeNode("value").value = x;
}

function beforevalue(x) {
  document.getElementById("before").textContent = x;
}

function memoryvalue(x) {
  if (memory == 0) {
    document.getElementById("memory").textContent = x;
    beforevalue("");
  } else {
    document.getElementById("memory").textContent = "Hafıza = " + x;
  }
}

// Clear Functions
function clear2() {
  num = "";
  oldnum = null;
  beforevalue(num);
  mainvalue(num);
}

// Other Functions
function numkey(x) {
  num = num + String(x);
  mainvalue(x);
  beforevalue(num);
}

function operation(x) {
  if (x == "+") {
    if (num.charAt(num.length - 1) != "+") {
      num = num + "+";
      mainvalue(num);
      beforevalue(num);
    }
  } else if (x == "-") {
    if (num.charAt(num.length - 1) != "-") {
      num = num + "-";
      mainvalue(num);
      beforevalue(num);
    }
  } else if (x == "/") {
    if (num.charAt(num.length - 1) != "/") {
      num = num + "/";
      mainvalue(num);
      beforevalue(num);
    }
  } else if (x == "x") {
    if (num.charAt(num.length - 1) != "*") {
      num = num + "*";
      mainvalue(num);
      beforevalue(num);
    }
  } else if (x == ".") {
    if (num.charAt(num.length - 1) != ".") {
      num = num + ".";
      mainvalue(num);
      beforevalue(num);
    }
  } else if (x == "+-") {
    if (
      num.charAt(num.length - num.length) != "-" ||
      num.charAt(num.length - num.length) == "+"
    ) {
      if (num.charAt(num.length - num.length) == "+") {
        num = num.replace("+", "-");
        mainvalue(num);
        beforevalue(num);
      } else {
        num = "-" + num;
        mainvalue(num);
        beforevalue(num);
      }
    } else if (num.charAt(num.length - num.length) == "-") {
      if (num.charAt(num.length - num.length) != "+") {
        num = num.replace("-", "+");
        mainvalue(num);
        beforevalue(num);
      }
    }
  }
}

function calculate() {
  num = String(eval(num));
  mainvalue(num);
  beforevalue(num);
}

function square() {
  num = num + "*" + num;
  num = String(eval(num));
  mainvalue(num);
  beforevalue(num);
}

function square2() {
  num = String(Math.sqrt(num));
  mainvalue(num);
  beforevalue(num);
}

function back() {
  num =
    before.textContent.toString() === undefined
      ? ""
      : before.textContent.toString();
  num = num.substring(0, num.length - 1);
  mainvalue(num);
  beforevalue(num);
}

function percent() {
  num = num / 100;
  num = String(eval(num));
  mainvalue(num);
  beforevalue(num);
}

function reverse() {
  num = 1 / num;
  num = String(eval(num));
  mainvalue(num);
  beforevalue(num);
}

function mclear() {
  memory = 0;
  mainvalue("");
  memoryvalue("");
}

function mcome(x) {
  num = memory;
  mainvalue(memory);
  beforevalue(num);
}

function msave() {
  memory = main.getAttributeNode("value").value;
  num = "";
  mainvalue(num);
  memoryvalue(memory);
}

function madd() {
  num = num + "+" + memory;
  num = String(eval(num));
  mainvalue(num);
  beforevalue(num);
}

function mremove() {
  num = num + "-" + memory;
  num = String(eval(num));
  mainvalue(num);
  beforevalue(num);
}
