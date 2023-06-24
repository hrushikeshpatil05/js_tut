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
  
});}
// t();
let res3 = window.setTimeout(t,5000);
}
createEventListener();
