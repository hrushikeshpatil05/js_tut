function createEventListener(){
  let count = 0;
  function a(){
    console.log("hii");
  }
  var t = function() {document.getElementById("clickMe").addEventListener("click", function xyz(){ //when event click occurs, this callback function (xyz) is called into callstack
  console.log("Button clicked",++count);
  function b(){
    console.log("hello");
  }
  let res2 = window.setTimeout(a,3000);
  let res = window.setTimeout(b,3000);
  let startDate = new Date().getTime();
let futureTime = startDate;
while(futureTime < startDate + 10000){
  futureTime = new Date().getTime();
}
console.log("expired");
});}
// t();
let res3 = window.setTimeout(t,5000);

}
createEventListener();


// javascript runtime environment

// 1. Code  2. Parser  3. Compiler  4. Execution