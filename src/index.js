function createEventListener() {
  let count = 0;
  function a() {
    console.log("hii");
  }
  var t = function () {
    document
      .getElementById("clickMe")
      .addEventListener("click", function xyz() {
        //when event click occurs, this callback function (xyz) is called into callstack
        console.log("Button clicked", ++count);
        function b() {
          console.log("hello");
        }
        let res2 = window.setTimeout(a, 3000);
        let res = window.setTimeout(b, 3000);
        let startDate = new Date().getTime();
        let futureTime = startDate;
        while (futureTime < startDate + 10000) {
          futureTime = new Date().getTime();
        }
        console.log("expired");
      });
  };
  // t();
  let res3 = window.setTimeout(t, 5000);
}
function hii() {
  console.log("hii");
}

// createEventListener();
// hii();



// javascript runtime environment

// 1. Code  2. Parser  3. Compiler  4. Execution


// Higher order functions 

// function x(){
//   console.log("callback function");
// }

// function y(x){
//   console.log("higher order function");
//   x();
// }

// y();

const radius = [1,2,3,4,5,6,7,8,9,10];
let formula;
const calculate = function (radius, formula) {
   const res = [];
   for (let i=0 ; i<radius.length; i++){
    res.push(radius[i]*formula);
   }
   return res;
}
formula = 2;
console.log(calculate(radius,formula));
formula = 2*Math.PI;
console.log(calculate(radius,formula));
formula = Math.PI;
const radius2 = radius;
for (let i=0 ; i<radius.length; i++){
  radius2[i] = radius[i]*radius[i];
 }
console.log(calculate(radius2,formula));