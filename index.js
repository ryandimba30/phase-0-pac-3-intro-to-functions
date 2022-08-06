// Follow along with the examples here
function doNothing() {}
function sayHello() {
    console.log("Hello!");
  }
  sayHello();
  function sayHelloToIsabel() {
    console.log("Hello, Isabel!");
  }
  function sayHelloToSofia() {
    console.log("Hello, Sofia!");
  }
  function sayHelloToBrendan() {
    console.log("Hello, Brendan!");
  }
  sayHelloToIsabel();
sayHelloToSofia();
sayHelloToBrendan();
function doSomething(thing) {
    console.log(thing);
  }
  
  doSomething("anything")`function sayHelloTo`;(firstName) {
    console.log(`Hello, ${firstName}!`);
  }
  
  sayHelloTo("Isabel"); // "Hello, Isabel!"
  sayHelloTo("Jane"); // "Hello, Jane!"
  sayHelloTo("R2-D2"); // "Hello, R2-D2!"
  sayHelloTo(1); // "Hello, 1!"
  
  // ^ Note that in the above, JavaScript coerces the number 1 to the string "1"
  function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  }
  say("Goodbye", "Julio");