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

const diameter = function (radius) {
   return 2*radius;
}

const circumference = function (radius) {
   return 2*Math.PI*radius;
}

const area = function (radius) {
   return Math.PI*radius*radius;
}

const calculate = function (radius, logic) {
   const res = [];
   for (let i=0 ; i<radius.length; i++){
    res.push(logic(radius[i]));
   }
   return res;
}

// console.log(calculate(radius,diameter));

// console.log(calculate(radius,circumference));

// console.log(calculate(radius,area));

// mapping

console.log(radius.map(area));

// also we can make our map function like below

Array.prototype.calculate2 = function (logic) {
  const res = [];
  for (let i=0 ; i<this.length; i++){
   res.push(logic(this[i]));
  }
  return res;
}

console.log(radius.calculate2(area));

// const res = radius.map((x) =>  x.toString(2));

// console.log(res); 

// filter function

const res = radius.filter( function (x){
  return x%2;
})
console.log(res);
// or we can use arrow function

const res2 = radius.filter((x) => x%2);

console.log(res2);

// reduce function 

const res3 = radius.reduce(function (total,curr){
  total = total + curr;
  return total;
},0);

console.log(res3);

// find max

const ans = radius.reduce(function(max,curr){
  if(curr>max){
    max=curr;
  }
  return max;
},0)

console.log(ans);

// How to use promises to avoid callback hell and inversion of control

const fetchRes = fetch("https://www.boredapi.com/api/activity");

fetchRes.then(function (data){
  data.json().then( function (res){
    console.log(res);
  })
})


