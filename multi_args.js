// Passing multiple arguments to a function with arguments object
function foo() {
  for (var i = 0; i < arguments.length; i++) {
    console.log((arguments[i]));
  }
}

foo(1,3,4)
