const condition = ["+","-","*","/"];
const decimal = ".";
const zeroNumber = "0";
const doubleZeroNumber = "00";

let display = document.getElementById("display");
let first = "";
let second = "";
let result;
let operations;
let number;
let mark = "";
let id;

let numberButton = () => {
  number = document.getElementById(id).value;
  if (condition.includes(mark)){
    second += number;
    display.textContent = first + mark + second;
  } else {
    first += number;
    display.textContent = first;
  }
}

one.addEventListener("click", () =>{
  id = "one";
  numberButton();
});

two.addEventListener("click", () =>{
  id = "two";
  numberButton();
});

three.addEventListener("click", () =>{
  id = "three";
  numberButton();
});

four.addEventListener("click", () =>{
  id = "four";
  numberButton();
});

five.addEventListener("click", () =>{
  id = "five";
  numberButton();
});

six.addEventListener("click", () =>{
  id = "six";
  numberButton();
});

seven.addEventListener("click", () =>{
  id = "seven";
  numberButton();
});

eight.addEventListener("click", () =>{
  id = "eight";
  numberButton();
});

nine.addEventListener("click", () =>{
  id = "nine";
  numberButton();
});

zero.addEventListener("click", () =>{
  number = document.getElementById("zero").value;
  if (condition.includes(mark)){

    if(second.includes(decimal)){
      second += number;
      second = String(second)
      display.textContent = first + mark + second
    }else{
      second += number;
      second = Number(second);
      second = String(second);
      display.textContent = first + mark + second;
    } 

  } else if(first.includes(decimal)){
      first += number;
      first = String(first);
      display.textContent = first;
    }else{
      first += number;
      first = Number(first);
      first = String(first);
      display.textContent = first;
    }
});

doubleZero.addEventListener("click", () =>{
  number = document.getElementById("doubleZero").value;
  if (condition.includes(mark)){
    second += number;
    second = Number(second);
    second = String(second);
    display.textContent = first + mark + second;
  } else {
    first += number;
    first = Number(first);
    first = String(first);
    display.textContent = first;
  }
});


addition.addEventListener("click", () =>{
  operations = function(){
    return Number(first) + Number(second);
  }
  mark = "+";
  display.textContent = first + mark;
});

subtraction.addEventListener("click", () =>{
  operations = function(){
    return Number(first) - Number(second);
  }
  mark = "-";
  display.textContent = first + mark;
});

multiplication.addEventListener("click", () =>{
  operations = function(){
    return Number(first) * Number(second);
  }
  mark = "*";
  display.textContent = first + mark;
});

division.addEventListener("click", () =>{
  operations = function(){
    return Number(first) / Number(second);
  }
  mark = "/";
  display.textContent = first + mark;
});

point.addEventListener("click", () =>{
  if (first.includes(decimal)){
    
    if (second.includes(decimal)){
      ;
    }else if (condition.includes(mark)){
      
      if (second == ""){
      }else{
        second += ".";
        display.textContent = first + mark + second;
      }
    }
  
  }else if (condition.includes(mark)){
    second += ".";
    display.textContent = first + mark + second;
  }else{
    first += ".";
    display.textContent = first;
  }
})

allclear.addEventListener("click", () =>{
  first = "";
  second = "";
  display.textContent = 0;
  mark ="";
})

equal.addEventListener("click", () =>{
  if(condition.includes(mark)){
  result = operations();
  resultDecimal = Math.round(result * 10000000000) / 10000000000
  display.textContent = resultDecimal;
  first = String(resultDecimal);
  second = "";
  mark ="";
}else{
  display.textContent = first;
}
})
