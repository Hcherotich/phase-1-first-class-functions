function receivesAFunction(callback) {
   callback();
}

function returnsANamedFunction() {
   // Define and return a named function
   function namedFunction() {
       // Function body
   }
   return namedFunction;
}

function returnsAnAnonymousFunction() {
   // Define and return an anonymous function
   return function() {
       // Function body
   };
}
